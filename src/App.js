import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ScrollUp from "./components/ScrollUp";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='*' element={<Main />}/>
        <Route path='/about' element={<About /> } />
        <Route path='/blogs' element={<Blogs /> } />
        <Route path='/contact' element={<Contact /> } />
      </Routes>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
