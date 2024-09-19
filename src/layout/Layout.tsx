import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Box>
      <Sidebar>
      {children} 
</Sidebar>
<Footer />
    </Box>

    </>
  );
};

export default Layout;