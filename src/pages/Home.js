import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import apiRequest from "./apiRequest";
import Page from "./Page";

export function Home(){
  
  let [searchParams, setSearchParams] = useSearchParams()
  const [itemValue , setItemValue] = useState("")
  const {data} = useQuery(["product", itemValue], () => apiRequest("GET", "products/search?q=" + itemValue)|| "")

  useEffect(() =>{
    setItemValue(itemValue)
  },[])

  function searchItem(e){
    e.preventDefault();
    setSearchParams({
      search : itemValue
    })
  }
    return(
      <Page>

        <div className="search">
          <form onSubmit={searchItem}>
            <input
            type="text"
            value ={itemValue}
            onChange= {e => setItemValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">RECENTLY ADDED</h2>
          </div>

          <div className="row tm-mb-90 tm-gallery">


          {
//იმისთვის რომ არ დაბრუნდეს ერორო დატას ჩატვირთვამდე გავაკეთეთ ამრტივი ოპერატორი, რომელიც ან dataს დამეპავს ან ცარიელ მასივს
            (data || []).map(item => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" key={item.id}>
              <figure className="effect-ming tm-video-item">

{/* შეგიძლიათ მიაკითხოთ item.images [0] განსხვავებული ფოტოებისთვის */}
                <img src={"https://www1.lovethatdesign.com/wp-content/uploads/2019/03/Love-that-Design-NOVO-01.jpg"} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Buy Now</h2>

{/* აუცილებელია ლინკ მნიშვნელობაც იცვლებოდეს აიდის მიხედვით */}
                  <Link to={"/product/"+ item.id}href="photo-detail.html">Buy Now</Link>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">

  {/* სურვილის მიხედვით შეგიძლიათ წამოიღოთ მონაცემები itemებიდან */}
                <span className="tm-text-gray-light">{item.title}</span>
                <span>{item.price  + ".00 $"}</span>
              </div>
            </div>
            ))
          }
          </div>
        </div>
      </Page>
    
    )
}