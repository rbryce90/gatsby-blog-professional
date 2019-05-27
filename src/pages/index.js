import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Website </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      reprehenderit eaque laudantium libero facere officia alias atque dicta
      repellat. Dolores non esse molestiae perferendis! Error, quidem? Sunt
      alias ipsa labore?
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
