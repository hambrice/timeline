import React from 'react';
import { connect } from 'react-redux';

import PostShow from '../components/PostShow';

class PostShowPage extends React.Component {


  render() {
    return (<PostShow posts={this.props.posts} postId={parseInt(this.props.match.params.postId)}/>)
  }


}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}


export default connect (mapStateToProps, null)(PostShowPage)
