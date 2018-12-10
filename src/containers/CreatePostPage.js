import React from 'react';
import NewPostForm from '../components/NewPostForm';

class CreatePostPage extends React.Component{

  handleFormSubmit = event => {
    event.preventDefault();
    debugger;
  }

  render() {
    return(
      <NewPostForm handleSubmit={this.handleFormSubmit}/>
    )
  }
}

export default CreatePostPage
