import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-family: 'Roboto Slab',sans-serif;
    font-size: 18px;
    -webkit-font-smoothing:antialiased;

  }


  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter .3s;
        outline: none;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
    outline: none;
    border: none;
  }

  input, textarea{
    font-family: 'Roboto',sans-serif;
  }
`
