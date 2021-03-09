import React, { FunctionComponent, Fragment } from "react"

import { SEO } from "../components"
import { Me } from "../containers"

const MePage: FunctionComponent = () => {
  return (
    <Fragment>
      <SEO title="Me" />
      <Me />
    </Fragment>
  )
}

export default MePage
