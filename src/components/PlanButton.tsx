export default function PlanButton({ userMessage }: { userMessage: string }) {
  return (
    <button className="text-white px-2 py-2 cursor-pointer hover:bg-primary hover:text-black focus:bg-primary  focus:text-black border-solid border-amber-100 rounded-2xl">
      {userMessage}
    </button>
  );
}
