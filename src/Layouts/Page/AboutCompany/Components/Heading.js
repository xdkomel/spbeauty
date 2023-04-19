import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div class="container">
            <div class="row my-5">
                <div class="col-4">
                    <div className='d-flex ms-3'>
                    <h1 className='large-title'>
                        Данные о компании
                        </h1>
                    </div>
                </div>
                <div class="col-2">
                    
                </div>
                <div class="col-2">

                </div>
                <div class="col-3">
                    <SecondaryButton>

                        Закрыть запись
                        
                     </SecondaryButton>
            </div>
        </div>
        </div>
    );
}

export default Heading;