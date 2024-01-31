import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ProductsPage from './pages/products.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  }, {
    path: 'products',
    element: <ProductsPage />
  }
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<RegisterPage />} />
//       <Route path="/products" element={<ProductsPage />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
