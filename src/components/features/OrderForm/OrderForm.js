import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOpinion/OrderOption';

import pricing from '../../../data/pricing.json';

import {Row, Col} from 'react-flexbox-grid';

import settings from '../../../data/settings.js';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost, name, countryCode, id) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  
  console.log('name', name);

  const payload = {
    ...options,
    totalCost,
    name,
    countryCode,
    id,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, name, countryCode, id}) => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, name, countryCode, id)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;