// import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    <div className="d-inline-flex flex-column flex-grow-1 gap-2 border rounded color:#64748B justify-content-between p-3">
      <div className="d-flex flex-column gap-4">
        <div className="title ps-2">Адреса заведений</div>
        <div className="d-inline-flex flex-column gap-3">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
      </div>
      <div className="d-inline-end align-self-start mt-auto p-2 bd-highlight">
        <SecondaryButton>Добавить филиал</SecondaryButton>{" "}
        {/*замена прайм на сек*/}
      </div>
    </div>
  );
}

export default Addresses;