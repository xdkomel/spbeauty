import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
  return (
    <div className="d-flex flex-grow-1 flex-row justify-content-between mt-5">
      <h1 className="large-title">Данные о компании</h1>
      <SecondaryButton>Закрыть запись</SecondaryButton>{" "}
      {/* праймари замена на секондари */}
    </div>
  );
}

export default Heading;