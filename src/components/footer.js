import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import solaceLogo from "../images/solace-logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDev,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer>
    <Container>
      <Row className="pt5">
        <Col xs={12} sm={12} md={12} lg={2} xl={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://solace.com"
          >
            <img src={solaceLogo} alt="Solace Logo" />
          </a>
        </Col>
      </Row>
      <Row className="pt4 pb4">
        <Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <ul className="menu">
            <li>
              <a
                href="https://solace.com/products/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Products
              </a>
              <ul className="sub-menu">
                <li>
                  <a
                    href="https://solace.com/products/platform/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Platform
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/products/event-broker/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Event Broker
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/products/event-broker/software/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Event Broker: Software
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/products/event-broker/appliance/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Event Broker: Appliance
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/products/event-broker/cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Event Broker: Cloud
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/products/portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PubSub+ Event Portal
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <ul className="menu">
            <li>
              <a
                href="https://solace.com/company/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company
              </a>
              <ul className="sub-menu">
                <li>
                  <a
                    href="https://solace.com/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/company/team/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/company/customers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/company/partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/events/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/legal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legal
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <ul className="menu">
            <li>
              <a href="https://solace.com/developers/">Developers</a>
              <ul className="sub-menu">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.solace.com/"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/blog/category/developers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.community"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/support/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://solace.com/contact/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://console.solace.cloud/login"
                  >
                    Log In
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} xl={3}></Col>
      </Row>
    </Container>
    <Container>
      <Row className="footer-bottom">
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="tl pt3 pb3">
          <a
            href="https://solace.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; {new Date().getFullYear()} Solace Corporation
          </a>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="tr pt2 pb2">
          <a
            href="https://dev.to/solacedevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDev} size="2x" className="ma2" />
          </a>
          <a
            href="https://github.com/solacedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className="ma2" />
          </a>
          <a
            href="https://www.linkedin.com/company/solacedotcom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="ma2" />
          </a>
          <a
            href="https://twitter.com/solacedotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" className="ma2" />
          </a>
          <a
            href="https://www.youtube.com/SolaceSystems"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" className="ma2" />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
