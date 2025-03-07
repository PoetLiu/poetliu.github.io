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
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '1.2em',
    justifyContent: 'center',
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  introImage: {
    borderRadius: 5
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
      <Header title={header} />
      <div className="section-content-container" id='about'>
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" className='shadow rounded' />
                  </Col>
                  <Col style={styles.introTextContainer}>
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
