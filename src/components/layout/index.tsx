import React, { FunctionComponent } from "react"

import { Link } from "gatsby"

import { Logo } from "../../components"
import { Routes } from "../../common/enums"

import "./index.css"

type LayoutProps = {}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="shell flex flex__column flex__justify-content--space-between">
      <div className="navigation navigation-top flex flex__justify-content--center flex__align-items--center">
        <Link className="button" id="home-link" to={Routes.home}>
          <Logo />
        </Link>
      </div>
      <div className="navigation navigation-left flex flex__align-items--center">
        <Link
          className="button vertical-button"
          id="about-link"
          to={Routes.about}
        >
          About
        </Link>
      </div>
      <div className="navigation navigation-right flex flex__align-items--center">
        <Link
          className="button vertical-button"
          id="portfolio-link"
          to={Routes.portfolio}
        >
          Portfolio
        </Link>
      </div>
      <div className="routes">
        <main>{children}</main>
      </div>
      <div className="navigation navigation-bottom flex flex__justify-content--center flex__align-items--center">
        <a
          className="button"
          id="download-resume-link"
          href="/documents/allistair-vilakazi-cv.pdf"
          download
        >
          Download Full Resume (PDF)
        </a>
      </div>
    </div>
  )
}
