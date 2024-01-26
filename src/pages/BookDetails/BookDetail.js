import { useParams,useHistory } from "react-router-dom";
import useMyContext from "../../hooks/useMyContext.js";
import {GetDetails} from "../../model/Getdata.js"
import Loader from "../../components/Loader/Loader.js";
import { useEffect, useState } from "react";
import { CiStar,CiBookmark  } from "react-icons/ci";
import { PiStar } from "react-icons/pi";
import Cover from "../../img/fireandblood.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import "./BookDetail.css"
const BookDetail = () => {
    const {Data,dispatchData} = useMyContext()
    const {id} = useParams()
    const [Datadetail,setDatadetail]=useState({})
    const fetchData=async ()=> {

            if (Data.Datadetails && Data.Datadetails.id===id){
                console.log("data")
                setDatadetail(Data.Datadetails)
            }
            else{
                console.log("no data")
                dispatchData({type:"Loading"})
                const Datadetails= await GetDetails(id)
                dispatchData({type:"Loading"})
                setDatadetail(Datadetails)
                dispatchData({type:"setbook",payload:Datadetails})
            }
    } 

    useEffect(()=>{
        console.log("again")
        fetchData()
    },[id])
   
    if (Data.Loading) return<Loader/>
    return ( 
        <>
            {Datadetail &&<div className="Content">
                <div className="Left">
                    <div className="image">
                        <img src={Datadetail.cover} alt={Datadetail.title} />
                    </div>
                    <div className="Rate">
                        <CiStar/>
                        <button><p>Rate It</p></button>
                    </div>
                    <div className="Readlist">
                        <CiBookmark/>
                        <button><p>Readlist</p></button>
                    </div>
                    
                </div>
            <div className="right">
                <div className="title"><p className="Coper">{Datadetail.title}</p></div>
                <div className="Author"><p>by {Datadetail.author}</p></div>
                <div className="Rating">
                    <PiStar/>
                    <p>{Datadetail.averageRatingg} · {Datadetail.ratingsCounts} ratings · {Datadetail.ratingsCounts} reviews ·  {Datadetail.pageCount} page</p>
                </div>
                <div className="description">
                    <p>{Datadetail.descriptions}</p>
                </div>
                <div className="Genres">
                    <p>Genres</p>
                    {Datadetail.Categorie && Datadetail.Categorie.map((categorie)=>{
                        return (<button key={categorie}>{categorie}</button>)
                    })}
                </div>
                <div className="Show">
                    <button>Show more</button>
                    <IoIosArrowDown/>
                </div>


            </div>
        </div>} 
        
        </>
        
    );
}
 
export default BookDetail;