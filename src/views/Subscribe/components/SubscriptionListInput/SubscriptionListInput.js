import React from "react";
import { useState, useEffect } from "react";
import SubscriptionList from '../SubscriptionList';

  function SubscriptionListInput() {

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
          <SubscriptionList subscriptions = {data}/>
          
        )}
      </>
    );
  }
  export default SubscriptionListInput;