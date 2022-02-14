import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={this.props.tripCost}/>
    </Col>
  </Row>
);

export default OrderForm;