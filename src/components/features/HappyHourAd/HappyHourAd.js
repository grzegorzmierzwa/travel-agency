import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
// import {Grid, Row} from 'react-flexbox-grid';
// import Section from '../../layout/Section/Section';


class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  render() {
    const {title, promoDescription} = this.props;

    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>
    );
  }
}

export default HappyHourAd;