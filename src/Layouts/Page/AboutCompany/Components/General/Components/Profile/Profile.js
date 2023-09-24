import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="mb-1" style={{color:"#64748B"}}>Салон красоты</div>
                <div style={{color:"#64748B"}}> Санкт-Петербург, Невский пр-т. 28</div>            </div>                  
        </div>
    );
}

export default Profile;