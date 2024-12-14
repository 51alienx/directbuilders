"use client";

import React from "react";
import Image from "next/image";

import image1 from "../images/vecteezy_modern-factory-design-with-dark-cityscape-and-construction_24614300.jpg"
import image2 from "../images/vecteezy_silhouette-of-engineer-looking-at-construction-site_22453386.jpg"
import image3 from "../images/vecteezy_silhouette-of-engineer-looking-at-construction-site_22453397.jpg"
const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    description: "A state-of-the-art skyscraper in downtown Singapore.",
    image: image1,
  },
  {
    id: 2,
    title: "Eco Park",
    description: "A green initiative housing project blending nature with modern living.",
    image: image2,
  },
  {
    id: 3,
    title: "City Square Mall",
    description: "A premium commercial space with modern amenities.",
    image: image3,
  },
];

const ProjectCompletedPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">
          Projects Completed
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          At Direct Builders Pte Ltd, we are proud to showcase our portfolio of completed projects that highlight our commitment to quality, sustainability, and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCompletedPage;