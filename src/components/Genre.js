import { useContext } from "react";
import { GenreContext } from "../data";

const Genre = ({ selectedGenre, handleSelectGenre }) => {
  const genres = useContext(GenreContext);
  return (
    <div className="genres-wrapper mt-3">
      {genres.map((gen) => (
        <div
          key={gen.id}
          className={`${
            gen.id === selectedGenre.id ? "selected" : "disabled"
          } card`}
          onClick={() => handleSelectGenre(gen)}
        >
          {gen.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
