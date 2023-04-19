import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;
    color: #0F172A;
    font-size: 15px;
    width: 447px;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div>

        </div>) : 
        (<div className='caption'>{title}

        </div>);
    return (
        <div className='d-flex flex-column gap-1'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} >
                
            </Input>
        </div>
    );
}

export default TitledTextInput;