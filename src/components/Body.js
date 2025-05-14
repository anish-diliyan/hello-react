import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
    console.log(Array.isArray(resList), resList);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {
                  resList.map((resturant) => (
                    <RestaurentCard key={resturant.id} resData={resturant}/>
                  ))
               }
            </div>
        </div>
    )
}

export default Body;