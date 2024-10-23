import CustomerView from '@/pages/CustomerView';
import LoadingPage from '@/pages/Loading';
import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Customer = lazy(() => import('@/pages/Customer'));
const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));

const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
const Quote = lazy(() => import('@/pages/Quote/index'));
const QuoteCreate = lazy(() => import('@/pages/Quote/QuoteCreate'));
const QuoteRead = lazy(() => import('@/pages/Quote/QuoteRead'));
const QuoteUpdate = lazy(() => import('@/pages/Quote/QuoteUpdate'));
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));

const Settings = lazy(() => import('@/pages/Settings/Settings'));
const PaymentMode = lazy(() => import('@/pages/PaymentMode'));
const Taxes = lazy(() => import('@/pages/Taxes'));
const AdvancedSettings = lazy(() => import('@/pages/AdvancedSettings'));
const Profile = lazy(() => import('@/pages/Profile'));
const Lead = lazy(() => import('@/pages/Lead/index'));
const Offer = lazy(() => import('@/pages/Offer/index'));
const OfferCreate = lazy(() => import('@/pages/Offer/OfferCreate'));
const OfferRead = lazy(() => import('@/pages/Offer/OfferRead'));
const OfferUpdate = lazy(() => import('@/pages/Offer/OfferUpdate'));

const ExpenseCategory = lazy(() => import('@/pages/ExpenseCategory'));
const Expense = lazy(() => import('@/pages/Expense'));
const ProductCategory = lazy(() => import('@/pages/ProductCategory'));
const Product = lazy(() => import('@/pages/Product'));

const People = lazy(() => import('@/pages/People'));
const Company = lazy(() => import('@/pages/Company'));

const About = lazy(() => import('@/pages/About'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/resetpassword/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/crm/about',
      element: <About />,
    },
    {
      path: '/',
      element: <LoadingPage />,
    },
    {
      path: '/crm',
      element: <Dashboard />,
    },
    {
      path: '/erp',
      element: <Dashboard />,
    },
    {
      path: '/erp/customer',
      element: <CustomerView />,
    },
    {
      path: '/erp/customer',
      element: <Customer />,
    },
    {
      path: '/crm/people',
      element: <People />,
    },
    {
      path: '/erp/company',
      element: <Company />,
    },
    {
      path: '/crm/product',
      element: <Product />,
    },
    {
      path: '/crm/category/product',
      element: <ProductCategory />,
    },

    {
      path: '/crm/invoice',
      element: <Invoice />,
    },
    {
      path: '/crm/invoice/create',
      element: <InvoiceCreate />,
    },
    {
      path: '/crm/invoice/read/:id',
      element: <InvoiceRead />,
    },
    {
      path: '/crm/invoice/update/:id',
      element: <InvoiceUpdate />,
    },
    {
      path: '/crm/invoice/pay/:id',
      element: <InvoiceRecordPayment />,
    },
    {
      path: '/erp/quote',
      element: <Quote />,
    },
    {
      path: '/erp/quote/create',
      element: <QuoteCreate />,
    },
    {
      path: '/erp/quote/read/:id',
      element: <QuoteRead />,
    },
    {
      path: '/erp/quote/update/:id',
      element: <QuoteUpdate />,
    },
    {
      path: '/crm/payment',
      element: <Payment />,
    },
    {
      path: '/crm/payment/read/:id',
      element: <PaymentRead />,
    },
    {
      path: '/crm/payment/update/:id',
      element: <PaymentUpdate />,
    },

    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/erp/settings',
      element: <Settings />,
    },
    {
      path: '/crm/settings',
      element: <Settings />,
    },
    {
      path: '/settings/edit/:settingsKey',
      element: <Settings />,
    },
    {
      path: '/crm/payment/mode',
      element: <PaymentMode />,
    },
    {
      path: '/crm/taxes',
      element: <Taxes />,
    },

    {
      path: '/settings/advanced',
      element: <AdvancedSettings />,
    },
    {
      path: '/crm/profile',
      element: <Profile />,
    },
    {
      path: '/erp/lead',
      element: <Lead />,
    },
    {
      path: '/crm/offer',
      element: <Offer />,
    },
    {
      path: '/crm/offer/create',
      element: <OfferCreate />,
    },
    {
      path: '/crm/offer/read/:id',
      element: <OfferRead />,
    },
    {
      path: '/crm/offer/update/:id',
      element: <OfferUpdate />,
    },
    {
      path: '/crm/expenses',
      element: <Expense />,
    },
    {
      path: 'category/expenses',
      element: <ExpenseCategory />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
