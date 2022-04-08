import '../App.css';
import customDivider from "../assets/divider_custom.svg";

function InputHeader(props) {
  // const renderAddBtn = () => {
  //   if(props.addBtn === true) {
  //     return(
  //       <button 
  //         onClick={props.addFunc} 
  //         data-section={props.sectionKey} 
  //         className='regularBtn addBtn'
  //        >Add New</button>
  //     )
  //   } 
  // }
  return(
    <div className="InputHeader">
      <h2 className="InputHeader-heading"
        >{props.heading}
      </h2>       
      {/* {renderAddBtn()}    */}
      <img  className="InputHeader-divider" 
            src={customDivider} 
            alt="decorative line">
      </img>
    </div>
  )
}
export default InputHeader;