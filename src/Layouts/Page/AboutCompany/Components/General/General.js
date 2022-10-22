import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
import styled from "styled-components";

const CompanyBlock1 = styled.div`
  background: #;
  width: 500px;
  padding: 0px 40px;
  margin: 5px 0px 15px 30px;
`;


function General() {
    return (
         <CompanyBlock1 className="d-inline-flex flex-column justify-content-between gap-2 mt-4">
        <div className='d-inline-flex flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </div>
        </CompanyBlock1>
    );
}



export default General;