import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { GradientCanvas } from "./GradientCanvas/GradientCanvas";

export const HomeView = () => {
  return (
    <section className="relative">
      <GradientCanvas />

      <div className="absolute flex flex-col items-center gap-y-14 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.h1
          className="text-7xl pointer-events-none"
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
          練習アプリ
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
            <Link to="/vocabulary">単語学習を始める</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
