import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import { About } from "../containers"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  )
}

export default IndexPage
