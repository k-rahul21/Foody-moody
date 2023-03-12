import React , {useEffect} from 'react'

function RestrauntMenu() {

  useEffect(() => {
    getRestrauntMenu();
  },[]);

  const getRestrauntMenu = async() => {
    const restrauntInfo = await fetch(" https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6298774&lng=77.1021305&restaurantId=147976&submitAction=ENTER");
    const response  = await restrauntInfo.json();
    console.log(response);
  }

  return (
    <div>RestrauntMenu id:123</div>
  )
}

export default RestrauntMenu