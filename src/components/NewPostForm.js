import React from 'react';

const NewPostForm = (props) =>
<form>
  <div>
    <label>Select Client</label>
    <input type="text" name="client-name"/>
  </div>
  <div>
    <label>Select Image</label>
    <input type="file" name="image" accept="image/*,video/*"/>
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
