import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Row, Col, Well, Button} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import * as cartActions from '../../actions/cartActions'

class BookItem extends Component {
  constructor(props, context){
    super(props, context)

    this.handleCart = this.handleCart.bind(this)
  }

  handleCart(){
    const book = [...this.props.cart, {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price
    }]
    this.props.actions.addToCart(book)
  }
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>usd. {this.props.price}</h6>
            <Button onClick={this.handleCart} bsStyle='primary'>Buy Now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state, OwnProps) {
  return {
    books: state.books,
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)
