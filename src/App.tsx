import '@mantine/core/styles.css';
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { createTheme, MantineProvider } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(()=>{
    AOS.init();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });

  return (
    <MantineProvider theme={theme}>
      <Homepage/>
    </MantineProvider>
  );
}

export default App;
