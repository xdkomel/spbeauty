import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    const Button = styled.div`
        border-radius: 24px;
        border: 1px solid var(--steel-gray-500, #64748B);
        min-width: 217px;
        &:hover {
            background: ( #CFDDE8 100%);
        }
        &:active {
            background: #DFDFDF;
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