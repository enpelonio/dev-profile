import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h2 className="text-4xl font-heading mb-6">About Me</h2>

      <div className="flex flex-col md:flex-row max-w-4xl w-full">
        {/* Photo */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img
            src="/images/test-profile.jpeg"
            alt="Profile Photo"
            className="w-40 h-40 rounded-full object-cover object-[200%_61%] border-2 border-primary"
          />
        </div>

        {/* Bio */}
        <div className="flex-1">
          <p className="text-lg font-body mb-4">
            As a versatile programmer, I thrive on the challenge of working with
            diverse tech stacks for full-stack development. My journey in
            software engineering began at Alliance Software Incorporated, where
            I quickly rose through the ranks to become an Associate Technical
            Specialist. I have successfully contributed to various projects,
            including Web HRMS, POS systems, and finance applications, utilizing
            technologies such as C#.NET, AngularJS, and Python. My keen
            attention to detail and ability to learn quickly have enabled me to
            coach new hires and effectively communicate with users to gather
            feedback and enhance our software solutions.
          </p>
          <p className="text-lg font-body mb-4">
            I’m passionate about leveraging technology to make a meaningful
            impact and continuously seek opportunities to expand my skill set.
            Whether it’s mastering a new programming language or exploring
            innovative development practices, I embrace learning as a lifelong
            journey.
          </p>
          <p className="text-lg font-body mb-4">
            In addition to my technical pursuits, I’m an avid language learner
            and currently studying Japanese. My fascination with the language
            inspired me to develop a personal project: a Japanese Language
            Conversation Partner app that uses AI to enhance my learning
            experience. This project reflects my commitment to overcoming
            challenges through technology and serves as a testament to my belief
            in practical, impactful software.
          </p>
          <p className="text-lg font-body mb-4">
            Outside of coding, I enjoy collaborating with others and
            participating in community events that foster innovation and
            creativity. Whether I’m pitching an idea at a university competition
            or brainstorming solutions with fellow developers, I find joy in
            connecting with others who share a passion for technology and
            growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
