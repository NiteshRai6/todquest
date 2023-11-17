import { FiSearch } from "react-icons/fi";
import Button from "../Button";

const TopHeader = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center py-2 lg:py-4 gap-2 lg:gap-12">
            <div className="logo">
                <img
                    src="./toduest/logo.png"
                    alt="Logo"
                />
            </div>

            <div className="flex gap-3 lg:gap-12">
                <div>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-1 lg:pl-3 pointer-events-none">
                            <FiSearch />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block lg:px-4 h-8 pl-5 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-[#8B8B8B] bg-[#EEE] lg:w-[26rem]"
                            placeholder="Search For brand, category, coupon"
                            required
                        />
                    </div>
                </div>

                <Button className="font-bold text-sm">Login / Signup</Button>
            </div>
        </div>
    );
};

export default TopHeader;
