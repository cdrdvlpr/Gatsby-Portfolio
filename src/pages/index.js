import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

// styles
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>UX designer &amp; Web Devloper, based in Aleppo.</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
        {/* <img
          src="/—Pngtree—modern flat design concept of_5332902.png"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        ></img> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(
      relativePath: { eq: "—Pngtree—modern flat design concept of_5332902.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
