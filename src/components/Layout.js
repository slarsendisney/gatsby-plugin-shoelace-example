import React from "react"
import { Link } from "gatsby"

const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Links = ["", "forms", "article"]
export default ({ children, location }) => {
  console.log(location.pathname)
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Example Gatsby Site.</h1>
          <p>Gatsby + Shoelace. A match made in heaven.</p>
          <sl-tab-group>
            {Links.map(link => (
              <sl-tab
                slot="nav"
                panel="general"
                active={location.pathname === `/${link}`}
              >
                <Link to={`/${link}`} style={{ textDecoration: "none" }}>
                  {link === "" ? "Home" : capitalize(link)}
                </Link>
              </sl-tab>
            ))}
          </sl-tab-group>
        </div>
      </div>
      {children}
      <div className="row">
        <div className="col-12 center">
          <p>
            Gatsby example and plugin developed with <sl-icon name="heart" /> by{" "}
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
