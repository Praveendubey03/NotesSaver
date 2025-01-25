import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar  from './components/Navbar';
import Home from './components/Home'; 
import  Paste  from './components/Paste';
import ViewPaste  from './components/Viewpaste';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home />
      </div>
    },
    {
      path: "/paste",
      element:
      <div>
         <Navbar/>
         <Paste />
      </div>
    },
    {
      path: "/paste/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste />
      </div>
    },
   
  ]
)
function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
