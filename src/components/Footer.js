import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query Copyrights {
      site {
        siteMetadata {
          copyrights
        }
      }
    }
  `)

  const { copyrights } = data.site.siteMetadata

  return (
    <footer>
      <p>{copyrights}</p>
    </footer>
  )
}
