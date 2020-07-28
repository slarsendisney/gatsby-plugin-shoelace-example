import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <div className="row">
        <div className="col-12">
          <h2>404</h2>
          <p>Woah, you seemed to have found a route that doesn't exist.</p>
          <Link to="/">
            <sl-button type="primary">Take me home</sl-button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
