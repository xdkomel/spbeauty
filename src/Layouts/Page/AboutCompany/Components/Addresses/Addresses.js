import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";



function Addresses() {
    return (
        <div className='d-flex flex-column justify-content-between gap-2 mt-4 border py-4 rounded-2'>
        <div className='d-flex flex-column gap-4'>
            <div className='title px-4'>Адреса заведений</div>
            <div className='d-flex flex-column justify-content-between gap-3 ps-2 pe-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>    
            </div>
            
        </div>
        <div className='px-4'><SecondaryButton>Добавить филиал</SecondaryButton></div>
       </div>
    );
}

export default Addresses;