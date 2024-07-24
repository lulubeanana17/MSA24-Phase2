import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setField } from "@/redux/slice";

const FormInputs = () => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.form);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
      </div>
    </div>
  );
};

export default FormInputs;
