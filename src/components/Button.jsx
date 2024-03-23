import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const Button = (props) => {
  const {
    btnName,
    btnType = "button",
    btnBG = "border border-gray-400 bg-white before:bg-gradient-to-b before:from-[#67A0E6] before:to-[#063F85] text-black hover:text-white shadow-md hover:shadow-lg",
    className = "relative py-2 px-5 text-sm font-bold overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0",
    overRideClassName = "",
    children,
    handleClick = () => {},
    disabled = false,
    loading = false,
  } = props;

  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleClick();
  };

  return (
    <button
      onClick={(e) => onClick(e)}
      type={btnType}
      className={clsx(
        btnBG,
        className,
        disabled && "disabled:opacity-50 cursor-not-allowed",
        loading && "opacity-50 cursor-not-allowed",
        overRideClassName
      )}
      disabled={disabled}
    >
      <div className="flex items-center justify-center gap-2">
        {loading && (
          <Icon
            className=""
            icon="eos-icons:bubble-loading"
            height="20"
            width="28"
          />
        )}
        {btnName}
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
  btnBG: PropTypes.string,
  btnType: PropTypes.string,
  btnHoverBG: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  loading: PropTypes.bool,
  overRideClassName: PropTypes.string,
};

export default Button;
