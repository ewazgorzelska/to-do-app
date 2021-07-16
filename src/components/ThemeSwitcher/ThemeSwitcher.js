import React, { useContext } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import { MdWbSunny as Sun } from 'react-icons/md';
import { FaMoon as Moon } from 'react-icons/fa'
import { AppContext } from 'components/AppContext/AppContextProvider';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;

const StyledSwitch = styled(Switch)`
 background-color: ${({theme}) => theme.colors.button};
`

const ThemeSwitcher = () => {
  
  const {themeMode, toggleThemeMode} = useContext(AppContext);
  
  const handleThemeChange = () => {
    toggleThemeMode();
  };
  
  return (
      <Root>
        <StyledSwitch
        checked={themeMode === 'darkTheme' ? true : false}
        width={120}
        height={50}
        onChange={handleThemeChange}
        checkedIcon={<Sun 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            paddingLeft: 24,
                        }}
                      color={'#FFF'}
                      size={50}
                    />
                  }
      uncheckedIcon={<Moon 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 35,
                            paddingLeft: 10,
                          }}
        color={'#1C1C1C'}
      />
    }
      borderRadius={20}
      offColor={'#0085FF'}
      onColor={'#168FFF'}
    />
      </Root>
  )
}

export default ThemeSwitcher;
