import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  let linkStyle = {
    color: "black",
    textDecoration: "none",
    font: "hevenica",
  }
  let navStyle = {
    width: "100%",
  }

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="about">
        About
      </Link>
    </nav>
  )
}

export default Nav
