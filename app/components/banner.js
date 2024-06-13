import { title } from "./banner.module.css";
import Image from "next/image";

const Banner = ({children}) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width="240"
                    height="120"
                    className="dark:invert"
                />
            </div>
            <div className={`col-7 mt-5 ${title}`}>
                {children}
            </div>
        </header>
    );
};

export default Banner;