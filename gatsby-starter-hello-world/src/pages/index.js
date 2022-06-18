import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, img } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer based in Montréal</p>
          <Link className={btn} to="/projects">
            Visit My Projects
          </Link>
        </div>
        <img
          className={img}
          src="/meprofessional.jpeg"
          alt="banner picture of me and my cat sushis"
        />
      </section>
    </Layout>
  )
}
