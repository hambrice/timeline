import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { newPost } from '../actions/postActions';
import NewPostForm from '../components/NewPostForm';

class CreatePostPage extends React.Component{



  handleFormSubmit = event => {
    event.preventDefault();
    let newPost = {}
    let inputs = event.target.getElementsByTagName('input');
    newPost.clientName = inputs[0].value
    newPost.postImage = inputs[1].value
    newPost.postBody = inputs[2].value
    newPost.status = "pending"
    this.props.newPost(newPost)
  }

  render() {
    return(
      <NewPostForm handleSubmit={this.handleFormSubmit}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    newPost
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(CreatePostPage)
