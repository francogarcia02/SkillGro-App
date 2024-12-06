"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import Overview from "./Overview";
import Curriculum from "./Curriculum"
import Reviews from "./Reviews"
import Instructors from "./Instructors"
import RelatedVideos from "./RelatedVideos";
import UseCourses from "@/hooks/UseCourses";

import course_details_img2 from "@/assets/img/courses/course_author001.png"

const tab_title: string[] = ["Overview", "Curriculum", "Instructors", "reviews"];

const CourseDetailsArea = ({ id }: any) => {
    const {courses} = UseCourses()
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: any) => {
      setActiveTab(index);
    };
    const single_course = courses.find((item) => Number(item.id) === Number(id));

    return (
    <section className="courses__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="w-full">
            <div className="w-full courses__details-thumb">
              <Image src={single_course?.thumb || ''} alt="img" className="" />
            </div>
            <div className="courses__details-content">
              <ul className="courses__item-meta list-wrap">
                <li className="courses__item-tag">
                  <Link href="/course">{single_course?.category ? single_course.category : "Development"}</Link>
                </li>
                <li className="avg-rating"><i className="fas fa-star"></i>{single_course?.rating ? single_course.rating : "(4.5 Reviews)"}</li>
              </ul>
              <h2 className="title">{single_course?.title ? single_course.title : "Resolving Conflicts Between Designers And Engineers"}</h2>
              <div className="courses__details-meta">
                <ul className="list-wrap">
                  <li className="author-two">
                    <Image src={course_details_img2} alt="img" />
                    By <Link href="#">{single_course?.instructors ? single_course.instructors : "David Millar"}</Link>
                  </li>
                  <li className="date"><i className="flaticon-calendar"></i>24/07/2024</li>
                  <li><i className="flaticon-mortarboard"></i>2,250 Students</li>
                </ul>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tab_title.map((tab, index) => (
                  <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
                  <Overview course={{ ...single_course, thumb: single_course?.thumb || '', category: single_course?.category || '', id: single_course?.id || 0 }}/>
                </div>
                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
                  <Curriculum />
                </div>
                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
                  <Instructors />
                </div>
                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
                  <Reviews />
                </div>
              </div>
            </div>
          </div>
          <RelatedVideos category={single_course?.category || ''} id={single_course?.id || 0}/>
        </div>
      </div>
    </section>
  )
}

export default CourseDetailsArea
