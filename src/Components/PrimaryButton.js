import Clickable from "./Clickable";
import styled from "styled-components";

function PrimaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    background: #3b82f6;
    border: 1px solid #3b82f6;
    border-radius: 24px;
    min-width: ${minWidth};
    color: white;
    &:hover {
      background: linear-gradient(180deg, #3b82f6 100%, #ffffff3B82F6 100%);
    }
    &:active {
      background: #ffffff;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default PrimaryButton;
