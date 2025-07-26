import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Skills3D from "./components/Skills3D";
import Contact from "./components/Contact";
import Background3D from "./components/Background3D";

function App() {
  // Remove loading screen logic
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
  //       <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
  //         Loading Portfolio...
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <ThemeProvider>
      <div className="App">
        <Background3D />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Skills3D />
          {/* <Projects /> */}
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
