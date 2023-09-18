import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'


function App() {
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