import MainContainer from "./Navigation.style";
import Text from "../Text/Text";
import Link from "next/link";

const Navigation = () => {

    return (
        <MainContainer>
            <div className="containerL">
                <Text className="Logo" color="error" children="NOWREQ" />
            </div>
            <div className="containerR">
                <Link className="link" href={`/browse`}>
                    <Text className="browse" color="info" children="Request board" />
                </Link>
                <Link className="link" href={`/post`}>
                    <Text className="post" color="info" children="Post a request" />
                </Link>
            </div>
        </MainContainer>
    )
}

export default Navigation;