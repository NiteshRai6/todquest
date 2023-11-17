import CouponCard from "../CouponCategories/CouponCard";
import PaginationDots from "../PaginationDots";

const DealsOfDay = () => {
    return (
        <section className="container-r">
            <h1 className="container--heading">Deals of the Day</h1>
            <div className="wraper">
                <div className='grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 lg:gap-x-5 gap-y-3'>
                    <CouponCard></CouponCard>
                    <CouponCard></CouponCard>
                    <CouponCard></CouponCard>
                    <CouponCard></CouponCard>
                </div>
            </div>
            <PaginationDots></PaginationDots>
        </section>
    );
};

export default DealsOfDay;
