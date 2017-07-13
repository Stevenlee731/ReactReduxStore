import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../../actions/booksActions'

class BookList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.getBooks()
  }

  render() {
    const bookList = this.props.books.map((book, i) => {
      return(
        <div key={i} >
          <h2>{book.title}</h2>
          <h2>{book.description}</h2>
          <h2>{book.id}</h2>
        </div>
      )
    })
    return (
      <div>{bookList}</div>
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
