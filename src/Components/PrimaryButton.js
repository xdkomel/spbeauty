import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        border-radius: 24px;
        background: #3B82F6;
        min-width: ${minWidth};
        color: white;
        &:hover {
            opacity: 0.8
        }
        &:active {
            background: rgba(15,23,42,0.6)
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;