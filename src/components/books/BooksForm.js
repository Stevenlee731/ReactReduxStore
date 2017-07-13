import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/booksActions'
import {findDOMNode} from 'react-dom'
import {Panel, FormControl, FormGroup, ControlLabel, Well, Button} from 'react-bootstrap'

class BooksForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const book=[{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.actions.postBook(book)
  }

  render() {
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              ref="title"
            />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              ref="description"
            />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Price"
              ref="price"
            />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit}> Save book</Button>
        </Panel>
      </Well>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(booksActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BooksForm)
