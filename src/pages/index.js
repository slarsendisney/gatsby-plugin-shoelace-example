import React from "react"
import Alert from "../components/Alert"
import Layout from "../components/Layout"

const catSrc =
  "https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
export default ({ location }) => {
  return (
    <Layout location={location}>
      <div className="row">
        <div className="col-12">
          <p>
            This is a little somthing I threw together to demo{" "}
            <a href="https://shoelace.style">Shoelace</a> running on a GatsbyJS
            site using{" "}
            <a href="https://shoelace.style">gatsby-plugin-shoelace</a>.
          </p>
          <Alert />
        </div>
        <div className="col-12">
          <h2>Cat Cards</h2>
          <p>Cards with a sprinkle of box shadow.</p>
        </div>
        <div className="col-4">
          <sl-card class="card-image">
            <img
              slot="image"
              src={catSrc}
              alt="A kitten walks towards camera on top of pallet."
            />
            This is a kitten, but not just any kitten. This kitten likes walking
            along pallets.
          </sl-card>
        </div>
        <div className="col-4">
          <sl-card class="card-image">
            <img
              slot="image"
              src={catSrc}
              alt="A kitten walks towards camera on top of pallet."
            />
            This is a kitten, but not just any kitten. This kitten likes walking
            along pallets.
          </sl-card>
        </div>
        <div className="col-4">
          <sl-card class="card-image">
            <img
              slot="image"
              src={catSrc}
              alt="A kitten walks towards camera on top of pallet."
            />
            This is a kitten, but not just any kitten. This kitten likes walking
            along pallets.
          </sl-card>
        </div>
      </div>
    </Layout>
  )
}
