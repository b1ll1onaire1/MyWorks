import React from 'react';
import { ShoppingBag, Monitor, Truck, HeadphonesIcon as HeadphoneIcon } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { products } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">TechStore</h1>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Welcome to TechStore</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Your premier destination for cutting-edge technology and premium electronics
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At TechStore, we're passionate about bringing you the latest and greatest in technology. 
                With over a decade of experience, we've established ourselves as a trusted destination 
                for tech enthusiasts and professionals alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
                <p className="text-gray-600">
                  Carefully curated collection of high-quality tech products from trusted brands
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable shipping to get your tech products to you as soon as possible
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphoneIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated team of tech experts ready to assist you with any questions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-full max-w-md">
              <div className="h-full bg-gray-100 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <Cart />
              </div>
            </div>
          </div>
        )}
      </div>
    </CartProvider>
  );
}

export default App;