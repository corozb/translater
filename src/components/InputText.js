import React, { Component } from 'react';

class inputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToTranslate: '',
      language: 'en'
    };
    this.translate = this.translate.bind(this);
  }
  translate(event) {
    event.preventDefault();
    let textToTranslate = this.refs.textToTranslate.value;
    let language = this.refs.language.value;
    this.props.translate(textToTranslate, language);
  }
  render() {
    return (
      <div>
        <form className='form-inline' onSubmit={this.translate}>
          <input
            type='text'
            placeholder='Enter a Text'
            className='form-control'
            ref='textToTranslate'
          />
          <select className='form-control' ref='language'>
            <option value='en'>English</option>
            <option value='ru'>Russian</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='zh'>Chineese</option>
          </select>
          <input type='submit' className='btn btn-primary' value='Translate' />
        </form>
      </div>
    );
  }
}

export default inputText;
