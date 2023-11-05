import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import AddBlog from './pages/AddBlog'
import UpdateBlog from './pages/UpdateBlog'
import AllBlogs from './pages/AllBlogs'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/add-blog',
        element: <AddBlog></AddBlog>,
      },
      {
        path: '/update-blog',
        element: <UpdateBlog></UpdateBlog>,
      },
      {
        path: '/all-blogs',
        element: <AllBlogs></AllBlogs>,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
