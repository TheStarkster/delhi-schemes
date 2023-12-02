"use client"
import Hero from '../components/hero';
import ExploreSchemes from '../components/explore_schemes';
import { useEffect, useRef } from 'react';
import { setCookie, getCookie } from "cookies-next";


const HomePage = (props) => {
  const hasRun = useRef(false);

 
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
  
    const lastVisit = getCookie('lastVisit');
    console.log(lastVisit);
    const oneHour = 60 * 60 * 1000; // milliseconds in one hour
    if (!lastVisit || Date.now() - new Date(lastVisit).getTime() > oneHour) {
      console.log('visit increment');
      fetch('https://dcpcr-ews-api.grevity.in/schemes/increment-visit') // Replace with your server's endpoint
        .then(response => response.json())
        .then(data => {
          if (data) {
            setCookie("lastVisit", new Date().toISOString(), { path: '/', maxAge: 3600 });
          }
        });
    }
  }, []);

  return <>
    <Hero />
    <ExploreSchemes />
  </>
}

export default HomePage