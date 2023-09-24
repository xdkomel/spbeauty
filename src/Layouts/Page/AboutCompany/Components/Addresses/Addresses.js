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
              border: '1px solid #94A3B8',
              boxSizing: 'border-box',
              padding: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <div
              className='title'
              style={{
                alignSelf: 'stretch',
                marginTop: '24px',
                marginLeft: '24px',
                marginRight: '24px',
              }}
            >
              Адреса заведений
            </div>
            <ListElement style={{ flex: '1 0 0', marginTop: '24px', marginLeft: '24px', marginRight: '24px' }}>
              Санкт-Петербург, Невский пр-т. 28
            </ListElement>
            <ListElement style={{ flex: '1 0 0', marginTop: '24px', marginLeft: '24px', marginRight: '24px' }}>
              Санкт-Петербург, Казанская ул, 7
            </ListElement>
            <SecondaryButton
              style={{
                marginLeft: '24px',
                marginBottom: '24px',
                marginRight: '212px',
              }}
            >
              Добавить филиал
            </SecondaryButton>
          </div>
        );
      }
      
      export default Addresses;
      