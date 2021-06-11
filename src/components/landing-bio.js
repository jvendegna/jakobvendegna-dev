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
          <Description>{data.site.siteMetadata.description}</Description>
          <p>
            Feel free to snatch up my resume and get the ball rolling. Email me at me at jakobvendegna dot dev. LinkedIn messages will receive no response.
          </p>
          <p>
            Platform engineering is the stuff you can't find on stackoverflow. There is no googling the right answer as to how to best host your particular platform of internal and external services. There is however, a right way to do it.
            I utilize my critical thinking skills and vast experience coming from embedded hardware development, developing early automated PaaS hosting products (Automated WordPress hosting on shared servers), jumping into Kubernetes head first at the advent, and most recently using all these chops to provide CI/CD and Data Versioning to ML models centered around Optical Character Recognition and Relational Learning.
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
