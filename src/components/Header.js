import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

const Header = ({ noBack, subTitle, title }) => {
  const history = useHistory();

  return (
    <>
      <div className="header">
        {!noBack && (
          <div className="backButton" onClick={() => history.goBack()}>
            <HiOutlineArrowNarrowLeft />
          </div>
        )}
        {subTitle && <h4 className="subHead">{subTitle}</h4>}
        {title && <h2 className="head">{title}</h2>}
      </div>
    </>
  );
};

export default Header;
