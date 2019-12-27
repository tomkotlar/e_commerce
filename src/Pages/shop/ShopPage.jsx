import React, { Component } from 'react'
import  ShopData  from "./ShopData";
import  Collection from "../../Components/preview/Collection";

class ShopPage extends Component {
    state = {
        collections:  ShopData
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <Collection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}
export default ShopPage