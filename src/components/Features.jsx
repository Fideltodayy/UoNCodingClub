import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-white shadow-md p-4 rounded-lg text-center">
    <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="p-8 md:p-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        What we Build!
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Project 1"
          description="Innovative projects to solve real-world problems."
        />
        <FeatureCard
          title="Project 2"
          description="Community-driven initiatives for skill-building."
        />
        <FeatureCard
          title="Project 3"
          description="Collaborative events and workshops."
        />
      </div>
    </section>
  );
};

export default Features;
