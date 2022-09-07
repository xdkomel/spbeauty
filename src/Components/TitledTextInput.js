import styled from "styled-components";

const Input = styled.input`
    outline: none;
    background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 24px;
    color: #666787;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        <div className="caption color-steel-grey-400"> {title}
         </div>
         
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;