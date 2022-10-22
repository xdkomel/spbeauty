import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div`
  outline: 1px;
  color: #0f172a;
  border-radius: 0px;
  border: solid px;
  background-color: #;
  color: #0f172a;
`;

const EditIconWrapper = styled.div`
  background: #ffffff;
  border-radius: 24px;
  color: #152842;
  &:hover {
    background: linear-gradient(180deg, #ffffff 100%, #ffffff 100%);
  }
  &:active {
    background: #ffffff;
  }
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch gap-2">
      <Option className="flex-grow-1 p-2">{props.children}</Option>
      <EditIconWrapper minWidth="0">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<EditIcon />} />
      </EditIconWrapper>
      <EditIconWrapper minWidth="0">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<RemoveIcon />} />
      </EditIconWrapper>
    </div>
  );
}

export default ListElement;
