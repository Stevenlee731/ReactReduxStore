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

  onIncrement(_id) {
    this.props.actions.updateCart(_id, 1)
  }

  onDecrement(_id, quantity) {
    if(quantity > 1) {
      this.props.actions.updateCart(_id, -1)
    }
  }

  onDelete(_id) {
    const currentBookToDelete = this.props.cart
    const indexToDelete = currentBookToDelete.findIndex(cart => {
      return cart._id === _id
    })
    let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)]

      this.props.actions.deleteCartItem(cartAfterDelete)
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
              <h6>qty. <Label bsStyle='success'>{cartItem.quantity}</Label></h6>
            </Col>
            <Col xs={12} sm={2}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)} bsStyle='default' bsSize='small'>-</Button>
                <Button onClick={this.onIncrement.bind(this, cartItem._id)} bsStyle='default' bsSize='small'>+</Button>
                <span>     </span>
                <Button onClick={this.onDelete.bind(this, cartItem._id)} bsStyle='danger' bsSize='small'>Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this)
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
