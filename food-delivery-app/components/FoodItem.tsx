"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface FoodItemProps {
  item: {
    id: number
    name: string
    category: string
    price: number
    image: string
  }
}

export default function FoodItem({ item }: FoodItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
    setIsOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{item.name}</DialogTitle>
                <DialogDescription>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-2">Category: {item.category}</p>
                  <p className="mb-2">Price: ${item.price.toFixed(2)}</p>
                  <p className="mb-4">Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Button onClick={handleAddToCart}>Add to Cart</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

