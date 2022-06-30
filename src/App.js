import "./App.scss";
import { useForm } from "react-hook-form";
import Genre from "./components/Genre";
import Button from "./components/Button";
import StepWizard from "./components/StepWizard";
import { useState, useId, useEffect } from "react";
import SubGenre from "./components/SubGenre";
import Form from "./components/Form";
import Input from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedGenre, addSelectedSubGenre } from "./redux/appSlice";
import CompleteModal from "./components/CompleteModal";

function App() {
  const dispatch = useDispatch();

  const id = useId();

  const { selectedGenre, selectedSubGenre } = useSelector(
    (state) => state.appSlice
  );

  const [step, setStep] = useState(1);
  const [addNew, setAddNew] = useState(false);
  const [complete, setComplete] = useState(false);

  const newBookForm = useForm({
    mode: "onChange",
    // shouldUnregister: true,
  });

  const {
    formState: { isValid: isValid2 },
  } = newBookForm;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", shouldUnregister: true });

  const onAddGenre = (data) => {
    data.id = id;
    dispatch(addSelectedSubGenre(data));
  };

  function isEmptyObj(obj, cb) {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
      alert("Pls select somethings!");
      return;
    } else return cb();
  }

  const handleNext = () => {
    if (step === 1) isEmptyObj(selectedGenre, () => setStep(2));
    if (step === 2) {
      if (addNew) setStep(3);
      else isEmptyObj(selectedSubGenre, () => setStep(3));
    }
    if (step === 3 && addNew) {
      if (isValid) {
        handleSubmit(onAddGenre)();
        setStep(4);
        return;
      } else {
        alert("Form not valid!");
        return;
      }
    } else if (step === 3 && !addNew) {
      if (isValid2) newBookForm.handleSubmit(onSubmit)();
      else alert("Form not valid!");
    }
    if (step === 4) {
      if (isValid2) newBookForm.handleSubmit(onSubmit)();
      else alert("Form not valid!");
    }
  };

  const handleReset = () => {
    setStep(1);
    setAddNew(false);
    setComplete(false);
    dispatch(addSelectedGenre({}));
    dispatch(addSelectedSubGenre({}));
    newBookForm.reset();
  };

  async function onSubmit(data) {
    // fetch(JSON.stringify(data))
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.json());
    //     return response.json();
    //   })
    //   .then((data) => console.log(data));
    setComplete(true);
    console.log(data);
    // alert(JSON.stringify(data));
  }

  function returnText() {
    if (step === 4) return "Add";
    if (step >= 3 && !addNew) return "Add";
    return "Next";
  }

  useEffect(() => {
    if (step === 3 && addNew) {
      trigger();
    }
    // eslint-disable-next-line
  }, [step, addNew]);

  return (
    <div className="container">
      <p className="sub mb-1">Add book - New book</p>
      <div className="wrapper">
        <StepWizard step={step} addNew={addNew} />

        {step === 1 && (
          <Genre
            selectedGenre={selectedGenre}
            handleSelectGenre={(selectedGenre) =>
              dispatch(addSelectedGenre(selectedGenre))
            }
          />
        )}

        {step === 2 && (
          <SubGenre
            addNew={addNew}
            subGenres={selectedGenre.subgenres}
            selectedSubGenre={selectedSubGenre}
            handleSelectSubGenre={(selectedSubGenre) => {
              dispatch(addSelectedSubGenre(selectedSubGenre));
              setAddNew(false);
            }}
            handleAddNew={() => {
              setAddNew(true);
              dispatch(addSelectedSubGenre({}));
            }}
          />
        )}

        {step === 3 && addNew && (
          <form onSubmit={handleSubmit(onAddGenre)}>
            <Input
              placeholder="SubGenre name"
              type="text"
              name="name"
              required
              inputRef={register}
              defaultValue={selectedSubGenre.name}
              error={errors.name}
            />
            <div className="mt-1">
              <input
                type="checkbox"
                name="isDescriptionRequired"
                id="isDescriptionRequired"
                className="mr-1"
                {...register("isDescriptionRequired")}
                defaultChecked={selectedSubGenre.isDescriptionRequired}
              />
              <label htmlFor="isDescriptionRequired">
                Description is required for this genre
              </label>
            </div>
          </form>
        )}

        {step === 3 && !addNew && (
          <Form
            itemForm={newBookForm}
            isDescriptionRequired={selectedSubGenre.isDescriptionRequired}
          />
        )}
        {step > 3 && addNew && (
          <Form
            itemForm={newBookForm}
            isDescriptionRequired={selectedSubGenre.isDescriptionRequired}
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
          <Button classname="active" handleClick={() => handleNext()}>
            {returnText()}
          </Button>
        </div>
      </div>
      {complete ? (
        <CompleteModal
          show={complete}
          width="480px"
          handleClose={() => setComplete(false)}
          resetAll={handleReset}
        />
      ) : null}
    </div>
  );
}

export default App;
