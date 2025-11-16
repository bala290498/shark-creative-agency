"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  description?: string;
}

export const Timeline = ({ data, heading, description }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-gray-900 max-w-4xl">
          {heading || 'Our Journey & Achievements'}
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-sm">
          {description || 'Explore our portfolio and the milestones we\'ve achieved along the way.'}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-0 md:left-0 w-10 rounded-full bg-white flex items-center justify-center z-50">
                <div className="h-4 w-4 rounded-full bg-secondary-500 border-2 border-secondary-500" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-lg md:text-2xl font-bold text-secondary-500">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm md:text-base text-gray-600 mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-12 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4 text-left">
                <h3 className="text-xl font-bold text-secondary-500">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[19px] md:left-[19px] top-0 overflow-hidden w-[2px] bg-gray-200 z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-secondary-500 via-secondary-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

