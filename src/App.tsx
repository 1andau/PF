import {  Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from './GlobalStyles';
import React from 'react';
import { Loader,Layout } from './components/index';
import { Hero } from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
<React.Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Layout />}>
				<Route index element={<Hero />} />
						</Route>

        {/* Create not found page */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </React.Suspense>
          </>
  );
}

export default App;
