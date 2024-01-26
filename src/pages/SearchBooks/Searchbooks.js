// import { CiStar } from "react-icons/ci";
import Loader from "../../components/Loader/Loader"
import "./Searchbooks.css"
import useMyContext from '../../hooks/useMyContext';
import Card from "../../components/Card/Card";
// import Cover from "../img/fireandblood.jpeg"
const Searchbooks = () => {
    const { Data, dispatchData } = useMyContext()
    if (Data.Loading) return <Loader/>
    return ( 
        <div className="Home-Data">
            <section className="results">
                <div className="page_1">
                    {Data.Search.data &&
                    Data.Search.data.map((item, index) => {
                        return (
                            <Card key = {index} {...item} />
                    )
            })
            }
                                {/* <div className="card">
                        <div className="image">
                            <img src={Cover} alt="" />
                        </div>
                        <div className="title_Auth">
                            <p className="Coper title">Fire & Blood</p>
                            <p className="Auth">George R. R. Martin</p>
                        </div>
                        <div className="info">
                            <div className="rating">
                                <CiStar />
                                <p>4.4</p>
                            </div>
                            <p className="year">2018</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
     );
}
 
export default Searchbooks;