const Marquee = () => {
  const text = "DESIGN • DEVELOPMENT • BRANDING • STRATEGY • DESIGN • DEVELOPMENT • BRANDING • STRATEGY • "

  return (
    <section className="py-8 bg-gray-900 border-y border-gray-800 overflow-hidden">
      <div className="relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="text-4xl md:text-6xl font-bold text-white opacity-20">
            {text}
          </span>
          <span className="text-4xl md:text-6xl font-bold text-white opacity-20">
            {text}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Marquee
