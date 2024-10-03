
import Nav from "./components/header/Navbar";
import Main from "./components/home/Main";
import PopularItems from "./components/home/PopularItems";
import TopBrands from "./components/home/TopBrands";
import TopAlbums from "./components/home/TopAlbums"
import Footer from "./components/home/Footer"



function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <PopularItems/>
      <TopBrands/>
      <TopAlbums/>
      <Footer/>
    </>
  );
}

export default App;
