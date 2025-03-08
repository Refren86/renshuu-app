import { AnimatePresence, motion } from "framer-motion";

type SpringModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const SpringDialog = ({ children, isOpen, onClose }: SpringModalProps) => {
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
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
