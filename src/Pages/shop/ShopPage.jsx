import React, { Component } from "react"
import { Route } from "react-router-dom"
import CollectionsOverview from "../../Components/collections-overview/CollectionsOverview"
import CollectionPage from "../collection/CollectionPage"

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

// match is object form reasct-route-dom
class ShopPage extends Component {
  unsubscribeFromSnapshot = null

  componentWillMount() {
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot =  collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  console.log(collectionsMap)  
  })
  }
  render() {
    const {match} = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
        component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default ShopPage
