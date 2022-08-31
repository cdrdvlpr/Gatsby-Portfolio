import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

// styles
import * as styles from "../styles/about.module.css"

export default function About({ data }) {
  const { contact } = data.site.siteMetadata
  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <div className={styles.master}>
        <Img
          className={styles.image}
          fixed={data.file.childImageSharp.fixed}
          alt={title}
        />
        <p>Self-taught front-end developer with high passion and enthusiasm.</p>
        <p>Ambitious, achiever.</p>
        <p>Collaboration with the team is number one priority.</p>
        <hr />
        <p>
          Interested? Contact me here:
          <strong>
            <a href="mailto:mahmoudbk250@hotmail.com"> {contact}</a>
          </strong>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutInfo {
    file(
      relativePath: {
        eq: "76730105_2539034179536791_6655125397941780480_n.jpg"
      }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        contact
      }
    }
  }
`
