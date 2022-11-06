import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Header from './header/Header';
import {Home} from './about/Home';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
