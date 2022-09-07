import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;border-radius: 24px;
        min-width: ${minWidth};
        color: #FFFFFF;
        &:hover {
            background: #3B82F6; opacity: 0.8;border-radius: 24px;
        }
        &:active {
            background: #152842; opacity: 0.6; border-radius: 24px;
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