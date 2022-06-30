import { useEffect } from "react";
import Input from "./Input";

const Form = ({ itemForm, isDescriptionRequired }) => {
  const { register, formState, trigger } = itemForm;
  const { errors } = formState;

  useEffect(() => {
    trigger();
    // eslint-disable-next-line
  }, []);

  return (
    <form>
      <Input
        type="text"
        placeholder="Book title"
        label="Book title"
        name="book_title"
        required
        inputRef={register}
        error={errors.book_title}
      />
      <Input
        type="text"
        placeholder="Author"
        label="Author"
        name="author"
        inputRef={register}
      />
      <Input
        type="text"
        placeholder="ISBN"
        label="ISBN"
        name="isbn"
        inputRef={register}
      />
      <Input
        type="text"
        placeholder="Publisher"
        label="Publisher"
        name="publisher"
        inputRef={register}
      />
      <Input
        type="date"
        placeholder="DD/MM/YYYY"
        label="Date plublished"
        name="date_published"
        inputRef={register}
      />
      <Input
        type="text"
        placeholder="Number of pages"
        label="Number of pages"
        name="number_of_pages"
        inputRef={register}
      />
      <Input
        type="text"
        placeholder="Format"
        label="Format"
        name="format"
        inputRef={register}
      />
      <div
        style={{ display: "flex", gap: 10, justifyContent: "space-between" }}
      >
        <Input
          type="text"
          placeholder="Edition"
          label="Edition"
          name="edition"
          inputRef={register}
        />
        <Input
          type="text"
          placeholder="Edition language"
          label="Edition language"
          name="edition_language"
          inputRef={register}
        />
      </div>
      <Input
        type="textarea"
        cols="30"
        rows="30"
        placeholder="Type the description..."
        label="Description"
        name="description"
        required={isDescriptionRequired}
        inputRef={register}
        error={errors.description}
      />
    </form>
  );
};

export default Form;
