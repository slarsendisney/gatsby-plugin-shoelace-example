import React from "react"
import Alert from "../components/Alert"
import Layout from "../components/Layout"
import CodeBlock from "../components/CodeBlock"

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
          <h3>What is Shoelace?</h3>
          <p>
            A forward-thinking library of web components. Designed in New
            Hampshire by Cory LaViska.
          </p>
          <ul>
            <li>Works with all frameworks</li>
            <li>Works with CDNs</li>
            <li>Fully customizable with CSS</li>
            <li>Built with accessibility in mind</li>
            <li>Open source</li>
          </ul>
          <a href="https://shoelace.style/">
            <sl-button type="primary">Read the docs</sl-button>
          </a>
          <h3>What is Gatsby?</h3>
          <p>
            Gatsby is a free and open source framework based on React that helps
            developers build blazing fast websites and apps.
          </p>
          <a href="https://shoelace.style/">
            <sl-button>Read the docs</sl-button>
          </a>
          <h3>Adding Shoelace to Your Gatsby Site</h3>
          <p>Install the plugin via npm within your gatsby project:</p>
          <CodeBlock language="shell">{`npm install --save gatsby-plugin-shoelace`}</CodeBlock>
          <p>Add to your gatsby config:</p>
          <CodeBlock language="javascript">{` module.exports = {
  siteMetadata: {
    plugins: [
      \`gatsby-plugin-shoelace\`,
    ],
}`}</CodeBlock>
          <p> That's it! You're ready to code!</p>
        </div>
      </div>
    </Layout>
  )
}
