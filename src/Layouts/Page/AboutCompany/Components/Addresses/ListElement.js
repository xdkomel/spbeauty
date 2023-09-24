import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
outline: none;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <IconOnlyButton icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>}/>
        <IconOnlyButton icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>}/>
        </div>
    );
}

export default ListElement;