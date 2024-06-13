import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const houseArray = [
    {
        id: 1,
        address: "123 Main Street",
        country: "USA",
        price: 1000000
    },
    {
        id: 2,
        address: "124 Street 2",
        country: "USA",
        price: 2000000
    }
];

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const setHousesWrapper = (houses) => {
        setHouses(houses);
    };
    
    //fetch from api
    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                //const response = await fetch("/api/houses");
                //const data = await response.json();
                const data = houseArray;
                setHousesWrapper(data);
                setLoadingState(loadingStatus.loaded);                
            } catch (error) {
                setLoadingState(loadingStatus.hasErrored);
                console.log(error);
            }
        };
        fetchHouses();
    }, []);

    return { houses, setHousesWrapper, loadingState };
};

export default useHouses;
