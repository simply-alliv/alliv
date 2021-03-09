import React, { FunctionComponent, Fragment } from "react"

import { SEO } from "../components"
import { Portfolio } from "../containers"

const IndexPage: FunctionComponent = () => {
  return (
    <Fragment>
      <SEO title="Works" />
      <Portfolio />
    </Fragment>
  )
}

export default IndexPage
