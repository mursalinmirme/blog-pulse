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
import BlogDetails from './pages/BlogDetails'
import PrivateRouter from './auth/PrivateRouter'
import { SkeletonTheme } from 'react-loading-skeleton'
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
        element: <PrivateRouter><AddBlog></AddBlog></PrivateRouter>,
      },
      {
        path: '/update-blog/:id',
        element: <PrivateRouter><UpdateBlog></UpdateBlog></PrivateRouter>,
      },
      {
        path: '/all-blogs',
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: '/wishlist',
        element: <PrivateRouter><WishList></WishList></PrivateRouter>,
      },
      {
        path: '/featured-blogs',
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: '/blogs/:id',
        element: <PrivateRouter><BlogDetails></BlogDetails></PrivateRouter>,
      },

    ]
  }
]);
const queryClient  = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#A3B18A" highlightColor="#3A5A40">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    </SkeletonTheme>
  </React.StrictMode>,
)
