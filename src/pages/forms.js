import React from "react"
import Mailform from "../components/Mailform"
import Layout from "../components/Layout"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <div className="row">
        <div className="col-12">
          <h3>Example Form</h3>
        </div>
        <div className="col-12 ">
          <Mailform />
        </div>
      </div>
    </Layout>
  )
}
