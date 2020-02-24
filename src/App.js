import React, { Component } from 'react';
import axios from 'axios';
import InputText from './components/InputText';
import OutputText from './components/OutputText';
// import './'

const key =
  'trnsl.1.1.20200205T233005Z.5e79d21d43eacfa9.ecbd7346e852b59ea0cda1c23c191dd957b75ae4';

class App extends Component {
  constructor() {
    super();
    this.state = {
      output: ''
    };
    this.translate = this.translate.bind(this);
  }
  translate(textToTranslate, language) {
    axios
      .get(
        'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' +
          key +
          '&lang=' +
          language +
          '&text=' +
          textToTranslate
      )
      .then(response => {
        var output = response.data.text[0];
        this.setState({ output });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className='container'>
        <h2 className='container__title'>Word Translator</h2>
        <InputText translate={this.translate} />
        <OutputText output={this.state.output} />
      </div>
    );
  }
}

export default App;
