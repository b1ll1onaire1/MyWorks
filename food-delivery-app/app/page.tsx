import Header from "@/components/Header"
import Menu from "@/components/Menu"
import Cart from "@/components/Cart"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Menu />
      <Cart />
      <Footer />
    </main>
  )
}

