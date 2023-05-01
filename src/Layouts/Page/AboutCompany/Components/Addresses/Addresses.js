import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex gap-4 border-adresses flex-column px-4 py-4 col justify-content-between'>
            <div className='d-flex flex-column gap-4'>
                <div className='title'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gray'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div> 
                <div className='d-inline-flex'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;
