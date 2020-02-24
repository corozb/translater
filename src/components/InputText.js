import React, { Component } from 'react';
import '../styles/css/input.css';

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
    console.log('input: ', textToTranslate);
    let language = this.refs.language.value;
    console.log('translate: ', language);
    this.props.translate(textToTranslate, language);
  }
  render() {
    return (
      <div>
        <form className='Form' onSubmit={this.translate}>
          <input
            type='text'
            placeholder='Enter a Text'
            className='formInput'
            ref='textToTranslate'
          />
          <select className='formSelect' ref='language'>
            <option value='en'>English</option>
            <option value='ru'>Russian</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='zh'>Chineese</option>
            <option value='it'>Italian</option>
          </select>
          <input type='submit' className='button' value='Translate' />
        </form>
      </div>
    );
  }
}

export default inputText;
