import Slider from "react-slick";
import Image from "next/image";
import * as img from './Image'
import style from '../styles/Banner.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", margin: "0 30px 0 0" }}
            onClick={onClick}
        />
    );
}
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", margin: "0 0 0 30px", zIndex: "99" }}
            onClick={onClick}
        />
    );
}
function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    padding: "35px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <div className={`container ${style.banner} d-flex justify-content-center`}>
                <div className="row justify-content-between">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className={`${style.left_banner} col-lg-8 col-md-12`}>
                                <div className={style.left_banner__img}>
                                <Slider
                                    {...settings}
                                >
                                    <Image
                                        src={img.LeftBanner1}
                                        alt="Banner_1"
                                        width={824}
                                        height={274}
                                    />
                                    <Image
                                        src={img.LeftBanner2}
                                        alt="Banner_2"
                                        width={824}
                                        height={278}
                                    />
                                    <Image
                                        src={img.LeftBanner3}
                                        alt="Banner_3"
                                        width={824}
                                        height={274}
                                    />
                                </Slider>
                                </div>
                            </div>
                            <div className={`${style.right_banner} col-lg-4 col-md-12`}>

                                <div className={style.right_banner__img}>
                                    <Image
                                        src={'https://salt.tikicdn.com/cache/w400/ts/banner/22/3a/c1/d08f74952514ddae0cea46fea4fadd3e.png'}
                                        alt="Banner_1"
                                        width={408}
                                        height={279}
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
export default BannerSlider