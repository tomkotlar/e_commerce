import React, { Component } from "react"
import { Route } from "react-router-dom"
import CollectionsOverview from "../../Components/collections-overview/CollectionsOverview"
import CollectionPage from "../collection/CollectionPage"

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'

import Spinner from '../../Components/spinner/Spinner'

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview)
const CollectionPageWithSpinner = Spinner(CollectionPage)
// match is object form reasct-route-dom
class ShopPage extends Component {

  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null


  componentWillMount() {
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot =  collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  updateCollections(collectionsMap)  
  this.setState({loading: false})
  })
  }
  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
        render={props => ( 
        <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage)
