import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const HeaderLogo_1 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faCode} />
        <div className="logo-name">
          Web<span>Dev</span>
        </div>
      </NavLink>
    </div>
  );
};
export const HeaderLogo_2 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faCode} />
        Web<span>Development</span>
      </NavLink>
    </div>
  );
};
export const HeaderLogo_3 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faCode} />
        Web<span>Development</span>
      </NavLink>
    </div>
  );
};
export const HeaderLogo_4 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faCode} />
        Web<span>Development</span>
      </NavLink>
    </div>
  );
};
export const HeaderLogo_5 = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo">
        <FontAwesomeIcon className="icon" icon={faLaptop} />
        Web<span>Development</span>
      </NavLink>
    </div>
  );
};
