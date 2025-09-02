import ExpertCard from "./ExpertCard";

export default function ExpertReviews() {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary py-8 px-4">
      <h2 className="text-white text-4xl font-bold mb-1">Why us?</h2>
      <p className="text-gray-400 text-xl text-center mb-6">Top people trusting us to protect their privacy.</p>
      <div className="">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ExpertCard />
        </div>
      </div>
    </div>
  );
}
