"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const projects = [
  {
    title: "TeknoLink",
    year: "2023",
    description: `An application designed to connect students with various activities and communities organized within the campus and partner industries. This project won the university Pitch Perfect competition.`,
    technologies: [
      "HTML",
      "CSS",
      "SQL",
      "Python",
      "JavaScript",
      "Unity3D (Android application)",
    ],
    media: ["/images/teknolink-1.jpg", "/images/teknolink-2.jpg"],
  },
  {
    title: "Novel 3D Plant Point Cloud Segmentation Approach",
    year: "2022",
    description: `A thesis project tool to enhance research in 3D plant phenotyping, saving 80%-90% of the workload.`,
    technologies: ["Python", "PyQT", "TensorFlow"],
    media: ["/images/plant-1.jpg", "/images/plant-2.jpg"],
  },
  {
    title: "Japanese Language Conversation Partner",
    year: "Ongoing",
    description: `An AI-powered app to help learners of Japanese practice conversations, analyze Japanese sentences, and quiz vocabulary.`,
    technologies: ["Python", "Flask", "Next.js", "MongoDB", "TailwindCSS"],
    media: ["/images/japan-1.jpg", "/images/japan-2.jpg"],
  },
];

export default function ProjectCarousel() {
  // Refs for navigation buttons
  const mainPrevRef = useRef(null);
  const mainNextRef = useRef(null);
  const mediaPrevRef = useRef(null);
  const mediaNextRef = useRef(null);

  return (
    <section className="py-16 bg-base">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Personal Projects
        </h2>

        {/* Main Project Carousel */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: mainPrevRef.current,
              nextEl: mainNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = mainPrevRef.current;
              swiper.params.navigation.nextEl = mainNextRef.current;
            }}
            modules={[Navigation]}
            pagination={{ clickable: true }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left: Media Carousel */}
                  <div className="relative carousel-container">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        prevEl: mediaPrevRef.current,
                        nextEl: mediaNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = mediaPrevRef.current;
                        swiper.params.navigation.nextEl = mediaNextRef.current;
                      }}
                      modules={[Navigation]}
                    >
                      {project.media.map((image, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={image}
                            alt={`${project.title} media`}
                            className="rounded-lg shadow-md"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Media Carousel Arrows */}
                    <button
                      ref={mediaPrevRef}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-500 text-white px-3 py-2 rounded-full"
                    >
                      &#8592;
                    </button>
                    <button
                      ref={mediaNextRef}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-500 text-white px-3 py-2 rounded-full"
                    >
                      &#8594;
                    </button>
                  </div>

                  {/* Right: Project Info */}
                  <div className="project-details">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <span className="block text-secondaryText mb-4">
                      {project.year}
                    </span>
                    <p className="text-neutral mb-6">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-secondary text-white px-4 py-1 mr-2 mb-2 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Carousel Arrows */}
          <button
            ref={mainPrevRef}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl bg-primary text-white px-3 py-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            ref={mainNextRef}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-primary text-white px-3 py-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
