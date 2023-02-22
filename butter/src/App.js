import AllRoutes from './component/AllRoutes';
import './App.css';
import NavBarTop from './component/NavbarTop';
import NavBar from './component/Navbar';
import { Divider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <NavBarTop />
      <Divider colorScheme="gray" variant="solid" />
      <NavBar />
      <Divider colorScheme="gray" variant="solid" />
      <AllRoutes />
    </div>
  );
}

export default App;
