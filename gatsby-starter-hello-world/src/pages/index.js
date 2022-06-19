import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { header, btn, img } from "../styles/home.module.css"

export default function Home({ data }) {
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
        <img
          className={img}
          style={{ maxWidth: "90%" }}
          src="/meprofessional.jpeg"
          alt="banner of me and my cat sushis"
        />
      </section>
    </Layout>
  )
}
