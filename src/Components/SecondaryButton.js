import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border-radius: 24px;
        border: 1px solid #64748B;
        min-width: ${minWidth};
        min-height: 34px;
        color: #64748B;
        &:hover {
            background: #FFEFFF;
            opacity: .8;
        }
        &:active {
            background: #FFFFFF;
            opacity: .8;
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