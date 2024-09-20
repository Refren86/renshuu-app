export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-full border-t-4 border-red-500 rounded-full animate-spin"
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-red-500">待つ</span>
        </div>
      </div>
    </div>
  );
};
