import Button from "../Button";

const CouponCard = () => {
    return (
        <div className="card flex-col center bg-white gap-2 border-0 flex-1">
            <div className="card--offer gap-6 center flex-col">

                <div className="logo center w-full flex flex-col gap-3">
                    <img
                        src="./amazonLogo.png"
                        alt="logo"
                    />
                    <p className="text-xs">Amazon</p>
                </div>
                <p className="text-green text-center font-semibold text-xs">
                    Flat 30% Off
                </p>
            </div>

            <Button fontSize={"12px"}>Grab Now</Button>
        </div>
    );
};

export default CouponCard;
