import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useMyContext from '../hooks/useMyContext';
const LeftBar = () => {
    const { Data, dispatchData } = useMyContext()
    const showData = ()=>{
        console.log(Data)
    }
    return ( 
        <div className="Leftbar">
            <div className="bg">

            
            <div className="Btn">
                <Link to="/" onClick={showData}>
                <FontAwesomeIcon icon="fa-solid fa-house" />
                <p>Home</p>
                </Link>
            </div>
            <div className="Btn">
                <Link>

                <FontAwesomeIcon icon="fa-solid fa-shuffle" />
                <p>Random Book</p>
                </Link>
            </div>
            <div className="Btn">
                <Link>

                <FontAwesomeIcon icon="fa-solid fa-fire-flame-curved" />
                <p>New Realses</p>
                </Link>
            </div>
            <div className="Btn">
                <Link>

                <FontAwesomeIcon icon="fa-solid fa-book" />
                <p>Genres</p>
                </Link>
            </div>
            </div>
        </div>
     );
}
 
export default LeftBar;