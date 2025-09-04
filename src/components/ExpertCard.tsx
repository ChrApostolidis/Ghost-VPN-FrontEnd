export default function ExpertCard({
  image,
  context,
  name,
  description,
}: {
  image: string;
  context: string;
  name: string;
  description: string;
}) {
  return (
    <div className="h-52 sm:h-56 md:h-60 bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <h3 className="text-gray-900 text-sm sm:text-base md:text-lg font-semibold mb-3">
        {context}
      </h3>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            {name}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
