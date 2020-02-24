import React, { Component } from 'react';

class OutputText extends Component {
  render() {
    return (
      <div>
        <h2 className='text-success'>{this.props.output}</h2>
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

export default OutputText;
