import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(language) {
     return language === 'english' ? 'submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
         <LanguageContext.Consumer>
          {({ language}) => this.renderSubmit(language)}
         </LanguageContext.Consumer>
         </button> 

    );
  }
  render() {
       return (
         <ColorContext.Consumer>
         {color =>this.renderButton(color)}
         
         </ColorContext.Consumer>

       );
    }
}

export default Button;