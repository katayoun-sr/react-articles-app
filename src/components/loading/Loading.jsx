import useLoading from "../../hooks/useLoading";

function Loading({ size = "w-16 h-16", color = "border-purple-500" }) {
  const { isLoading } = useLoading();
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-md z-10">
      <div className="flex justify-center items-center p-4">
        <div
          className={`animate-spin rounded-full border-4 border-t-4 border-t-transparent ${color} ${size}`}
        ></div>
      </div>
    </div>
  );
}

export default Loading;
