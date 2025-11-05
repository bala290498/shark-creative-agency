"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Shark Creative Agency transformed our brand identity completely. Their innovative design approach and attention to detail exceeded all our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9f29fee537?w=100&h=100&fit=crop",
    name: "Priya Sundaram",
    role: "CEO, TechStart Inc.",
  },
  {
    text: "Working with Shark Creative Agency was a game-changer. They delivered a stunning website that perfectly captures our brand essence and drives real business results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Ravi Krishnan",
    role: "Marketing Director",
  },
  {
    text: "The team at Shark Creative Agency is incredibly professional and creative. Their digital marketing strategies have significantly increased our online presence and conversions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Anjali Menon",
    role: "Business Owner",
  },
  {
    text: "Exceptional service from start to finish. Shark Creative Agency understood our vision and brought it to life with beautiful designs and seamless execution.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "Suresh Iyer",
    role: "Founder, InnovateCo",
  },
  {
    text: "Their creative solutions and strategic approach helped us stand out in a competitive market. The ROI from their work has been outstanding.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    name: "Kavitha Reddy",
    role: "Brand Manager",
  },
  {
    text: "Shark Creative Agency delivered beyond our expectations. Their team is talented, responsive, and truly understands how to create compelling brand experiences.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Venkat Subramanian",
    role: "Operations Director",
  },
  {
    text: "The website they created for us is not only beautiful but also highly functional. Our user engagement has increased dramatically since the launch.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    name: "Meera Nair",
    role: "E-commerce Manager",
  },
  {
    text: "Professional, creative, and results-driven. Shark Creative Agency helped us elevate our brand and connect with our audience in meaningful ways.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Arjun Menon",
    role: "CMO, GrowthCo",
  },
  {
    text: "Outstanding work from an outstanding team. They transformed our digital presence and helped us achieve our business goals with creative excellence.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
    name: "Lakshmi Venkatesh",
    role: "Product Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white my-20 relative">
      <div className="container-custom z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-gray-900">
            What our clients say
          </h2>
          <p className="text-center mt-5 text-gray-600">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] sm:max-h-[600px] md:max-h-[740px] overflow-hidden px-4">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

