/* eslint-disable react/prop-types */

const Button = ({ children, fontSize, className }) => {
    return (
        <button className={`py-2 px-4 center gap-2 rounded-lg bg-primary text-white uppercase text-xs w-[9.25rem] ${className ? className : ""}`}
            style={{
                fontSize: fontSize
            }}
        >
            {children}
        </button>
    );
};

export default Button;
