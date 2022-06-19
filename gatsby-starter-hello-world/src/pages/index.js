import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, img } from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer based in Montréal</p>
          <Link className={btn} to="/projects">
            View My Projects
          </Link>
        </div>
        <GatsbyImage className={img} image={image} alt="banner" />
      </section>
    </Layout>
  )
}

//export image query

export const query = graphql`
  query bannerImage {
    file(relativePath: { eq: "meprofessional.jpeg" }) {
      id
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`
