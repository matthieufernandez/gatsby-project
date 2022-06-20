import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function index({ data }) {
  const projectInfo = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Some of the projects I've completed this year.</h2>

        <div className={projects}>
          {projectInfo.map(project => {
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
              >
                <div>
                  <GatsbyImage
                    style={{ borderRadius: "5px" }}
                    alt="project thumbnail"
                    image={getImage(
                      project.frontmatter.thumb.childImageSharp.gatsbyImageData
                    )}
                  />
                  <h4 style={{ paddingTop: "10px" }}>
                    {project.frontmatter.title}
                  </h4>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
  query projectInfo {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            id
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
          featured {
            id
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: WEBP
              )
            }
          }
        }
        id
      }
    }
  }
`
