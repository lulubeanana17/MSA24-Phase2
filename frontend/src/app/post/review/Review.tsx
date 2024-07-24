import { MainContainer } from "./Review.style";
import { useAppSelector } from "@/redux/hooks";
import Text from "@/components/Text/Text";

export const RequestReview = () => {
    const formState = useAppSelector((state) => state.form);

    return (
        <MainContainer>
            <div>
            <Text className="head" color="secondary" children="Request Title" />
            <Text className="body" color="secondary" children={formState.title} />
            </div>
            <div>
            <Text className="head" color="secondary" children="Location" />
            <Text className="body" color="secondary" children={formState.location} />
            </div>
            <div>
            <Text className="head" color="secondary" children="Urgency" />
            <Text className="body" color="secondary" children={formState.urgencyId} />
            </div>
            <div>
            <Text className="head" color="secondary" children="Department" />
            <Text className="body" color="secondary" children={formState.departmentId} />
            </div>
            <div>
            <Text className="head" color="secondary" children="Request Detail" />
            <Text className="body" color="secondary" children={formState.detail} />
            </div>
        </MainContainer>
    )
}