import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-primary text-3xl font-heading text-center mb-8">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Project 1: TeknoLink */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            {/* Project Image */}
            <img
              src="/images/teknolink.png"
              alt="TeknoLink Project"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-heading text-neutral mb-2">
              TeknoLink (2023)
            </h3>
            <p className="text-secondaryText mb-4">
              An app designed to connect students with activities and
              communities within campus and partner industries. It won the
              university Pitch Perfect competition for its concept and
              gamification features.
            </p>
            <div className="flex space-x-4 mb-4">
              {/* Tech Stack */}
              <span className="text-sm text-primary">HTML</span>
              <span className="text-sm text-primary">CSS</span>
              <span className="text-sm text-primary">SQL</span>
              <span className="text-sm text-primary">Python</span>
              <span className="text-sm text-primary">Unity3D</span>
            </div>
            <a href="#" className="text-secondary hover:underline">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2: 3D Plant Segmentation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            {/* Project Image */}
            <img
              src="/images/plant-segmentation.png"
              alt="3D Plant Segmentation"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-heading text-neutral mb-2">
              3D Plant Point Cloud Segmentation (2022)
            </h3>
            <p className="text-secondaryText mb-4">
              A thesis project that segments 3D plant point clouds of Maize and
              Tomato plants, saving 80-90% of the workload in creating labeled
              sets while maintaining competitive accuracy.
            </p>
            <div className="flex space-x-4 mb-4">
              {/* Tech Stack */}
              <span className="text-sm text-primary">Python</span>
              <span className="text-sm text-primary">PyQT</span>
              <span className="text-sm text-primary">TensorFlow</span>
            </div>
            <a href="#" className="text-secondary hover:underline">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3: Japanese Language Conversation Partner */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            {/* Project Image */}
            <img
              src="/images/japanese-partner.png"
              alt="Japanese Language Partner"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-heading text-neutral mb-2">
              Japanese Language Conversation Partner (Ongoing)
            </h3>
            <p className="text-secondaryText mb-4">
              An AI-based project providing a conversation partner for Japanese
              learners with features like real-time feedback, vocabulary saving,
              and quizzes.
            </p>
            <div className="flex space-x-4 mb-4">
              {/* Tech Stack */}
              <span className="text-sm text-primary">Python</span>
              <span className="text-sm text-primary">Flask</span>
              <span className="text-sm text-primary">Next.js</span>
              <span className="text-sm text-primary">MongoDB</span>
              <span className="text-sm text-primary">TailwindCSS</span>
            </div>
            <a href="#" className="text-secondary hover:underline">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
