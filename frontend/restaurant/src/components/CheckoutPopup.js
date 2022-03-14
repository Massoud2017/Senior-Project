import "./components-styles/style.css";
import CloseIcon from '../assets/icons/close-icon-13577.ico';

function CheckoutPopup(props) {
  return (props.trigger) ? (
    <div className="chekoutpopup">
      <div className="checkoutpopup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <img src={CloseIcon} alt="close-icon" />
        </button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default CheckoutPopup;