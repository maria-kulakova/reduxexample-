import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <div>
          <label>Title:</label>
          <br />
          <input type="text" name="title" onChange={this.onChange}
            value={this.state.title}/>
        </div>
        <br />
        <div>
          <label>Body:</label>
          <br />
          <textarea type="text" name="body" onChange={this.onChange}
            value={this.state.body} />
        </div>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default PostForm;
