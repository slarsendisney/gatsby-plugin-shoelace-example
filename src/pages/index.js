import React from "react"
import Alert from "../components/Alert"
import Layout from "../components/Layout"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <div className="row">
        <div className="col-12">
          <p>
            This is a little something I threw together to demo{" "}
            <a href="https://shoelace.style">Shoelace</a> running on a GatsbyJS
            site using{" "}
            <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-shoelace">
              gatsby-plugin-shoelace
            </a>
            .
          </p>
          <Alert />
        </div>
      </div>
    </Layout>
  )
}
