import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

export default function index() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>This is a page for my projects.</h2>
        <h3>Feel free to browse</h3>
      </div>
    </Layout>
  )
}
