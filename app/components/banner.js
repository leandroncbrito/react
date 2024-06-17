import { useContext } from "react";
import { title } from "./banner.module.css";
import Image from "next/image";
import { navigationContext } from "./app";
import navValues from "../helpers/navValues";

const Banner = ({children}) => {
    const { navigate} = useContext(navigationContext);

    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width="240"
                    height="120"
                    className="dark:invert"
                    onClick={() => navigate(navValues.home)}
                />
            </div>
            <div className={`col-7 mt-5 ${title}`}>
                {children}
            </div>
        </header>
    );
};

export default Banner;