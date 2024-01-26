import coverImg from "../img/cover_not_found.jpg";

const handelData=async (data)=>{

        const handlecategorie=(categoriess)=>{
            let categoryFrequency = {};

            for (let key in categoriess) {
            let categoryText = categoriess[key];
            let categoryArray = categoryText.split(" / ");

            categoryArray.forEach(category => {
                categoryFrequency[category] = (categoryFrequency[category] || 0) + 1;
            });
            }

            // Sort unique categories based on frequency
            let uniqueCategoriesArray = Object.keys(categoryFrequency).sort((a, b) => categoryFrequency[b] - categoryFrequency[a]);
            return uniqueCategoriesArray

        }

        const {id} =data
        const {title, subtitle,averageRating, authors, publisher,ratingsCount, publishedDate, description,industryIdentifiers,pageCount,dimensions,categories,language,imageLinks,previewLink,infoLink,canonicalVolumeLink} = data["volumeInfo"];
        const dateObject =new Date(publishedDate)
        const year = dateObject.getFullYear()?dateObject.getFullYear() :"NA";
        const ratingsCounts=ratingsCount? ratingsCount: "NA"
        // const cover=imageLinks?imageLinks.thumbnail.replace(/(\bzoom=)\d+/i, '$12') : "../../img/cover_not_found.jpg" ;
        const cover=imageLinks?imageLinks.thumbnail: coverImg ;
        const author=authors? authors[0]: "NA"
        let Categorie=""
        if ( categories){
            Categorie= await handlecategorie(categories) 
        }
        else{
            Categorie=""
        }
        const descriptions=description? description:"videe"
        const averageRatingg= averageRating? averageRating:"NA"
        return  {id,title, subtitle, author, publisher,year,ratingsCounts,averageRatingg, publishedDate,Categorie, descriptions,industryIdentifiers,pageCount,dimensions,language,imageLinks,cover,previewLink,infoLink,canonicalVolumeLink}
}

export const GetDatabysearch =async (searchterm) => {
    console.log("GetDatabysearch")
    const URL =`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchterm}&maxResults=40&langRestrict=en&printType=books&key=AIzaSyCKsnneJULJH9W0gtPgcMi7TmSWTnCW-54`
    try{
            const response = await fetch(URL);
            const data = await response.json();
            const {items} = data;

            if(items){
                const newBooks = items.slice(0, 40).map(async(data) => {
                    return await handelData(data)
                });
                return Promise.all(newBooks)
                // dispatchData({type:"setbook",payload:newBooks})
            }

            else {
                return []
            }

    } catch(error){
            console.log(error)
            return "error"
        }
    }
export const GetDetails =async (id) => {
    console.log("Getdeatails")
    const URL=`https://www.googleapis.com/books/v1/volumes/${id}`
    try{
            const response = await fetch(URL
            // ,{
            //     headers: {
            //         "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            //         "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
            //         "Connection":"keep-alive",
            //     },
            //   }
              );
            const data = await response.json();

            if(data){
                const newBooks = async () =>{
                    return await handelData(data)
                };
                return newBooks()
                // dispatchData({type:"setbook",payload:newBooks})
            }

            else {
                return []
            }
    } catch(error){
            console.log(error)
            return "error"
        }

    }
