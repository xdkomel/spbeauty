import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
   

<div class="container">
  <div>
    <Heading/> {/* Заголовок и кнопка справа */}
    <div class="d-flex mt-5 flex-wrap">
      <div class="col-md-6">
        <General/>  {/* Основная информация вроде названия, типа и телефона */}
      </div>
      <div class="col-md-6">
        <Addresses/> {/* Список доступных адресов заведений */}
      </div>
    </div>
  </div>
</div>
    );
}

export default AboutCompany;