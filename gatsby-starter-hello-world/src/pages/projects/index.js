import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"

export default function index({ data }) {
  const projectInfo = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>These are the projects I've worked on.</h2>
        <h3>Feel free to browse</h3>

        <div className={projects}>
          {projectInfo.map(project => {
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
              >
                <div>
                  <h4>{project.frontmatter.title}</h4>
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
        }
        id
      }
    }
  }
`
