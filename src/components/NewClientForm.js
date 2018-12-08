import React from 'react';

const NewClientForm = (props) =>
<form>
  <div>
    <label>Name of Business</label>
    <input type="text" name="business-name"/>
  </div>
  <div>
    <label>Business Logo</label>
    <input type="file" name="business-logo" accept="image/*"/>
  </div>
  <div>
    <label>Name of Contact</label>
    <input type="text" name="contact-name" />
  </div>
  <div>
    <label>Contact Job Title</label>
    <input type="text" name="contact-job-title"/>
  </div>
  <div>
    <label>Information about Business</label>
    <input type="text" name="business-info"/>
  </div>
  <div>
    <label>Marketing Notes</label>
    <input type="text" name="marketing-notes"/>
  </div>
  <div>
    <input type="submit" value="Submit Post for Approval"/>
  </div>
</form>

export default NewClientForm
