import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from '../Header/Header.component'
import LanguageInputField from '../LanguageInputField/LanguageInputField.component'
import TranslatedMessageField from '../TranslatedMessageField/TranslatedMessageField.component'

const translationData = require('../../data/uruk-translation-data.json')

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      englishTranslation: "test",
      messageTranslated: false,
      translatedMessage: ""
    })
  }

  updateEnglishTranslationValue = (event) => {
    this.setState({
      englishTranslation: event.target.value
    })

    if(event.target.value.length === 0) {
      this.setState({
        messageTranslated: false
      })
    }
}

translateMessageWithEnterKeyHandler = (event) => {
    if(event.key === "Enter") {
    this.translateMessage()
    }
  
}

translateMessage = () => {
  let translatedSentence = this.state.englishTranslation;

  Object.keys(translationData).map(word => {
    console.log("Word: " + word + " Orc Word: " + translationData[word])
    
    translatedSentence = translatedSentence.toLowerCase().replace(new RegExp("\\b"+word+"\\b", "gi"), translationData[word]);
  })

  this.setState({
    translatedMessage: translatedSentence,
    messageTranslated: true
  })
}

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Header />
          <LanguageInputField translateMessageWithEnterKeyHandler={this.translateMessageWithEnterKeyHandler} translateMessage={this.translateMessage} onChangeHandler={this.updateEnglishTranslationValue}/>
          { this.state.translatedMessage
            ? <TranslatedMessageField isMessageTranslated={this.state.messageTranslated} TranslatedMessage={this.state.translatedMessage}/>

            : <div></div>
          }
        </Container>
      </React.Fragment>
    )
  }
}

export default ApplicationContainer
