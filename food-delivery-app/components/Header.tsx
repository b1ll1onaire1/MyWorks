import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          FoodDelivery
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/menu" className="text-gray-600 hover:text-primary">
            Menu
          </Link>
          <button className="text-gray-600 hover:text-primary">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <Link href="/account" className="text-gray-600 hover:text-primary">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

