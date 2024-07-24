import { MainContainer } from "./Confirmation.style";
import Text from "@/components/Text/Text";

export const RequestConfirmation = () => {
  return (
    <MainContainer>
      <Text
        className="head"
        color="secondary"
        children="Your request is successfully submitted!"
      />
    </MainContainer>
  );
};
