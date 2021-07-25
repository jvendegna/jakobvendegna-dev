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
            Platform engineering is the practice of constantly iterating on the SDLC to facilitate faster and more reliable delivery of business value. Site Reliability Engineering is the practice of taking that delivered package and hosting it, reliably. Both require a fixation on eliminating toil. Most of the 'how?' you cannot find on stackoverflow. There is no googling the right answer as to how to best enable your team to deliver and reliably serve your particular platform of internal and external services. There is however, a right way to do it.
            I utilize my critical thinking skills and vast experience coming from embedded hardware development, developing early automated PaaS hosting products (Automated WordPress hosting on shared servers, yeah it was as horrible as it sounds), jumping into Kubernetes head first at the advent, and most recently using all these chops to provide Continuous MLOps, including Data Versioning to model delivery teams centered around Optical Character Recognition and Relational Learning.
          </p>
          <h4>I enable teams to rapidly and reliably deliver their best work.</h4>
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
