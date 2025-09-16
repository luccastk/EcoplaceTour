interface EducaCardProps {
  image: string;
  imageAlt: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  availableSpots: number;
  date: string;
}

export function EducaCard({
  image,
  imageAlt,
  title,
  company,
  location,
  duration,
  description,
  availableSpots,
  date,
}: Readonly<EducaCardProps>) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
          <p className="text-primary font-semibold text-sm mb-1">{company}</p>
          <p className="text-gray-600 text-sm mb-3">
            {location} • {duration}
          </p>
        </div>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              {availableSpots} vagas disponíveis
            </span>
          </div>
          <span className="text-sm font-semibold text-primary">{date}</span>
        </div>

        <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200">
          Inscrever-se
        </button>
      </div>
    </div>
  );
}
