import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
  buttonLink?: string
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  buttonLink = "#",
}: PricingCardProps) {
  return (
    <div
      className={`p-8 rounded-xl ${
        highlighted ? "bg-primary-500 text-white shadow-lg scale-105 z-10" : "bg-white border border-gray-100 shadow-sm"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className={highlighted ? "text-primary-100" : "text-gray-600"}>/month</span>}
      </div>
      <p className={`mb-6 ${highlighted ? "text-primary-100" : "text-gray-600"}`}>{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 ${highlighted ? "text-primary-100" : "text-primary-500"}`} />
            <span className={highlighted ? "" : "text-gray-700"}>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-6 inline-flex justify-center items-center rounded-md ${
          highlighted && buttonVariant === "default"
            ? "bg-white text-primary-500 hover:bg-gray-100"
            : highlighted && buttonVariant === "outline"
              ? "border-white text-white hover:bg-primary-600 border"
              : buttonVariant === "outline"
                ? "border-primary-500 text-primary-500 hover:bg-primary-50 border"
                : "bg-primary-500 text-white hover:bg-primary-600"
        }`}
      >
        {buttonText}
      </a>
    </div>
  )
}
