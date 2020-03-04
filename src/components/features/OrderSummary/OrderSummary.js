import React from 'react';
import PropTypes from 'prop-types';

import {formatPrice} from '../../../utils/formatPrice';
// import {calculateTotal} from '../../../utils/calculateTotal';

import styles from './OrderSummary.scss';
// import {Row, Col} from 'react-flexbox-grid';

const OrderSummary = (tripCost) => {
  const priceFormat = formatPrice(tripCost);
  //   const price = calculateTotal();
  console.log('cost', priceFormat);
  console.log('tripCost', tripCost);


  return (
    <h2 className={styles.component} >
      Total:
      {/* <strong>{price}</strong> */}
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string, 
};

export default OrderSummary;