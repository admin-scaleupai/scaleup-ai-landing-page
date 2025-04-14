interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar: string
}

export default function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <img src="/images/scaleup-icon.png" alt="ScaleUp AI Icon" className="h-8 w-8" />
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div className="flex items-center">
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}
