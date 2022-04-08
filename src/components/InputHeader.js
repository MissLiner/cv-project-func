import '../App.css';
import customDivider from "../assets/divider_custom.svg";

function InputHeader(props) {
  return(
    <div className="InputHeader">
      <h2 className="InputHeader-heading"
        >{props.heading}
      </h2>
      <img  className="InputHeader-divider" 
            src={customDivider} 
            alt="decorative line">
      </img>
    </div>
  )
}
export default InputHeader;