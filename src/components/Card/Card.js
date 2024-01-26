import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom'
const Card = (prop) => {

    return ( 
        <div className="card" id={prop.id}>
            <Link to={`/bookDetail/${prop.id}`} className="image" title={prop.title?prop.title: "N/A"}>
                <img src={prop.cover} alt="" />
            </Link>
            <div className="title_Auth">
                <Link title={prop.title?prop.title: "N/A"}>
                <p className="Coper title">{prop.title?(()=>{
                    if (prop.title.length > 26) {
                        const lastSpaceIndex = prop.title.substring(0, 22).lastIndexOf(' ')
                        return prop.title.substring(0, lastSpaceIndex) + '...';
                    }
                    else {
                        return prop.title
                    }
                })():"N/A"}</p>
                </Link>
                <p className="Auth">{prop.author}
                </p>
            </div>
            <div className="info">
                <div className="rating">
                    <CiStar />
                    <p>{prop.averageRatingg}</p>
                </div>
                <p className="year">{prop.year}</p>
            </div>
        </div>
     );
}
 
export default Card;