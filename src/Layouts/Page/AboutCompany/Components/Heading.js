//import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
import styled from "styled-components";

const CompanyBlock1 = styled.div`
  background: #;
  width: 1060px;
  padding: 5px 10px 15px 20px;
  margin: 5px 0px 15px 50px;
`;

function Heading() {
  return (
    <CompanyBlock1 className="d-inline-flex flex-column justify-content-between gap-2 mt-4">
    <div className="d-flex flex-row justify-content-between mt-5">
      <h1 className="large-title">Данные о компании</h1>
      <SecondaryButton>Закрыть запись</SecondaryButton>
    </div>
         </CompanyBlock1>
  );
}

export default Heading;
