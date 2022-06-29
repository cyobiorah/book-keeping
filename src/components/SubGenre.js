import { createRef } from "react";

const SubGenre = ({
  subGenres,
  selectedSubGenre,
  handleSelectSubGenre,
  handleAddNew,
  addNew
}) => {
  const divRef = createRef(null);

  return (
    <div className="genres-wrapper mt-3">
      {subGenres.map((gen) => (
        <div
          key={gen.id}
          className={`${
            gen.id === selectedSubGenre.id ? "selected" : "disabled"
          } card`}
          onClick={() => {
            handleSelectSubGenre(gen);
            divRef.current.classList.remove("selected");
          }}
        >
          {gen.name}
        </div>
      ))}
      <div
        className={`${addNew ? "selected" : "disabled"} card`}
        ref={divRef}
        onClick={() => {
          handleAddNew();
          divRef.current.classList.add("selected");
        }}
      >
        Add new
      </div>
    </div>
  );
};

export default SubGenre;
