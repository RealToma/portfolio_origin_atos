import LayoutHeader from "./layout.header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
};

export default Layout;
