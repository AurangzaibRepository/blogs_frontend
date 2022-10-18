import {Routes, Route} from "react-router-dom";
import NavBar from "./navbar.component";
import BlogList from "../blogs/blog-list.component";

function Menu(){
    return <div>
        <NavBar />
        <div>
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/most-liked" />
                <Route path="/most-commented" />
            </Routes>
        </div>
  </div>
}

export default Menu;