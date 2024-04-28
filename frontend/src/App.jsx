import { Router } from './router/index';
import './App.css';
import {RouterProvider} from 'react-router-dom';
function App() {
 

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
