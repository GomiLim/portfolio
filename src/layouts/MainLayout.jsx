import { MainHeader, MainFooter } from 'containers';

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainLayout;
