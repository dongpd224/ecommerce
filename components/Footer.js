import style from '../styles/Footer.module.css'
import Image from 'next/image'
import * as Icons from './Icon'
function Footer() {
    return (
        <>
            <div className={style.footer}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 d-none d-xl-block'>
                            <div className={style.footer_heading}>Hỗ trợ khách hàng</div>
                            <p className={style.hotline}>Hotline: <span className={style.hotline_tel}>1900-6035</span><p>(1000 đ/phút, 8-21h kể cả T7, CN)</p></p>
                            <span className={style.small_text}>Các câu hỏi thường gặp</span>
                            <span className={style.small_text}>Gửi yêu cầu hỗ trợ</span>
                            <span className={style.small_text}>Hướng dẫn đặt hàng</span>
                            <span className={style.small_text}>Phương thức vận chuyển</span>
                            <span className={style.small_text}>Chính sách đổi trả</span>
                            <span className={style.small_text}>Hướng dẫn trả góp</span>
                            <span className={style.small_text}>Chính sách hàng nhập khẩu</span>
                        </div>
                        <div className='col-lg-3 d-none d-xl-block'>
                            <div className={style.footer_heading}>Về Tiki</div>
                            <span className={style.small_text}>Giới thiệu Tiki</span>
                            <span className={style.small_text}>Tuyển dụng</span>
                            <span className={style.small_text}>Chính sách bảo mật thanh toán</span>
                            <span className={style.small_text}>Chính sách bảo mật thông tin cá nhân</span>
                            <span className={style.small_text}>Chính sách giải quyết khiếu nại</span>
                            <span className={style.small_text}>Điều khoản sử dụng</span>
                            <span className={style.small_text}>Giới thiệu Tiki Xu</span>
                            <span className={style.small_text}>Tiếp thị liên kết cùng Tiki</span>
                            <span className={style.small_text}>Bán hàng doanh nghiệp</span>
                        </div>
                        <div className='col-lg-3 d-none d-xl-block'>
                            <div className={style.footer_heading}>Hợp tác và liên kết</div>
                            <span className={style.small_text}>Quy chế hoạt động Sàn GDTMĐT</span>
                            <span className={style.small_text}>Bán hàng cùng Tiki</span>
                            <div className={style.footer_heading}>Chứng nhận bởi</div>
                            <div className={`d-flex flex-wrap ${style.certificate}`}>
                                <Image
                                    src={Icons.BoCongThuong2}
                                    alt="BoCongThuong2"
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src={Icons.BoCongThuong1}
                                    alt="BoCongThuong1"
                                    width={83}
                                    height={32}
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 d-none d-xl-block'>
                            <div className={style.footer_heading}>Kết nối với chúng tôi</div>
                            <div className={`d-flex flex-wrap ${style.images}`}>
                                <Image
                                    src={Icons.SocialFacebook}
                                    alt="SocialFacebook"
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src={Icons.Youtube}
                                    alt="Youtube"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className={`${style.footer_heading} mt-4`}>Tải ứng dụng trên điện thoại</div>
                            <div className={`d-flex flex-wrap ${style.images}`}>
                                <Image
                                    src={Icons.QRCode}
                                    alt="QRCode"
                                    width={80}
                                    height={80}
                                />
                                <div className={`${style.apps_store}`}>
                                   <Image
                                        src={Icons.AppStore}
                                        alt="AppStore"
                                        width={122}
                                        height={36.406}
                                    />
                                      <Image
                                        src={Icons.PlayStore}
                                        alt="AppStore"
                                        width={122}
                                        height={36.406}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer