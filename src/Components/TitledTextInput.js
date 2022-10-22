import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #666787;
  &:hover {
    background-color: #f8fafc;
  }
`;

const Titlefield = styled.div`
  color: #94a3b8;
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <Titlefield className="caption">{title}</Titlefield>
    );
  return (
    <div className="d-flex flex-column gap-1">
      {Title}
      <Input className="py-2 ps-3" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
