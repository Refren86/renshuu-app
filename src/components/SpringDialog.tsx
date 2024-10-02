import { CircleAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./ui/button";

type SpringModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const SpringDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: SpringModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-red-800 to-red-200 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-10">
              Alert
            </div>

            <div className="relative z-10">
              <div className="bg-red-700 size-12 mb-2 rounded-full text-3xl grid place-items-center mx-auto">
                <CircleAlert className="size-8" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Are you sure?
              </h3>
              <p className="text-center mb-6">
                If you confirm the action, the word will be removed permanently
                together with all it's progress data.
              </p>
              <div className="flex justify-center gap-2">
                <Button variant="secondary" onClick={onClose}>
                  Nah, go back
                </Button>

                <Button variant="destructive" onClick={onConfirm}>
                  Yes, delete
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};