import clsx from "clsx";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
};

export const Loader = ({ size = "md" }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx("relative", {
          "size-12": size === "sm",
          "size-24": size === "md",
          "size-36": size === "lg",
        })}
      >
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
