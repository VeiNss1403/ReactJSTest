import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


function App() {
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct`)
    return res.data
  }
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent : Fragment
          return (
            <Route path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          )
        })}
      </Routes>
    </div>
  )
}
export default App