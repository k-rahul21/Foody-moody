import "./CardSkeleton.scss";

const CardSkeleton = () => {
  return (
    <div className="skeleton" >
      <div className="photo shine"></div>
      <div className="group-lines">
        <div className="lines shine"></div>
        <div className="lines shine"></div>
        <div className="lines shine mb-10"></div>
      </div>
      <div className="horizontal-line"></div>
      <div className="lines shine mb-10"></div>
    </div>
  )
}

export default CardSkeleton;