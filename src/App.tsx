import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Header from './components/header/Header';
import Main from './Main/Main';
import { Portfolio } from './Portfolio/Project';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </>
  );
}

export default App;
