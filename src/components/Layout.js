import {Outlet} from "react-router-dom"
import LeftBar from "./LeftBar";

const Layout = () => {
    return ( 
        <div className="Body">
            <div className="grow">
                <div className="container">
                    <LeftBar/>
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;