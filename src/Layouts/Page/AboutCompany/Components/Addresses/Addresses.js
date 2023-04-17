import { TabContainer } from "react-bootstrap";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
       
<div
  className='d-inline-flex flex-column gap-2 mt-4'
  style={{
    left: '615px',
    top: '146px',
    width: '453px',
    height: '420px',
    borderRadius: '8px',
    border: '1px solid #E2E8F0    ',
    boxSizing: 'border-box',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }}
>
  <div className='title'>Адреса заведений</div>
  <div className='d-inline-flex flex-column gap-2 mt-4' style={{alignInside: 'flex-end', marginTop: 'auto'}}>
    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
    </div>
    <div className='d-inline-flex flex-column gap-2 mt-8' style={{alignInside: 'flex-end', marginTop: 'auto'}}>
    <SecondaryButton>Добавить филиал</SecondaryButton>
    </div>
  </div>
    );
}

export default Addresses;