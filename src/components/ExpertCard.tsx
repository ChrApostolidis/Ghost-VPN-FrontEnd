export default function ExpertCard() {
    return (
        <div className="w-65 h-65 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-gray-800 text-xl font-bold mb-2">Context</h3>
            <div className="flex mt-2">
                <img src="expert-image.jpg" alt="Expert" />
                <div className="flex-1 ml-2">
                    <p className="text-gray-400">Expert Title</p>
                    <p className="text-gray-400">Expert Description</p>
                </div>
            </div>
        </div>
    )
}
