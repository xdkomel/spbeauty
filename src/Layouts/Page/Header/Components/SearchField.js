import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 216px;
  &:hover {
    background-color: #f8fafc;
    opacity: 0.8; /* прозрачность на 80% при ховере */
  }
`;

const Input = styled.input`
  outline: none;
  border-radius: 24px; /* изменен радиус поля */
  border: solid #e2e8f0 1px; /* изменен цвет обводки*/
  background-color: #f8fafc; /* изменен цвет фона*/
  color: #152842;
  width: 100%;

  &:focus {
    background: white;
  }
`;

const SearchIconWrapper = styled.div`
  /* background-color: #4B759E; убран фон у кнопки поиска*/
  position: absolute;
  box-sizing: border-box;
  right: 4px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {" "}
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="p-2" placeholder="Найти" />
      <SearchIconWrapper className="p-2">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;