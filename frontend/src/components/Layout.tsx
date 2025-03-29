import { Header } from "./Header";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <hr />
      {children}
    </>
  );
};
