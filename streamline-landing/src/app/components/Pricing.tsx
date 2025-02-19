import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 team members", "10 projects", "Basic support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited team members", "Unlimited projects", "Priority support", "Advanced analytics"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited everything", "24/7 dedicated support", "Custom integrations", "On-premise option"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

