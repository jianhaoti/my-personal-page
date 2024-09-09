import Header from "./Header";

type Props = {
  children: React.ReactNode;
  isHome?: boolean;
};

const Layout = ({ children, isHome }: Props) => {
  return (
    <>
      <Header isHome={isHome} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
