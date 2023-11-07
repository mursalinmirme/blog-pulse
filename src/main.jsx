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
import WishList from './pages/WishList'
import FeaturedBlogs from './pages/FeaturedBlogs'
import AuthProvider from './auth/AuthProvider'
import ErrorPage from './pages/ErrorPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: '/wishlist',
        element: <WishList></WishList>,
      },
      {
        path: '/featured-blogs',
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
    ]
  }
]);
const queryClient  = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
