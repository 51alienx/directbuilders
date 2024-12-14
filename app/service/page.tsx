import React from "react";
import Image from "next/image";
import image1 from "../images/vecteezy_businessman-and-engineer-looking-at-a-building-blueprint-at_2439959.jpg"
import image2 from "../images/vecteezy_the-site-is-under-construction-a-large-building-with-a_5205495.jpg"
import image3 from "../images/vecteezy_three-experts-inspect-commercial-building-construction_10110701.jpg"
import image4 from "../images/vecteezy_two-architects-working-on-building-project_1227248.jpg"


const services = [
  {
    title: "Residential Construction",
    description:
      "We specialize in designing and building modern homes, apartments, and villas tailored to your needs.",
    image: image1, // replace with your image path
  },
  {
    title: "Commercial Construction",
    description:
      "Our expertise includes office buildings, retail spaces, and industrial warehouses, ensuring functionality and aesthetics.",
    image: image2, // replace with your image path
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform your space with our top-notch renovation and remodeling services, blending style with practicality.",
    image: image3, // replace with your image path
  },
  {
    title: "Infrastructure Development",
    description:
      "From roads to bridges, we contribute to building the backbone of modern cities with precision and quality.",
    image:image4, // replace with your image path
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Our Services
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We offer a wide range of construction services to meet the needs of our clients. Whether you&aposre building a new home, revamping your workspace, or developing infrastructure, we are here to deliver excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-darkText mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;