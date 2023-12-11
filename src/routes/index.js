import AdminPage from "../pages/AdminPage/AdminPage";
import BrandProductPage from "../pages/BrandProductPage/BrandProductPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/HomePage/HomePage";
import MiniTypeProductPage from "../pages/MiniTypeProductPage/MiniTypeProductPage";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import PolicyPage from "../pages/SupportPage/PolicyPage/PolicyPage";
import CODPage from "../pages/SupportPage/CODPage/CODPage";
import RulePage from "../pages/SupportPage/RulePage/RulePage";
import GuidePage from "../pages/SupportPage/GuidePage/GuidePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/SupportPage/ContactPage/ContactPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/my-order",
    page: MyOrderPage,
    isShowHeader: true,
  },
  {
    path: "/details-order/:id",
    page: DetailsOrderPage,
    isShowHeader: true,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/orderSuccess",
    page: OrderSucess,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/product/miniType/:miniType",
    page: MiniTypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/product/brand/:brand",
    page: BrandProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/product-details/:id",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivated: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/policy",
    page: PolicyPage,
    isShowHeader: true,
  },
  {
    path: "/COD",
    page: CODPage,
    isShowHeader: true,
  },
  {
    path: "/rule",
    page: RulePage,
    isShowHeader: true,
  },
  {
    path: "/guide",
    page: GuidePage,
    isShowHeader: true,
  },
  {
    path: "/about",
    page: AboutPage,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: ContactPage,
    isShowHeader: true,
  },
];
