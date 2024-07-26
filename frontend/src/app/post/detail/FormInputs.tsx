import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setField } from "@/redux/slice";
import TextField from "@/components/TextField/TextField";
import Select from "@/components/Select/Select";
import Text from "@/components/Text/Text";
import { SelectChangeEvent } from "@mui/material";
import { MainContainer } from "./FormInputs.style";

import useUrgencies from "@/feature/post/hooks/useUrgencies";
import useDepartments from "@/feature/post/hooks/useDepartments";

interface FormInputsProps {
  value: boolean;
}

const FormInputs = ({ value }: FormInputsProps) => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.form);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
  };

  const handleSelectChange = (
    e: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    const { name, value } = e.target;
    if (name) {
      dispatch(setField({ field: name, value: value as number }));

      if (name === "urgencyId") {
        dispatch(
          setField({
            field: "urgencyTitle",
            value: urgencyData?.find((item) => item.id === value)
              ?.title as string,
          })
        );
      }
      if (name === "departmentId") {
        dispatch(
          setField({
            field: "departmentTitle",
            value: departmentData?.find((item) => item.id === value)
              ?.title as string,
          })
        );
      }
    }
  };

  const { status: urgencyStatus, data: urgencyData } = useUrgencies();
  const { status: departmentStatus, data: departmentData } = useDepartments();

  return (
    <MainContainer>
      <div className="inputContainer">
        <Text className="head" color="secondary" children="* Request Title" />
        <TextField
          className="textField"
          name="title"
          value={formState.title}
          onChange={handleTextFieldChange}
          error={value}
        />
      </div>
      <div className="inputContainer">
        <Text className="head" color="secondary" children="* Location" />
        <TextField
          className="textField"
          name="location"
          value={formState.location}
          onChange={handleTextFieldChange}
          error={value}
        />
      </div>
      <div className="inputContainer">
        <Text className="head" color="secondary" children="* Urgency" />
        {urgencyStatus === "error" ? (
          <Select
            className="select"
            name="urgencyId"
            value={formState.urgencyId}
            options={urgencyData}
            onChange={handleSelectChange}
            disabled={true}
          />
        ) : (
          <Select
            className="select"
            name="urgencyId"
            value={formState.urgencyId}
            options={urgencyData}
            onChange={handleSelectChange}
            error={value}
          />
        )}
      </div>
      <div className="inputContainer">
        <Text className="head" color="secondary" children="* Department" />
        {departmentStatus === "error" ? (
          <Select
            className="select"
            name="departmentId"
            value={formState.departmentId}
            options={departmentData}
            onChange={handleSelectChange}
            disabled={true}
          />
        ) : (
          <Select
            className="select"
            name="departmentId"
            value={formState.departmentId}
            options={departmentData}
            onChange={handleSelectChange}
            required={true}
            error={value}
          />
        )}
      </div>
      <div className="inputContainer">
        <Text className="head" color="secondary" children="Request Detail" />
        <TextField
          className="textField"
          name="detail"
          value={formState.detail}
          onChange={handleTextFieldChange}
        />
      </div>
    </MainContainer>
  );
};

export default FormInputs;
