import { MainContainer } from "./Detail.style";
import FormInputs from "@/app/post/detail/FormInputs";
import { useAppSelector } from "@/redux/hooks";


export const RequestDetail = () => {
    const formState = useAppSelector((state) => state.form);

  return (
    <MainContainer>
        <FormInputs />
        <div>
        <p>Current Title: {formState.title}</p>
        <p>Current Description: {formState.description}</p>
      </div>
    </MainContainer>
  );
};
