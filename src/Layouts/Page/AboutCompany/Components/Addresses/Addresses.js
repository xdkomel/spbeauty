import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';

const Ahh = styled.div`
    border: solid 1px rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    width: 407px
`;

const Addr = styled.div`
    height: 266px;
    
`;
function Addresses() {
    return (
        <Ahh class="d-flex flex-column">
            <div class="title p-4">
                Адреса заведений
                </div>
            <Addr class="d-flex flex-column">
                    <ListElement>
                        Санкт-Петербург, Невский пр-т. 28
                        </ListElement>
                    <ListElement>
                        Санкт-Петербург, Казанская ул, 7
                        </ListElement>
            </Addr>
            <div class="d-flex p-4">
                <SecondaryButton>
                    Добавить филиал
                    </SecondaryButton>
            </div>  
        </Ahh>
    );
}

export default Addresses;