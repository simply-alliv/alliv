import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import { Me } from "../containers"

const MePage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Me" />
      <Me />
    </Layout>
  )
}

export default MePage
