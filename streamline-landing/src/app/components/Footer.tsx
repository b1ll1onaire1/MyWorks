import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StreamLine</h3>
            <p className="text-sm">Simplify your workflow and boost productivity.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm hover:text-primary-light">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm hover:text-primary-light">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary-light">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary-light">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary-light">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary-light">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary-light">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary-light">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

