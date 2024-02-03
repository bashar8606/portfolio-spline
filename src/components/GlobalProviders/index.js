"use client";
import { RecoilRoot } from "recoil";

const GlobalProviders = ({ children }) => {
  return (
    <RecoilRoot>{children}</RecoilRoot>
  );
}; 

export default GlobalProviders;