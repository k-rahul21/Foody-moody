import { IMG_CDN_URL } from "../../constants";
import './RestrauntCard.css'

const RestrauntCard = ({avgRating, aggregatedDiscountInfo,  name, cuisines, costForTwo, deliveryTime, cloudinaryImageId}) => {
  return (
    <div className="restraunt-card">
      <img className="restraunt-card-img" src={
        IMG_CDN_URL + 
        cloudinaryImageId
      } />
      <div className="product-name">{name}</div>
      <div className="product-description">{cuisines.join(", ")}</div>
      <div className="product-extra-info">
        {avgRating !== '--' && 
          <div className="product-rating">⭐{avgRating}</div>
        }
        <div className="product-delivery-time">{deliveryTime} MINS</div>
        <div className="product-cost">Rs.{costForTwo} </div>
      </div>
      {aggregatedDiscountInfo?.descriptionList?.[0].meta && (
        <>
         {/* <div className="horizontal-line"></div> */}
         <div className="product-ongoing-offer">{aggregatedDiscountInfo?.descriptionList?.[0].meta}</div>
        </>
      )}
    

    </div>
  )
}

export default RestrauntCard;