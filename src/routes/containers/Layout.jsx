import React, { useContext, Suspense, useState, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

// import { SidebarContext } from '../../context/SidebarContext'

import routes from '../index'

import Page404 from '../../pages/404';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // let location = useLocation()

  // useEffect(() => {
  //   closeSidebar()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location])

  return (
    <div
      className={`flex min-h-screen bg-gray-50`}
    >
      {/* <Sidebar /> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 w-full">
        {/* <Header /> */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Switch>
          {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                exact={true}
                path={`/app${route.path}`}
                render={(props) => <route.component {...props} />}
              />
            ) : null
          })}
          <Redirect exact from="/app" to="/app/home" />
          <Route component={Page404} />
        </Switch>
      </div>
    </div>
  )
}

export default Layout
