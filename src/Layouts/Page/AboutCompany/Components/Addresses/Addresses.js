import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
<span class="border border-1 border-radius: 24px"></span>
function Addresses() {
    return (
        <div className='d-inline-flex justify-content-between flex-column gap-4 mx-4 mt-4 p-4 col border rounded-2'>
            <div className='title'>Адреса заведений
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div>
        <div className='d-inline-flex flex-column'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;