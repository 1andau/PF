import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Header from './components/header/Header';
import Main from './Main/Main';
import { Portfolio } from './Portfolio/Project';
import { Skills } from './pages/skills/Skills';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />


      </Routes>
    </>
  );
}

export default App;
