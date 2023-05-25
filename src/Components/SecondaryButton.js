import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    /* background: #F2F2F2; */
    border: 1px solid #64748b; /* цвет обводки */
    border-radius: 24px; /*закругление*/
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: ${minWidth};
    color: #152842;
    &:hover {
      opacity: 0.8; /* прозрачность на 80% при ховере */
    }
    &:active {
      background: #dfdfdf;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
