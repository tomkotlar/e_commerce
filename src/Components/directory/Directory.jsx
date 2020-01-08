import React from "react"
import "./Directory.styles.scss"

import MenuItem from "../menu-item/MenuItem"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
