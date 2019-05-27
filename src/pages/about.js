import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "mozart.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
      <h1>This is my About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit
        ratione placeat quasi at beatae natus? Quod reiciendis labore
        consequuntur in sapiente rem fuga ipsum totam vel, obcaecati a illo,
        aperiam ullam deserunt sunt beatae, veritatis necessitatibus omnis
        consequatur saepe enim tenetur voluptates itaque corporis! Earum sit
        nihil necessitatibus, sequi, fugit nostrum molestiae sint, assumenda
        totam error voluptatibus consectetur rem?
      </p>
    </Layout>
  )
}

export default AboutPage
