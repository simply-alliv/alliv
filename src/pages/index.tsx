import React, { FunctionComponent, Fragment } from "react"

import { SEO } from "../components"
import { Home } from "../containers"

const IndexPage: FunctionComponent = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <Home />
    </Fragment>
  )
}

export default IndexPage
