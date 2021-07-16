import day from 'assets/day.jpg';
import night from 'assets/night.jpg';

const themes = {
    lightTheme: {
        colors: {
          background: '#E0E0E0',
          card: '#F5F5F5',
          fontPrimary: '#1C1C1C',
          fontSecondary: '#585757',
          button: '#0085FF',
        },
        image: `url(${day})`,
    },
    darkTheme: {
      colors: {
        background: '#121212',
        card: 'black',
        fontPrimary: '#FFF',
        fontSecondary: '#585757',
        button: '#168FFF',
      },
      image: `url(${night})`,  
    },
  };

  export default themes;