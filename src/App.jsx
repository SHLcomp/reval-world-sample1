import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ProductsPage } from './pages/productsPage/ProductsPage'
import { Contact } from './pages/contact/Contact'
import { Projects } from './pages/projects/Projects'
import { About } from './pages/about/About'
import { useEffect } from 'react';



function App() {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim');
        } else{
          entry.target.classList.remove('anim')
        }
      });
    }, {}); // adjust threshold if needed

    const elements = document.querySelectorAll('.chooseAnim');
    elements.forEach((el) => observer.observe(el));
  }, []);
const router = createBrowserRouter([
  {
    path: '/reval-world-sample1/',
    element: <Home />
  },
  {
    path: '/reval-world-sample1/products',
    element: <ProductsPage/>
  },
  {
    path: '/reval-world-sample1/contact',
    element: <Contact />
  },
  {
    path: '/reval-world-sample1/proj',
    element: <Projects/>
  },
  {
    path: '/reval-world-sample1/about',
    element: <About />
  }
])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
