import HotIcon from "../assets/hot-icon.svg?react";
import { RiTrophyLine } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";

const Tabs = () => {
    return (
        <ul className="tabs center px-2">
            <li className="tab active">
                <RiTrophyLine />
                <span>Popular Coupons</span>
            </li>
            <li className="tab">
                <MdOutlineTimer />
                <span>Ending Soon</span>
            </li>
            <li className="tab">
                <HotIcon />
                <span>Latest Coupons</span>
            </li>
        </ul>
    );
};

export default Tabs;
