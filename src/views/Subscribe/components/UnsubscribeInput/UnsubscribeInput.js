import React from "react";
import { useState, useEffect } from "react";
import Unsubscribe from '../Unsubscribe';

  function UnsubscribeInput() {

    function useFetch(url) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        async function fetchUrl() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        }
        useEffect(() => {
          fetchUrl();
        }, []);
        return [data, loading];
      }

    const [data, loading] = useFetch(
      "https://cors-anywhere.herokuapp.com/http://nav-notification.herokuapp.com/subscriptions/userid/1"
    );
    return (
      
         <>
        {loading ? (
          ""
        ) : (
          <Unsubscribe unsubscribe = {data}/>
          
        )}
      </>
    );
  }
  export default UnsubscribeInput;