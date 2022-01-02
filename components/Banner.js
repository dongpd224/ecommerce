import * as Img from "./Image"
import style from '../styles/Banner.module.css'
import Image from "next/image"
function Banner() {
    return (
        <div className={`container ${style.banner} d-flex justify-content-center`}>
            <div className="row justify-content-between">
                <div className={`${style.left_banner} col-lg-8 col-md-12 d-flex justify-content-center`}>
                    <Image src={Img.LeftBanner} alt="left banner" />
                </div>
                <div className={`${style.right_banner} col-lg-4 col-md-12 d-flex justify-content-center`}>
                    <Image src={Img.RightBanner} alt="right banner" />
                </div>
            </div>

        </div>
    )
}
export default Banner