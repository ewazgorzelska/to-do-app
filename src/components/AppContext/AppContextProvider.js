import React, { createContext, useState} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import themes from 'styles/themes';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [themeMode, setThemeMode ] = useState('lightTheme');

    const toggleThemeMode = () => {
        setThemeMode(prevState => {
            if (prevState === 'lightTheme') {
                return 'darkTheme';
            } else {
                return 'lightTheme';
            }
        });
    };

    const value = { themeMode,toggleThemeMode };
    const customTheme = themes[themeMode];

    return (
        <AppContext.Provider value={value}>
            <ThemeProvider theme={customTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppContextProvider;