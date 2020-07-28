import React from "react"
import { Helmet } from "react-helmet"

function SEO() {
  const metaDescription = "An example site for gatsby-plugin-shoelace."
  const title = "gatsby-plugin-shoelace - Example Site"
  const url = "https://gatsby-plugin-shoelace.web.app/"
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Sam Larsen-Disney" />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:description" content={metaDescription} />

      <html lang="en" />
    </Helmet>
  )
}

export default SEO
