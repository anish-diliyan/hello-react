import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props
    return (
        <div className="res-card">
            <img
              className="res-logo"
              alt="res-logo"
              src= {CDN_URL}
            />
          <h4>{resData.resName}</h4>
          <h5>{resData.cuisine}</h5>
          <h5>{resData.rating}</h5>
          <h5>{resData.deliverIn}</h5>
        </div>
    )
}

export default RestaurentCard;