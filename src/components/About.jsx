import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '1.2em',
    justifyContent: 'center',
  },
  introImageContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  introImage: {
    maxWidth: '100%'
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  const [aboutMD, setAboutMD] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown>
      {text}
    </ReactMarkdown>
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    fetch(endpoints.aboutMD, {
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => setAboutMD(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} id='about'/>
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introImageContainer} className='col-12 col-lg-6'>
                    <img style={styles.introImage} src={data?.imageSource} alt="profile" className='shadow rounded' />
                  </Col>
                  <Col style={styles.introTextContainer} className='col-12 col-lg-6'>
                    {parseIntro(aboutMD)}
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
