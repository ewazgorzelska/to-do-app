import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext('lightTheme');

const AppContextProvider = ({ children }) => {

    const { themeMode, setThemeMode } = useContext(AppContext);
    const value = {themeMode};

    const toggleThemeMode = () => {
        setThemeMode(prevState => {
            if (prevState === 'lightTheme') {
                return 'darkTheme';
            } else {
                return 'lightTheme';
            }
        })
    }

    return (
        <AppContextProvider.Provider value={value}>
            {children}
        </AppContextProvider.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppContextProvider;