import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Header from './components/header/Header';
import Main from './pages/Main/Main';
import { Portfolio } from './pages/Project/Project';
import { Skills } from './pages/skills/Skills';
import {Contact} from './pages/contact/ContactForm';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
