import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/booksActions'
import {Grid, Col, Row, Button} from 'react-bootstrap'
import BookItem from './BookItem'
import BooksForm from './BooksForm'

class BookList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.getBooks()
  }

  render() {
    const rowStyle = {
      marginTop: '15px'
    }
    const bookList = this.props.books.map(book => {
      return(
        <Col xs={12} sm={6} md={4} key={book.id}>
          <BookItem
            id={book.id}
            title={book.title}
            description={book.description}
            price={book.price}
          />
        </Col>
      )
    })
    return (
      <Grid>
        <Row style={rowStyle}>
          <Col xs={12} sm={6}>
            <BooksForm/>
          </Col>
          {bookList}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, OwnProps) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(booksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
