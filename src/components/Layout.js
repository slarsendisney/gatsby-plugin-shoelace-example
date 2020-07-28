import React from "react"
import { Link } from "gatsby"

const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Links = ["", "cards", "forms", "article"]
export default ({ children, location }) => {
  return (
    <div className="container">
      <div className="row center">
        <div className="col-12">
          <h1 className="">Example Gatsby Site.</h1>
          <p className="margin-small">
            Gatsby + Shoelace. A match made in heaven.
          </p>
        </div>

        <div className="col-2 hidden-sm" />
        {Links.map(link => (
          <div className="col-2">
            <Link
              to={`/${link}`}
              style={{ textDecoration: "none" }}
              className="center"
            >
              <p
                className={
                  location.pathname === `/${link}` ? "active-link" : ""
                }
              >
                {link === "" ? "Home" : capitalize(link)}
              </p>
            </Link>
          </div>
        ))}
        <div className="col-2 hidden-sm" />
      </div>

      {children}
      <div className="row">
        <div className="col-12 center">
          <p>
            Gatsby example and{" "}
            <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-shoelace">
              plugin
            </a>{" "}
            developed with <sl-icon name="heart" /> by{" "}
            <a href="https://twitter.com/SamLarsenDisney">@SamLarsenDisney</a>.
          </p>
          <p>
            <a href="https://shoelace.style">Shoelace</a> was developed by{" "}
            <a href="https://twitter.com/claviska">@claviska</a>. The site makes
            use of <a href="https://simplegrid.io/">simplegrid</a> for the grid
            layout.
          </p>
        </div>
      </div>
    </div>
  )
}
