import Card from "../Card";
import PaginationDots from "../PaginationDots";
import Tabs from "../Tabs";

const CouponLists = () => {
    return (
        <section className="container-r">
            <Tabs></Tabs>

            <div className="wraper gap-x-5 grid lg:grid-rows-2 lg:grid-cols-4">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

            <PaginationDots></PaginationDots>
        </section>
    );
};

export default CouponLists;
