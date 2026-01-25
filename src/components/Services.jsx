import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { useTranslation } from "../hooks/useTranslation";

const ServicesTimeline = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t.services_section.general_title,
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt={t.services_section.general_title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.general_p1}
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.general_p2}
            </p>
          </div>
          <Link
            to="/general-dentistry"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            {t.services_section.learn_more}
          </Link>
        </div>
      ),
    },
    {
      title: t.services_section.cosmetic_title,
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
              alt={t.services_section.cosmetic_title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.cosmetic_p1}
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.cosmetic_p2}
            </p>
          </div>
          <Link
            to="/cosmetic-whitening"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            {t.services_section.learn_more}
          </Link>
        </div>
      ),
    },
    {
      title: t.services_section.specialized_title,
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt={t.services_section.specialized_title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.specialized_p1}
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              {t.services_section.specialized_p2}
            </p>
          </div>
          <Link
            to="/specialized-care"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            {t.services_section.learn_more}
          </Link>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="services"
      className="min-h-screen w-full bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </motion.section>
  );
};

export default ServicesTimeline;
