import Link from 'next/link'
import styles from '../styles/SuggestionBar.module.css'
import Image from 'next/image'
import * as Icon from './Icon'

function SuggestionBar() {
    return (
        <div className={`container ${styles.suggestion_wrapper}`}>
            <div className={`${styles.suggestion_header}`}>
                <span>Gợi Ý Hôm Nay</span>
            </div>
            <div className={`row ${styles.suggestion_items}`}>
                <div className='col-6'>
                    <div className='row'>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.DanhChoBan} alt='Danh cho ban' width={48} height={48} />
                                <span>Dành cho bạn</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.ChiTu11k} alt='Icon' width={48} height={48} />
                                <span>Chỉ từ 11k</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.DealSieuHot} alt='Icon' width={48} height={48} />
                                <span>Deal siêu hot</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.ReVoDoi} alt='Icon' width={48} height={48} />
                                <span>Rẻ vô đối</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.DiChoSieuSale} alt='Icon' width={48} height={48} />
                                <span>Đi Chợ Siêu Sale</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.HangMoi} alt='Icon' width={48} height={48} />
                                <span>Hàng Mới</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.XuHuongThoiTrang} alt='Icon' width={48} height={48} />
                                <span>Xu Hướng Thời Trang</span>
                            </div>
                        </div>
                        <div className={`col-lg-3 col-md-6`}>
                            <div className={`${styles.suggestion_item}`}>
                                <Image src={Icon.FreeshipKhongGioiHan} alt='Icon' width={48} height={48} />
                                <span>Không Giới Hạn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuggestionBar