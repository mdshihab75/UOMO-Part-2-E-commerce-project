import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';
import Home from './components/pages/Home';
import RootLayout from './components/layout/RootLayout';
const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {/*{ path: "about", Component: About },*/}
    ],
  },
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App