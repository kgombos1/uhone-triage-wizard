import React from 'react';
import { Router } from '@abyss/web/ui/Router';
import { Home } from './Home';
import { HelloAbyss } from './HelloAbyss';

export const Routes = () => {
  return (
    <Router.Routes>
      <Router.Route path="/hello-abyss" element={<HelloAbyss />} />
      <Router.Route path="/" element={<Home />} />
    </Router.Routes>
  );
};
