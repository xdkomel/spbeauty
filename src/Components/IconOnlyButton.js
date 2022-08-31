import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({icon}) {
    const Container = styled.div`
        &:hover {
        color: rgb(100, 116, 139);
    }
    `;
    return (
        <Container><Clickable>{icon}</Clickable></Container>
    );
}

export default IconOnlyButton;