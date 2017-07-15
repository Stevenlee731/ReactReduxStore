import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions'
import {Modal, Panel, Col, Row, Button, ButtonGroup, Label} from 'react-bootstrap'

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false
    }
  }

  open(){
    this.setState({showModal:true})
  }

  close(){
    this.setState({showModal:false})
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
        <Row>
          <Col xs={12}>
            <h6>Total Amount:</h6>
            <Button onClick={this.open.bind(this)} bsStyle='success' bsSize='small'>
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order has been saved</h6>
            <p>You will receive an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}>
              <h6>total $:</h6>
            </Col>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
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
