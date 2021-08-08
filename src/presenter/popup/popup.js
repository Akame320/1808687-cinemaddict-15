import Popup from "../../view/popup/popup";

const closePopup = () => {
  const popup = new Popup([], []).removeElement();
}

export {closePopup}
