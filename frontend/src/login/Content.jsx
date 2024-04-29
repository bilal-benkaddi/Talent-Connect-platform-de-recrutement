import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <h1>Content Area</h1>
      <Outlet />
    </div>
  );
};

export default Content;
