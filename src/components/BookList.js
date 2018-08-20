import React from 'react';

import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';
import EditBookForm from './EditBookForm';
import { Consumer } from '../context';
import { Route, Switch } from 'react-router-dom';

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/addBook" component={AddBookForm} />
          <Route path="/editBook/:id" component={EditBookForm} />
        </Switch>
      </div>
    );
  }
}

export default BookList;
