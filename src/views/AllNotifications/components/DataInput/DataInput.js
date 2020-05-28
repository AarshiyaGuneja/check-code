import React from "react";
import HomePage from '../HomePage';

  function DataInput() {
    var data=[{"id":"2804202001","alertid":"booth0","parentalertid":"booth0","user":"Abhinay","application":"M2","time":"2020-04-12T07:12:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading started.","notificationType":"information"},{"id":"2804202002","alertid":"booth1","parentalertid":"booth0","user":"Abhinay","application":"M2","time":"2020-04-12T07:20:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading Failed!","notificationType":null},{"id":"2804202003","alertid":"booth2","parentalertid":"booth2","user":"Abhinay","application":"M2","time":"2020-04-12T07:40:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading started","notificationType":"information"},{"id":"2804202004","alertid":"booth3","parentalertid":"booth2","user":"Abhinay","application":"M2","time":"2020-04-12T08:12:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading completed with some exceptions","notificationType":"warning"},{"id":"2804202005","alertid":"booth4","parentalertid":"booth4","user":"Abhinay","application":"M2","time":"2020-04-12T08:20:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"Signoff done successfully","notificationType":"completed"},{"id":"2804202006","alertid":"booth5","parentalertid":"booth5","user":"Abhinay","application":"M2","time":"2020-04-12T08:37:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"PNS started","notificationType":"information"},{"id":"2804202007","alertid":"booth6","parentalertid":"booth6","user":"Abhinay","application":"M2","time":"2020-04-12T08:59:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"Regeneration of Gain Started","notificationType":"information"},{"id":"2804202009","alertid":"booth8","parentalertid":"booth8","user":"Abhinay","application":"M2","time":"2020-04-12T09:13:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"All Position Generated Successfully","notificationType":"completed"}]
    return (
      
         <>
          <HomePage/>
      </>
    );
  }

// import React from "react";
// import { useState, useEffect } from "react";
// import NotificationTable from '../NotificationTable';

//   function DataInput() {

//     function useFetch(url) {
//         const [data, setData] = useState([]);
//         const [loading, setLoading] = useState(true);
//         async function fetchUrl() {
//           const response = await fetch(url);
//           const json = await response.json();
//           setData(json);
//           setLoading(false);
//         }
//         useEffect(() => {
//           fetchUrl();
//         }, []);
//         return [data, loading];
//       }

//     const [data, loading] = useFetch(
//       "https://cors-anywhere.herokuapp.com/https://nav-notification.herokuapp.com/byApp/M2"
//     );
//     return (
      
//          <>
//         {loading ? (
//           "Loading Notifications.."
//         ) : (
//           <NotificationTable notifications = {data}/>
          
//         )}
//       </>
//     );
//   }
  export default DataInput;