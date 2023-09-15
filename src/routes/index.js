import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import OderPage from '../pages/Oderpage/OderPage'
import ProductPage from '../pages/ProductPage/ProductPage'

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
    },
]
