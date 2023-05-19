import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from "./pages/main/main-page";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/layout/layout";
import './index.css';
import { FavoritePage } from "./pages/favorite/favorite-page";
import { VacancyPage } from "./pages/vacancy/vacancy-page";
import { EmptyStatePage } from "./pages/emptyState/emptyState-page";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='/vacancy/:id' element={<VacancyPage />} />
          <Route path='/empty' element={<EmptyStatePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
