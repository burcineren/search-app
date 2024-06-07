
import { Link } from "react-router-dom";
import rightArrow from "../assets/images/icons/right-arrow.svg";
import logo from "../assets/images/tesodev.png";


export default function AddNew() {
  
  return (
    <div className="add-new-container">
      <div className="input-header">
        <img src={logo} alt="tesodev" />
        <div className="return-page">
          <Link to={-1}>
            <div className="return-button-container">
            <img src={rightArrow} alt="" width={50} />
              <p>Return to List Page</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="input-container">
       
      </div>
     
    </div>
  );
}
