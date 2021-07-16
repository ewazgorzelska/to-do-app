import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    ${( { theme } ) => css`
    
        *, *:before, *:after {
            -webkit-box-sizing: border-box; 
            -moz-box-sizing: border-box; 
            box-sizing: border-box;
            }

        html {
            height: 100%;

        body {
            display: flex;
            flex-direction: column;
            height: 100%;
            margin: 0;
            background: ${theme.colors.background};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 16px;

                #root {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: sans-serif;
                    height: 100%;
                    padding: 15px;
                }
            }
        }
    `}
`;

export default GlobalStyles;