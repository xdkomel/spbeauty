import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: none;
        border-radius: 24px;
        border: 1px solid #DFDFDF;
        min-width: 217px;
        color: #64748B;
        &:hover {
            background: #FFFFFF;
            border: none;
            color: #64748B;
            opacity: 0.8;
        }
        &:active {
            background: #FFFFFF;
            border: none;
            color: #64748B;
            opacity: 0.6;
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