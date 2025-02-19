import { CheckCircle, Zap, Users, Lock } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Task Management",
    description: "Organize and prioritize tasks with ease.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Automation",
    description: "Automate repetitive tasks and save time.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Collaboration",
    description: "Work together seamlessly in real-time.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Security",
    description: "Keep your data safe with enterprise-grade security.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

