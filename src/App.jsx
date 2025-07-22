import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/mainLayout'
import MainHomePage from './pages/mainHomePage'
import Home from './routes/home';
import About from './routes/about';
import Skills from './routes/portofolio';
import Contact from './routes/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function MainApp() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainHomePage />,
      children: [
        { index: true, element: <Home /> },
          { path: '/about', element: <About /> },
            { path: '/skills', element: <Skills />},
              { path: '/home', element: <Home /> },
                {path: '/contact', element: <Contact/> }
      ]
    }
  ]);
  return (
      <RouterProvider router={routes} />
  )
} export default App