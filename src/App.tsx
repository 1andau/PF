import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from './GlobalStyles';
import React from 'react';
import { Loader,Layout } from './components/index';
// import { Home } from "./components/index";
import { Hero } from "./pages/Hero/Hero";
// const Home = React.lazy(() =>
// 	import("@components").then(({ Home }) => ({
// 		default: Home,
// 	}))
// );

function App() {
  return (
    <>
      <GlobalStyle />
<React.Suspense fallback={<Loader />}>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<Layout />}>
							<Route index element={<Hero />} />
						</Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </React.Suspense>
          </>
  );
}

export default App;
