import FormInputs from "@/app/post/detail/FormInputs";
import { useAppSelector } from "@/redux/hooks";

export const RequestDetail = () => {
  const formState = useAppSelector((state) => state.form);

  return (
    <div>
      <FormInputs />
      <p>Current Title: {formState.title}</p>
      <p>Current location: {formState.location}</p>
      <p>Current urgency: {formState.urgencyId}</p>
      <p>Current department: {formState.departmentId}</p>
      <p>Current detail: {formState.detail}</p>
    </div>
  );
};
