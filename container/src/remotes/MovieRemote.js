import React, { useState, useEffect, useRef } from "react";
import { mount } from "movieApp/movieIndex";
import { useNavigate, useLocation } from "react-router-dom";

function MovieRemote() {
  const remoteRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [onParentNavigate, setOnParentNavigate] = useState();

  useEffect(() => {
    const {onParentNavigate : onHostNavigate} = mount(remoteRef.current, {
        initialPath : location.pathname,
        onNavigate: ({pathname : nextPathname})=>{
            const {pathname} = location
            if(pathname !== nextPathname){
                navigate(nextPathname)
            }
        }
    });
    setOnParentNavigate(()=>onHostNavigate)
  }, []);

  useEffect(()=>{
    if(onParentNavigate){
        onParentNavigate(location)
    }
  },[location])

  return <div ref={remoteRef}></div>;
}

export default MovieRemote;
