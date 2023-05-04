import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';

export const Layout = () => (
  <div className='wrapper'>
    <Header />
    <main className='main'>
      <Outlet />
    </main>
  </div>
)
