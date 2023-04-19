import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {

    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border-radius: 24px;
        min-width: ${minWidth};
        min-height: 34px;
        color: white;
        &:hover {
            background: #3B82F6;
            opacity: .8;
        }
        &:active {
            background: #0F172A;
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