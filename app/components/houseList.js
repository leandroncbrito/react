import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const HouseList = () => {
    const { houses, setHousesWrapper, loadingState } = useHouses();

    if (loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }

    const addHouse = (house) => {
        setHousesWrapper([...houses, house]);
    };

    const newHouse = {
        id: 3,
        address: "Street 3",
        country: "CAN",
        price: 3120000
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>                        
                        <th scope="col">Address</th>
                        <th scope="col">Country</th>
                        <th scope="col">Price</th>
                    </tr>                
                </thead>
                <tbody>
                    {
                        houses.map(h => <HouseRow key={h.id} house={h} /> ) 
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => addHouse(newHouse)}>
                Add
            </button>
        </>
    );
};

export default HouseList;