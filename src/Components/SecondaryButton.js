import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: white;
        border: 1px solid rgba(100, 116, 139);
        border-radius: 24px;
        min-width: ${minWidth};
        color: rgba(100, 116, 139);
        &:hover {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255);
        }
        &:active {
            background: rgba(255, 255, 255, 0.6);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;