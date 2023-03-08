import CardSkeleton from "../CardSkeleton/CardSkeleton"
import "./SkeletonListing.scss";

const SkeletonListing = () => {
  return ( 
  <div className="skeleton-container">
  {Array(10).fill(0).map((e,index) => 
    <CardSkeleton key={index}/>
  )}
  </div>
  )
}

export default SkeletonListing;
