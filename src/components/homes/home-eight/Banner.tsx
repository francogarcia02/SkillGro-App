"use client"
import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import InjectableSvg from "@/hooks/InjectableSvg";

import banner_img1 from "@/assets/img/banner/h8_hero_img.png"
import banner_img2 from "@/assets/img/banner/h8_hero_img_shape.svg"
import banner_img3 from "@/assets/img/others/student_grp.png"
import banner_slider1 from "@/assets/img/brand/h8_brand01.png"
import banner_slider2 from "@/assets/img/brand/h8_brand02.png"
import banner_slider3 from "@/assets/img/brand/h8_brand03.png"
import banner_slider4 from "@/assets/img/brand/h8_brand04.png"
import banner_slider5 from "@/assets/img/brand/h8_brand05.png"

const slider_data: StaticImageData[] = [banner_slider1, banner_slider2, banner_slider3, banner_slider4, banner_slider5, banner_slider3,];

const setting = {
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 5,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '768': {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
}
const Banner = () => {

    return (
        <section className="banner-area fix banner-bg-seven tg-motion-effects" style={{ backgroundImage: `url(/assets/img/banner/h8_hero_bg.jpg)` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="banner__content-seven">
                            <h2 className="title">Take Your
                                <span className="title-shape-wrap">Cooking <InjectableSvg src="/assets/img/banner/h8_hero_title_shape.svg" alt="" className="injectable" /></span>
                                Skill To The Next Level
                            </h2>
                            <p>Free & Premium online courses from the world’s Join 17 million learners today.</p>
                            <div className="slider__search banner__search">
                                <form onSubmit={(e) => e.preventDefault()} className="slider__search-form">
                                    <input type="text" placeholder="Search Here . . ." />
                                    <button type="submit">Find Courses</button>
                                </form>
                            </div>
                            <div className="banner__brand-wrap">
                                <Swiper {...setting} className="swiper-container brand-swiper-active-two">
                                    {slider_data.map((item, i) => (
                                        <SwiperSlide key={i} className="swiper-slide">
                                            <div className="brand__item-two">
                                                <Image src={item} alt="img" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-10">
                        <div className="banner__images-seven">
                            <Image src={banner_img1} alt="img" className="main-img" />
                            <div className="big_shape">
                                <InjectableSvg src="/assets/img/banner/h8_hero_img_shape02.svg" alt="" className="injectable tg-motion-effects1" />
                            </div>
                            <div className="shape" >
                                <Image src={banner_img2} alt="" className="rotateme" />
                            </div>
                            <div className="about__enrolled" data-aos="fade-right" data-aos-delay="200">
                                <p className="title"><span>36K+</span> Enrolled Students</p>
                                <Image src={banner_img3} alt="img" />
                            </div>
                            <div className="banner__all-recipe" data-aos="fade-left" data-aos-delay="200">
                                <h2 className="count">12K+</h2>
                                <span>All Recipes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
