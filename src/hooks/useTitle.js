import {useEffect} from "react";


export const useTitle = (titles) => {
  useEffect(()=>{
    document.title=`${titles} | shoping cart`
    console.log(titles)
  },[titles])
    
  
}
