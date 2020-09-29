import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import { Home } from "../containers"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
