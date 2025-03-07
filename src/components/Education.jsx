import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
  iconStyle: {
    width: 50,
    margin: 5
  },
};

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.education))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header}/>
      {data
        ? (
          <div className="section-content-container" id='education'>
            <Container>
              <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item) => (
                  <Fade>
                    <TimelineItem
                      key={item.title + item.dateText}
                      dateText={item.dateText}
                      dateInnerStyle={{ background: theme.accentColor }}
                      style={styles.itemStyle}
                      bodyContainerStyle={{ color: theme.color }}
                    >
                      <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          <img src={item.icon.src} style={styles.iconStyle}></img>
                          {item.subtitle}
                        </h4>
                      </div>
                    </TimelineItem>
                  </Fade>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> } 
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
