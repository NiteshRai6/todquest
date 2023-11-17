/* eslint-disable react/prop-types */
import styles from "./banner.module.css";
import PaginationDots from "../PaginationDots";
import { useState } from "react";

const Banner = ({ image, noPagination, blurClass }) => {
    const [isLoaded, setIsLoaded] = useState(0);

    return (
        <section className="lg:pt-10 py-4 center px-2">
            <div className="flex flex-col gap-5">
                {/* banner image */}
                <div className={`${styles["image-container"]} ${blurClass ? blurClass : ""}`}>
                    <img
                        src={image}
                        style={{ opacity: isLoaded }}
                        className="transition-opacity ease-out"
                        alt="banner-image1"
                        onLoad={() => {
                            setIsLoaded(1);
                        }}
                    />
                </div>
                {/* scroll dots */}
                {noPagination ? null : <PaginationDots></PaginationDots>}
            </div>
        </section>
    );
};

export default Banner;
