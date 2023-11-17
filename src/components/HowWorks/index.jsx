
import LockIcon from "../../assets/lock-icon.svg?react";
import CouponIcon from "../../assets/coupon-icon.svg?react";
import GrapCoupon from "../../assets/grapcoupon-icon.svg?react";

const Index = () => {
    return (
        <section className="container-r px-2">
            <div className="container--heading">How It Works</div>

            <div className="wraper lg:flex-row flex-col gap-3 lg:gap-5">
                <div className="card-works py-6 px-4 center flex-col gap-6 bg-white border border-[#ECECEC] rounded-2xl">
                    <div className="icon center">
                        <span className="p-4 gap-2 flex gradien lightPinkGradient rounded-xl">
                            <LockIcon></LockIcon>
                        </span>
                    </div>

                    <div className="content flex center flex-col gap-2">
                        <h1 className="text-dark font-bold">Signup</h1>
                        <p className="text-[#454749] text-center text-sm font-medium">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there
                        </p>
                    </div>
                </div>

                <div className="card-works py-6 px-4 center flex-col gap-6 bg-white border border-[#ECECEC] rounded-2xl">
                    <div className="icon center">
                        <span className="p-4 gap-2 flex gradien lightPinkGradient rounded-xl">
                            <CouponIcon />
                        </span>
                    </div>

                    <div className="content flex center flex-col gap-2">
                        <h1 className="text-dark font-bold">Choose Coupon</h1>
                        <p className="text-[#454749] text-center text-sm font-medium">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there
                        </p>
                    </div>
                </div>

                <div className="card-works py-6 px-4 center flex-col gap-6 bg-white border border-[#ECECEC] rounded-2xl">
                    <div className="icon center">
                        <span className="p-4 gap-2 flex gradien lightPinkGradient rounded-xl">
                            <GrapCoupon></GrapCoupon>
                        </span>
                    </div>

                    <div className="content flex center flex-col gap-2">
                        <h1 className="text-dark font-bold">Grap Coupon</h1>
                        <p className="text-[#454749] text-center text-sm font-medium">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
