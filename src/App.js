import "./App.scss";
import { genres, GenreContext } from "./data";

import Genre from "./components/Genre";
import Button from "./components/Button";
import StepWizard from "./components/StepWizard";
import { useState } from "react";
import SubGenre from "./components/SubGenre";

function App() {
  const [step, setStep] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [selectedSubGenre, setSelectedSubGenre] = useState({});
  const [addNew, setAddNew] = useState(false);

  const handleNext = () => {
    if (step === 1) setStep(2);
    if (step === 2) setStep(3);
  };

  return (
    <GenreContext.Provider value={genres}>
      <div className="container">
        <p className="sub mb-1">Add book - New book</p>
        <div className="wrapper">
          <StepWizard step={step} addNew={addNew} />

          {step === 1 && (
            <Genre
              selectedGenre={selectedGenre}
              handleSelectGenre={(selectedGenre) =>
                setSelectedGenre(selectedGenre)
              }
            />
          )}

          {step === 2 && (
            <SubGenre
              addNew={addNew}
              subGenres={selectedGenre.subgenres}
              selectedSubGenre={selectedSubGenre}
              handleSelectSubGenre={(selectedSubGenre) => {
                setSelectedSubGenre(selectedSubGenre);
                setAddNew(false);
              }}
              handleAddNew={() => {
                setAddNew(true);
                setSelectedSubGenre({});
              }}
            />
          )}

          <div className="button-container mt-3">
            {step > 1 && (
              <Button
                handleClick={() => {
                  setStep(step - 1);
                }}
                back
              >
                Back
              </Button>
            )}
            {selectedGenre &&
              Object.keys(selectedGenre).length > 0 &&
              selectedGenre.constructor === Object && (
                <Button classname="active" handleClick={() => handleNext()}>
                  Next
                </Button>
              )}
          </div>
        </div>
      </div>
    </GenreContext.Provider>
  );
}

export default App;
