import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../../constants';

const RestrauntMenu = () => {
  const {resId} = useParams();
  const [restaurantInfo, setRestrauntInfo] = useState({});
  const [restrauntMenu, setRestrauntMenu] = useState({});

  useEffect(() => {
    getRestrauntMenu();
  },[]);

  const getRestrauntMenu = async() => {
    const restrauntInfo = await fetch(" https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6298774&lng=77.1021305&restaurantId=" + resId +"&submitAction=ENTER");
    const response  = await restrauntInfo.json();
    setRestrauntMenu(response?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR);
    setRestrauntInfo(response?.data?.cards?.[0]?.card?.card?.info);
  }

  console.log("restrauntMenu", restrauntMenu);
  console.log("res info", restaurantInfo)

  return (
    <div>
      <h3>RestrauntMenu id: {resId}</h3>
      <h4>{restaurantInfo.name}</h4>  
      {/* <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}/> */}
    </div>
  )
}

export default RestrauntMenu