import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

import "./index.css"

interface ProfilePictureProps {
  isOpaque?: boolean
}

export const ProfilePicture: FunctionComponent<ProfilePictureProps> = isOpaque => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/profile-picture.png/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2052) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      alt="Fullstack Software Developer Allistair Vilakazi."
      className={isOpaque ? "opaque" : ""}
    />
  )
}
