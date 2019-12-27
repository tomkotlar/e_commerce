import React from "react"
import "./Collection.styles.scss"

import CollectionItem from "../preview-item/CollectionItem";

const Collection = ({ title, items }) => {
   console.log(items)
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item, index) => index < 4 )
        .map(({id, ...otherItemProps})=> (
          <CollectionItem key={id}  {...otherItemProps}/>
        ))}
      </div>
    </div>
  )
}

export default Collection
