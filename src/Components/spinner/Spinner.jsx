import React from "react"

import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles"

const Spinner = WrappedComponent => {
  const InnerSpinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return InnerSpinner
}

export default Spinner
