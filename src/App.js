import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ScrollUp from "./components/ScrollUp";
import Subscribe from "./components/Subscribe";
import Blogs from "./pages/Blogs";

import Trainings from "./pages/Trainings";
import Podcast from "./pages/Podcast";
import Well from "./pages/Well";
import HIIP from "./pages/HIIP";
import Single from "./pages/Single";



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='*' element={<Main />}/>
        <Route path='/about' element={<About /> } />
        <Route path='/blogs' element={<Blogs /> } />
        <Route path='/podcast' element={<Podcast /> } />
        <Route path='/well' element={<Well /> } />
        <Route path='/hiip' element={<HIIP /> } />
        <Route path='/training' element={<Trainings /> } />
        <Route path='/blogs' element={<Blogs /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/blog/:slug' element={<Single /> } />
      </Routes>
      <ScrollUp />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
