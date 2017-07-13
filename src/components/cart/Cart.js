import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/booksActions'
import * as cartActions from '../../actions/cartActions'
import {Panel, Col, Well, Row, Button, ButtonGroup, Label} from 'react-bootstrap'
import BookItem from '../books/BookItem'
import BooksForm from '../books/BooksForm'

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderEmpty() {
    return(
      <div></div>
    )
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(cartItem => {
      return(
        <Panel key={cartItem._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6><span>     </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>usd. {cartItem.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle='success'></Label></h6>
            </Col>
            <Col xs={12} sm={2}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle='default' bsSize='small'>-</Button>
                <Button bsStyle='default' bsSize='small'>+</Button>
                <span>     </span>
                <Button bsStyle='danger' bsSize='small'>Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    })
    return(
      <Panel
        header="Cart"
        bsStyle="primary"
        >
        {cartItemsList}
      </Panel>
    )
  }

  render() {

      {if (this.props.cart.length > 0) {
        return this.renderCart()
      } else {
        return this.renderEmpty()
      }}

  }
}

function mapStateToProps(state, OwnProps) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
