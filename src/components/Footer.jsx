/* eslint-disable react/prop-types */
import { BiSolidRightArrow } from "react-icons/bi";
import DownloadButton from "./DownloadButton";
import footer from "../data/Footer"

const FooterList = ({ title, lists }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-primary text-xs font-bold uppercase">
                {title}
            </h2>

            <ul className="flex flex-col gap-3">
                {lists?.map((name, index) => {
                    return (
                        <li className="flex items-center gap-2 hover:cursor-pointer" key={name + index}>
                            <BiSolidRightArrow size={10} />
                            <span className="text-[0.625rem] font-medium text-white capitalize">
                                {name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark center text-white w-full center py-8">
            <div className="grid lg:grid-cols-5 gap-5 w-auto lg:max-w-[980px] px-10">
                <div className="col-1 flex flex-col gap-[0.81rem]">
                    <div className="logo">
                        <img
                            src="./logo.png"
                            alt="Logo"
                            className="invert grayscale"
                        />
                    </div>

                    <p className="text-xs">
                        Lorem Ipsum is simply dummy of the printing and type
                        setting.
                    </p>

                    <div className="buttons flex justify-center lg:flex-col flex-row gap-4 mt-5">
                        <DownloadButton
                            title="app store"
                            logo={"./applestore.png"}
                        ></DownloadButton>

                        <DownloadButton
                            title="play store"
                            logo={"./playstore.png"}
                        ></DownloadButton>
                    </div>
                </div>

                {footer?.map((foot) => {
                    return <FooterList key={foot.id} title={foot.title} lists={foot.lists} />;
                })}
            </div>
        </footer>
    );
};

export default Footer;
