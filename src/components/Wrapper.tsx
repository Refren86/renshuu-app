import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="max-w-[1440px] mx-auto px-4">{children}</div>;
};
