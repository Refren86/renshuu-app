import { ReactNode } from "react"

import { Toaster } from "./ui/toaster";

type ProvidersProps = {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}