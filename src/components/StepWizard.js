import { useEffect } from "react";

const StepWizard = ({ step, addNew }) => {
  function checkParams() {
    if (!addNew && step === 3) {
      return null;
    }
    return (
      <div className="stepper-item">
        <div className="step-container">
          <div
            className={`${
              step === 3 ? "completed" : "incomplete"
            } step-counter`}
          >
            {addNew && step === 3 ? "3" : "..."}
          </div>
          <p className="step-name">
            {addNew && step === 3 ? "Add new subgenre" : ""}
          </p>
        </div>
        {step > 2 && (
          <div>
            <hr className="hr-line" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="stepper-wrapper">
      <div className="stepper-item">
        <div className="step-container">
          <div
            className={`${
              step === 1 ? "completed" : "incomplete"
            } step-counter`}
          >
            1
          </div>
          <p className="step-name">Genre</p>
        </div>
        <div>
          <hr className="hr-line" />
        </div>
      </div>
      <div className="stepper-item">
        <div className="step-container">
          <div
            className={`${
              step === 2 ? "completed" : "incomplete"
            } step-counter`}
          >
            2
          </div>
          <p className="step-name">Subgenre</p>
        </div>
        <div>
          <hr className="hr-line" />
        </div>
      </div>
      {checkParams()}
      {step === 3 && (
        <div className="stepper-item">
          <div className="step-container">
            <div
              className={`${
                step === 3 && !addNew ? "completed" : "incomplete"
              } step-counter`}
            >
              {addNew ? "4" : "3"}
            </div>
            <p className="step-name">Information</p>
          </div>
          {false && (
            <div>
              <hr className="hr-line" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StepWizard;
