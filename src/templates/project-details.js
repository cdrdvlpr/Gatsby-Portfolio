import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

// styles
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectDetials($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack
        title
      }
    }
  }
`
