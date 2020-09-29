import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import { Portfolio } from "../containers"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Portfolio />
    </Layout>
  )
}

export default IndexPage
