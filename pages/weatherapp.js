import React from "react";
import { useRouter } from "next/router";
const WeatherApplication = (props)=>{
  const weatherdata = props.weatherdata;
  // const router = useRouter()
  // const { weatherdata } = router.query
    console.log("hdhd ",weatherdata);
    return(
    
          weatherdata.slice(0,31).map((val)=>{
            console.log(val.time);
            console.log(val.data.instant.details.air_temperature);
            // console.log(val.data. next_1_hours. summary. symbol_code);

            return(<tr>
              <td>{val.time}</td>
              <td>{val.data.instant.details.air_temperature}</td>
              <td>{val.data.next_1_hours.summary.symbol_code}</td>
              
          </tr>)
          })

    );
}
export default WeatherApplication;