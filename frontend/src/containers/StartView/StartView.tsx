import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { GradientCanvas } from "./GradientCanvas/GradientCanvas";

export const StartView = () => {
  return (
    <section className="relative">
      <GradientCanvas />

      <div className="absolute flex flex-col items-center gap-y-14 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.h1
          className="text-7xl pointer-events-none text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 75,
            damping: 10,
          }}
        >
          Renshuu - flashcards learning app
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
            type: "spring",
            stiffness: 75,
            damping: 10,
          }}
        >
          <Button asChild className="text-xl" size="lg">
            <Link to="/vocabulary">Start learning</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
