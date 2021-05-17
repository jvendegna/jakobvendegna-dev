import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <p>
            Why did we start "Save the Whales"? Because their health is directly
            tied to the overall health of a system "Earth", if you're paying
            attention and watching closely for signals. Beached and bloated?
            There's a reason why.
          </p>
          <p>
            I speak a little whale. These little Docker whales are absolutely
            capable of providing those deep insights into the health of a given
            system. Especially if that system is Kubernetes, or another
            Container Orchestrator.
          </p>
          <p>
            But they aren't just a thermometer. I developed this site in a
            container. I used a container for my development environment. Linked
            my IDE to the container. Developed this gatsbyjs site from within a
            containerized environment. Fun thing is: You can too! If you develop
            inside the same container you deploy... it works for everyone,
            everywhere, always. Get at me.
          </p>
          <h4>Yeah, I got cheat codes to level up your team, fast.</h4>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
