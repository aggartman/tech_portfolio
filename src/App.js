import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';

import Navbar from './Component/Navbar';
import About from './Component/About';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Art from './Component/Art';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

const Container = styled.div`
    margin: 5px auto;
`;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({ google: { families: getFonts() } });
  });

  return (
      <>
        {
            themeLoaded && <ThemeProvider theme={ selectedTheme }>
              <GlobalStyles/>
              <Container style={{fontFamily: selectedTheme.font}}>
                <Navbar
                    selectedTheme={selectedTheme}
                      setSelectedTheme={setSelectedTheme}/>
                <About />
                <Experience />
                <Skills />
                <Art />
                <Contact />
                <Footer />
              </Container>
            </ThemeProvider>
        }
      </>
  );
}

export default App;