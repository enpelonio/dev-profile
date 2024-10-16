import React from "react";

const Experience = () => {
  return (
    <div>
      <h2 className="text-primary text-3xl font-heading text-center mb-8">
        Experience
      </h2>
      <div className="flex flex-col items-center">
        <div className="relative border-l-2 border-neutral w-full max-w-3xl">
          <div className="absolute left-[-10px] w-4 h-4 bg-primary rounded-full"></div>
          <div className="mb-10 pl-6">
            <h3 className="text-secondary text-xl font-semibold">
              Alliance Software Incorporated
            </h3>
            <h4 className="text-neutral text-lg font-medium">
              Associate Technical Specialist
            </h4>
            <p className="text-secondaryText text-sm mb-2">2022 - 2024</p>
            <p className="text-neutral mb-2">
              <strong>Project Development:</strong> Contributed to the design
              and implementation of key projects, including a Web Human Resource
              Management System (HRMS), Point of Sale (POS) applications, and
              finance-related software solutions, utilizing a range of
              technologies.
            </p>
            <p className="text-neutral mb-2">
              <strong>Technology Stack:</strong> Worked extensively with C#.NET,
              AngularJS, PHP Laravel, Python, and various relational databases.
              Developed and optimized stored procedures to enhance application
              performance.
            </p>
            <p className="text-neutral mb-2">
              <strong>Team Leadership:</strong> Played a lead role in guiding
              and mentoring new hires, fostering a collaborative environment to
              enhance team productivity and knowledge sharing.
            </p>
            <p className="text-neutral mb-2">
              <strong>User Communication:</strong> Engaged directly with users
              to gather feedback and requirements, ensuring that solutions met
              their needs and aligned with business objectives.
            </p>
            <p className="text-neutral mb-2">
              <strong>Performance Recognition:</strong> Achieved two promotions
              for outstanding performance and contributions to project success.
              Demonstrated adaptability and commitment to excellence, with a
              third promotion pending at the time of resignation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
