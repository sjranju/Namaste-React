import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from './src/components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu"
import './index.css'
import { Provider } from "react-redux"
import appStore from "./src/store/appStore"
import Cart from "./src/components/Cart"

const About = lazy(() => import('./src/components/Contact'))

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element:
                    <Suspense>
                        <About />
                    </Suspense>
            },
            {
                path: '/contact',
                element:
                    <Suspense>
                        <Contact />
                    </Suspense>
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={appRouter} />)