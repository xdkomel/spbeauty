import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: solid #e2e8f0 1px;
  border-radius: 24px;
  background-color: #f8fafc;
  color: #666787;
  &:hover {
    opacity: 0.8;
  }
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <div className="caption color-steel-gray--400">{title}</div>
    );
  return (
    <div className="d-flex flex-column gap-2">
      {" "}
      {/* уменьшен отступ */}
      {Title}
      <Input className="px-3 py-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;