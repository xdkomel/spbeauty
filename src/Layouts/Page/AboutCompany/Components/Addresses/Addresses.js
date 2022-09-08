import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
  return (
    <div className="d-inline-flex flex-column gap-3 justify-content-between mt-2 col border border-secondary rounded px-4 py-4">
        <div className="title">Адреса заведений</div>
        <div className="d-flex flex-column my-4 gap-3">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
          </div>
          <div className="mt-auto gap-5 pt-5 px-1 pb-2">
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    </div>
  );
}

export default Addresses;
