import testimonials from "../../data/CommunityData";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import MainButton from "../Reusable/MainButton";

export default function MainCommunityReviews() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, initialCount);
  return (
    <div className="bg-secondary text-white text-center">
      <h3 className="text-3xl mb-2 font-bold lg:text-5xl">
        Don&rsquo;t just take our word for it
      </h3>
      <p className="text-third text-xl mb-4">
        Our users are our best ambassadors. Discover why we're the top choice
        for browsing privately.
      </p>
      <div className="grid gap-4 lg:grid-cols-3 px-4">
        {displayedTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="p-4 border-2 rounded-4xl border-third"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm">{testimonial.review}</p>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {!showAll && testimonials.length > initialCount && (
        <MainButton className="mt-6" onClick={() => setShowAll(true)}>Show More</MainButton>
      )}
    </div>
  );
}
