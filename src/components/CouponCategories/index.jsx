import PaginationDots from "../PaginationDots";
import CouponCard from "./CouponCard";
import Categories from "./Categories";

const CouponCategories = () => {
    return (
        <section className="container-r gradient-container">
            <h1 className="container--heading">Coupon By Categories</h1>

            <div className="wraper gap-0">
                <Categories></Categories>
                <div className="bg-white gap-y-4 pt-4 pb-6 flex flex-col">
                    <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 lg:gap-x-5 gap-y-3">
                        <CouponCard></CouponCard>
                        <CouponCard></CouponCard>
                        <CouponCard></CouponCard>
                        <CouponCard></CouponCard>
                    </div>

                    <PaginationDots></PaginationDots>
                </div>
            </div>
        </section>
    );
};

export default CouponCategories;
