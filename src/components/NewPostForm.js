import React from 'react'

const NewPostForm = (props) =>

<form onSubmit={props.handleSubmit}>
  <div>
    <label>Client Name</label>
    <input type="text" name="client-name"/>
  </div>
  <div>
    <label>Image URL</label>
    <input type="text" name="image"/>
  </div>
  <div>
    <label>Post Body</label>
    <input type="text" name="post-body"/>
  </div>
  <div>
    <input type="submit" value="Submit Post for Approval"/>
  </div>
</form>

export default NewPostForm
