import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { UPDATE_BOOK } from '../types';
import { updateBook } from '../actions';

class EditBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Search for the book that the user wants to edit, using params
  componentDidMount() {
    const currentBook = this.props.books.filter(
      book => book.id === this.props.match.params.id
    );

    this.setState({ ...currentBook[0] });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  editBookHandler = (dispatch, e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page.

    const { id, title, author, description, price } = this.state;

    const updatedBook = {
      id,
      title,
      author,
      description,
      price
    };

    updateBook(updatedBook, dispatch);
  };

  render() {
    return (
      <div className="container mx-auto w-50">
        <form onSubmit={this.editBookHandler.bind(this, this.props.dispatch)}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={this.state.author}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label />
            <textarea
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit Book
          </button>
        </form>
      </div>
    );
  }
}

export default EditBookForm;
