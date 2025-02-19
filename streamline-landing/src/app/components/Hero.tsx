import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simplify Your Workflow</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          StreamLine helps teams collaborate seamlessly and boost productivity with our intuitive SaaS platform.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

