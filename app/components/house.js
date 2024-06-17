import { useContext } from "react";
import { navigationContext } from "./app";

const House = () => {
    const { param: house } = useContext(navigationContext);
    
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img></img>
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{house.country}</h5>                    
                </div>
                <div className="row mt-2">
                    <p className="col-12">{house.address}</p>
                    <p className="col-12">{house.price}</p>
                </div>
            </div>
        </div>
    );
};

export default House;;