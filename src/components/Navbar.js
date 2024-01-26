import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../img/Logo.png"
import { useRef } from 'react'
import useMyContext from '../hooks/useMyContext';
import {GetDatabysearch} from '../model/Getdata';

const Navbar = () => {
    const { Data, dispatchData } = useMyContext()
    const searchText = useRef("")

    const handelSearch =async ()=> {
        console.log("search used")
        if (searchText.current.value.trim().length>0){
            dispatchData({type:"Loading"});
            const Data = await GetDatabysearch(searchText.current.value.trim())
            dispatchData({type:"setbooks",payload:Data})
            dispatchData({type:"Loading"});
        }
    }
    const press= (e) =>{
        if (e.keyCode===13) handelSearch()
    }


    return ( 
    <div className="nav">
        <div className="container">
            <div className="logo">
                    <Link to="/">
                        <img
                            className="subtract"
                            alt="Subtract"
                            src={Logo}
                            />
                    </Link>
            </div>
            <div className="search">
                    <input  placeholder='Search for a book, E-book, author......' type="text" ref={searchText} onKeyDown={press}/>
                    <Link to="/Searchbooks" onClick={handelSearch} >
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </Link>

            </div>
            <div className="right-co">
                <div className="But contact">
                    <Link to="/contact">
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                        <p>Contact us</p>
                    </Link>
                    <span className='Line'></span>
                </div>
                <div className="But wishlist">
                    <Link to="/wishlist">
                        <FontAwesomeIcon icon="fa-regular fa-heart" />  
                        <p>Wishlist</p>
                    </Link>
                    <span className='Line'></span>
                </div>
                <div className="But sign">
                    <Link to="/sign">
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                        <p>Sign in/ Join</p>
                    </Link>
                    <span className='Line'></span>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Navbar;