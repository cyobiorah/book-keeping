import { ModalContainer, ModalContent, ModalPane } from "./Modal";
import checked from "./checked.png";
import Button from "./Button";

const CompleteModal = ({ show, handleClose, width, resetAll }) => {
  return (
    <ModalPane show={show} onClick={() => handleClose()}>
      <ModalContainer width={width}>
        <ModalContent>
          <div style={{ textAlign: "center" }}>
            <img src={checked} alt="checked" />
            <p className="mt-2 mb-2">Book added successfully</p>
            <Button classname="active" handleClick={resetAll}>
              Add another book
            </Button>
          </div>
        </ModalContent>
      </ModalContainer>
    </ModalPane>
  );
};

export default CompleteModal;
