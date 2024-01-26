import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {library} from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import Layout from "./components/Layout";
import Home from"./pages/Home/Home"
import Searchbooks from "./pages/SearchBooks/Searchbooks";
import BookDetail from "./pages/BookDetails/BookDetail";

const iconListS = Object.keys(IconsSolid)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => IconsSolid[icon]);
  library.add(...iconListS);

const iconListR = Object.keys(IconsRegular)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => IconsRegular[icon]);
  library.add(...iconListR);

function App() {

  return (
  <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/Searchbooks" element={<Searchbooks/>}/>
            <Route path="/bookDetail/:id" element={<BookDetail/>}/>
          </Route>

        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
