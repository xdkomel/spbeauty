import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 24px;
    color: color: #94A3B8;
    width: 100%;
    &:hover {
        background: background: #F8FAFC; opacity: 0.8; border: 1px solid #E2E8F0 ;border-radius: 24px;
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    box-sizing:border-box;
    right: 0px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='p-2' placeholder='Найти на странице...'/>
            <SearchIconWrapper className='p-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;