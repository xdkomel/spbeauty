import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: 1px solid rgba(226, 232, 240);
    background-color: rgba(248, 250, 252);
    border-radius: 24px;
    color: rgba(15, 23, 42);
    &:hover {
        opacity: 0.8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;