import React, { Component } from 'react';
import axios from 'axios';
import InputText from './components/InputText';
import OutputText from './components/OutputText';
import './styles/css/container.css';

const API_KEY =
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
    let sLanguange = [];
    let sTranslate = [];
    let outputResult = [];
    let bdSearched = [];

    sLanguange.push(language);
    sTranslate.push(textToTranslate);

    console.log('language ', language);
    console.log('text to translate ', textToTranslate);
    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&lang=${language}&text=${textToTranslate}`
      )
      .then(response => {
        let output = response.data.text[0];
        this.setState({ output });
        console.log('output', output);
        outputResult.push(output);
        console.log(bdSearched);
      })
      .catch(error => console.log(error));
    const searched = sTranslate.concat(sLanguange).concat(outputResult);
    bdSearched.push(searched);
  }
  render() {
    return (
      <div className='container'>
        <h2 className='container__title'>Mini Translator</h2>
        <InputText translate={this.translate} />
        <OutputText output={this.state.output} />
      </div>
    );
  }
}

export default App;
