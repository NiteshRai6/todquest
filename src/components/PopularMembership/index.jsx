import PaginationDots from "../PaginationDots";
import CouponCard from "../CouponCategories/CouponCard";

const PopularMembership = () => {
    return (
        <section className="container-r">
            <div className="wraper px-2">
                <h1 className="container--heading">popular membership</h1>

                <div className="grid grid-rows-2 lg:grid-cols-2 gap-5">
                    <div className="item-1">
                        <img src="./sale.png" alt="sale" />
                    </div>
                    <div className="item-2 relative">
                        <img src="./image 13.png" alt="sale" />
                        <div className="absolute top-0 w-full h-full center backdrop-blur-sm bg-colorLayer">
                            <div className="grid grid-rows-2 grid-cols-2 bg-white">
                                <CouponCard></CouponCard>
                                <CouponCard></CouponCard>
                                <CouponCard></CouponCard>
                                <CouponCard></CouponCard>
                            </div>
                        </div>
                    </div>
                    <div className="item-3">
                        <img src="./food.png" alt="" />
                    </div>
                    <div className="item-4">
                        <img src="./travel.png" alt="" />
                    </div>
                </div>
            </div>

            <PaginationDots></PaginationDots>
        </section>
    );
};

export default PopularMembership;
