import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background-image: url(../src/assets/background/pages-dark-mode-background.png);
}
.flip-box{
  display :flex; 
  flex-direction:  row;
    
}
.flip-box-front{
    display: grid; 
}
.flip-box-back{
display: grid;
justify-content: center;

}
`;

export default GlobalStyle;