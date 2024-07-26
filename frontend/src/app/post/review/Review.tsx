import { MainContainer } from "./Review.style";
import { useAppSelector } from "@/redux/hooks";
import Text from "@/components/Text/Text";

export const RequestReview = () => {
  const formState = useAppSelector((state) => state.form);

  return (
    <MainContainer>
      <div className="contentContainer">
        <Text
          className="content-bold"
          color="secondary"
          children="Request Title"
        />
        <Text
          className="content-normal"
          color="secondary"
          children={formState.title}
        />
      </div>
      <div className="contentContainer">
        <Text className="content-bold" color="secondary" children="Location" />
        <Text
          className="content-normal"
          color="secondary"
          children={formState.location}
        />
      </div>
      <div className="contentContainer">
        <Text className="content-bold" color="secondary" children="Urgency" />
        <Text
          className="content-normal"
          color="secondary"
          children={formState.urgencyTitle}
        />
      </div>
      <div className="contentContainer">
        <Text
          className="content-bold"
          color="secondary"
          children="Department"
        />
        <Text
          className="content-normal"
          color="secondary"
          children={formState.departmentTitle}
        />
      </div>
      <div className="contentContainer">
        <Text
          className="content-bold"
          color="secondary"
          children="Request Detail"
        />
        <Text
          className="content-normal"
          color="secondary"
          children={formState.detail}
        />
      </div>
    </MainContainer>
  );
};
