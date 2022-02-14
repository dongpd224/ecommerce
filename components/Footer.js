import style from '../styles/Footer.module.css'
function Footer() {
    return (
        <>
            <div className={style.footer}>
                <div className='container-fluid'>
                    <div className='row'>
                       <div className='col-lg-3 d-none d-xl-block'>
                           <div className={style.footer_heading}>Hỗ trợ khách hàng</div>
                       </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer