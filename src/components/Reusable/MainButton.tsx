export default function MainButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#33d36e] text-xl text-white px-4 py-2 rounded-3xl 
                            hover:cursor-pointer transition duration-400 
                            hover:shadow-[7px_5px_56px_-14px_#33d36e] 
                            active:scale-95 active:shadow-[7px_5px_56px_-10px_#33d36e] 
                            ${className}`}
    >
      <a>{children}</a>
    </button>
  );
}
