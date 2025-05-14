import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context and hooks/CartContext';
import { ThemeProvider } from './context and hooks/ThemeContext';
import { AuthProvider } from './context and hooks/AuthContext';
import { useCart } from './context and hooks/usecart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout and Common Components
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import PrivateRoute from './components/PrivateRoute';
import AuthGuard from './context and hooks/AuthGuard';
import Button from './components/common/Button';
import Card from './components/common/Card';
import Input from './components/common/Input';
import Productivity from './pages/Products';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));

const NotFound = lazy(() => import('./pages/NotFound'));

const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const Profile = lazy(() => import('./pages/Profile'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Sell = lazy(() => import('./pages/Sell'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SellerGuide = lazy(() => import('./pages/SellerGuide'));
// const CartPage=lazy(() => import('./pages/Cart'));
// const CheckoutPage=lazy(() => import('./pages/Checkout'));

// Lazy load homepage sections
const Hero = lazy(() => import('./components/home/Hero'));
const Categories = lazy(() => import('./components/home/Categories'));
const FeaturedProducts = lazy(() => import('./components/home/FeaturedProducts'));
const Testimonials = lazy(() => import('./components/home/Testimonials'));
const HowItWorks = lazy(() => import('./components/home/HowItWorks'));
const NewsletterSignup = lazy(() => import('./components/home/NewsLetterSignup'));
const CallToAction = lazy(() => import('./components/home/CallToAction'));

// Lazy load product components
const ProductCard = lazy(() => import('./components/product/ProductCard'));
const ProductGrid = lazy(() => import('./components/product/ProductGrid'));
const ProductSort = lazy(() => import('./components/product/ProductSort'));

// Loading fallback components
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="large" />
  </div>
);

const ComponentLoader = () => (
  <div className="flex items-center justify-center py-12">
    <LoadingSpinner size="medium" />
  </div>
);

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
    <p className="text-gray-600 mb-4">{error.message}</p>
    <Button 
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
    >
      Try Again
    </Button>
  </div>
);

// Section Error Boundary Component
const SectionErrorBoundary = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={({ error, resetErrorBoundary }) => (
      <Card className="m-4 p-4">
        <p className="text-red-600">Failed to load this section: {error.message}</p>
        <Button onClick={resetErrorBoundary}>Retry</Button>
      </Card>
    )}
  >
    {children}
  </ErrorBoundary>
);

// HomePage Component with error boundaries and suspense for each section
const HomePage = () => (
  <div className="space-y">
    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <Hero />
      </Suspense>
    </SectionErrorBoundary>

    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <Categories />
      </Suspense>
    </SectionErrorBoundary>

    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <FeaturedProducts />
      </Suspense>
    </SectionErrorBoundary>
    
    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <HowItWorks />
      </Suspense>
    </SectionErrorBoundary>
    
    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <Testimonials />
      </Suspense>
    </SectionErrorBoundary>
    
    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <NewsletterSignup />
      </Suspense>
    </SectionErrorBoundary>
    
    <SectionErrorBoundary>
      <Suspense fallback={<ComponentLoader />}>
        <CallToAction />
      </Suspense>
    </SectionErrorBoundary>
  </div>
);

// Products Page with its components
const ProductsPage = () => (
  <div className="container mx-auto px-4">
    <ProductSort />
    <ProductGrid />
  </div>
);

// Main App Component
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<Productivity/>} />
                    <Route path="/sell" element={<Sell/>}/>
                    <Route path="/search" element={<ProductsPage />} />
                    <Route path="/category/:category" element={<ProductsPage />} />
                    <Route path="/cart"   element={<Cart/>}/>
                    <Route path="/checkout"   element={<Checkout/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/SellerGuide" element={<SellerGuide/>}/>

                    {/* Authentication Routes */}
                    <Route
                      path="/login"
                      element={
                        <AuthGuard>
                          <Login />
                        </AuthGuard>
                      }
                    />
                    <Route
                      path="/register"
                      element={
                        <AuthGuard>
                          <Register />
                        </AuthGuard>
                      }
                    />
                    <Route
                      path="/forgot-password"
                      element={
                        <AuthGuard>
                          <ForgotPassword />
                        </AuthGuard>
                      }
                    />
                    
                    {/* Protected Routes */}
                    <Route
                      path="/profile"
                      element={
                        <PrivateRoute>
                          <Profile />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/cart"
                      element={
                        <PrivateRoute>
                          <Cart />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/checkout"
                      element={
                        <PrivateRoute>
                          <Checkout />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/order-success"
                      element={
                        <PrivateRoute>
                          <OrderSuccess />
                        </PrivateRoute>
                      }
                    />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>

                {/* Toast Notifications */}
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </Layout>
            </Router>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;