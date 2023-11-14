export default function Card({ title, description, img, alt }) {
  return (
    <div className="card bg-black p-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform duration-300 hover:-translate-y-2">
      <img className="w-full h-40 object-cover mb-4 rounded-t-lg" src={img} alt={alt} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  )
}
