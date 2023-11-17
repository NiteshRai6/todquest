/* eslint-disable react/prop-types */
const DownloadButton = ({
    logo,
    title,

}) => {
    return (
        <button className="p-2 flex gap-3 rounded-lg outline-none bg-white shadow-buttonShadow">
            <div className="w-8">
                <img
                    className="h-full w-full"
                    src={logo}
                />
            </div>
            <div className="flex flex-col">
                <div className="text-[0.625rem] font-semibold text-[#747577] text-start">
                    Download From
                </div>
                <div className="text-sm text-dark font-bold uppercase whitespace-nowrap">
                    {title}
                </div>
            </div>
        </button>
    );
};

export default DownloadButton;
