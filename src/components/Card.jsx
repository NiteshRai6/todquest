import Button from "./Button";

const Card = () => {
    return (
        <div className="card flex-col center bg-white">
            <div className="card--offer gap-5">
                <p className="text-green text-center">
                    Upto 60% off on Appliances
                </p>
                <div className="logo center w-full">
                    <img
                        src="./amazonLogo.png"
                        alt="logo"
                    />
                </div>
                <p className="text-[#878787] text-xs text-center">
                    Upto 60% off on summer Appliances
                </p>
            </div>

            <Button fontSize={"12px"}>Grab Now</Button>
        </div>
    );
};

export default Card;
