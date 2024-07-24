import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setField } from "@/redux/slice";
import TextField from "@/components/TextField/TextField";
import Select from "@/components/Select/Select";
import Text from "@/components/Text/Text";
import { SelectChangeEvent } from "@mui/material";
import { MainContainer } from "./FormInputs.style";

import useUrgencies from "@/feature/post/hooks/useUrgencies";
import useDepartments from "@/feature/post/hooks/useDepartments";

const FormInputs = () => {
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
    }
  };

  const { status: urgencyStatus, data: urgencyData } = useUrgencies();
  const { status: departmentStatus, data: departmentData } = useDepartments();

  return (
    <MainContainer>
      <div>
        <Text className="head" color="secondary" children="Request Title" />
        <TextField
          name="title"
          value={formState.title}
          onChange={handleTextFieldChange}
        />
      </div>
      <div>
        <Text className="head" color="secondary" children="Location" />
        <TextField
          name="location"
          value={formState.location}
          onChange={handleTextFieldChange}
        />
      </div>
      <div>
        <Text className="head" color="secondary" children="Urgency" />
        {urgencyStatus === "error" ? (
          <Select
            name="urgencyId"
            value={formState.urgencyId}
            options={urgencyData}
            onChange={handleSelectChange}
            disabled={true}
          />
        ) : (
          <Select
            name="urgencyId"
            value={formState.urgencyId}
            options={urgencyData}
            onChange={handleSelectChange}
          />
        )}
      </div>
      <div>
        <Text className="head" color="secondary" children="Department" />
        {departmentStatus === "error" ? (
          <Select
            name="departmentId"
            value={formState.departmentId}
            options={departmentData}
            onChange={handleSelectChange}
            disabled={true}
          />
        ) : (
          <Select
            name="departmentId"
            value={formState.departmentId}
            options={departmentData}
            onChange={handleSelectChange}
          />
        )}
      </div>
      <div>
        <Text className="head" color="secondary" children="Request Detail" />
        <TextField
          name="detail"
          value={formState.detail}
          onChange={handleTextFieldChange}
        />
      </div>
    </MainContainer>
  );
};

export default FormInputs;
