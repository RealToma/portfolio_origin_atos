import React from "react";
import ThemesProvider from "./provider.theme";

const AllProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>;
};

export default AllProvider;
