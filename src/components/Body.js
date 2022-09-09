import { useEffect, useState } from "react";
import axios from "axios";

function Body() {
    const [cars, setCars] = useState([]);
    const url = `https://www.turners.co.nz`;

    useEffect(() => {
        axios.get(url).then((axiosResult) => {
            const apiResponse = axiosResult; // API response from Axios => JSON
            // apiResponse.data is the array
            setCars(apiResponse);
        }); // state users updated after getting the data from the API
    }, []);
    console.log("This is from cars", cars);

    return (
        <>
            <div>{cars}</div>
        </>
    );
}

export default Body;
