import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';

const Option = styled.div`
    outline: none;
    font-size: 15px;
    color: #666787;
`;
const Iconic = styled.div`
    outline: none;
    color: #666787;
`;

const Str = styled.div`
    outline: none;
    color: #666787;
`;
function ListElement(props) {
    return (
        <Str className='d-flex flex-row align-items-center me-2'>
            <Option className='flex-grow-1 px-4 py-3 mb-2'>{
            props.children}
            </Option>
            <Iconic className='d-flex justify-content-between px-3 pt-3 pb-3 mb-2 gap-1'>  
                <EditIcon>
                    Ред.

                </EditIcon>
                <RemoveIcon>
                    Удл.

                </RemoveIcon>
            </Iconic>  
        </Str>
    );
}

export default ListElement;