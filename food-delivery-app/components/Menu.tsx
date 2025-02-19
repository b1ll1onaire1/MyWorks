"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import FoodItem from "./FoodItem"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = ["All", "Pizza", "Sushi", "Burgers", "Desserts"]

const foodItems = [
  { id: 1, name: "Margherita Pizza", category: "Pizza", price: 12.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "California Roll", category: "Sushi", price: 8.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Cheeseburger", category: "Burgers", price: 9.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Chocolate Cake", category: "Desserts", price: 6.99, image: "/placeholder.svg?height=200&width=200" },
  // Add more food items here
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = foodItems.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

