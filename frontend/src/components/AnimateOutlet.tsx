import cloneDeep from "lodash/cloneDeep";
import { forwardRef, useContext, useRef } from "react";
import { useIsPresent, motion, HTMLMotionProps } from "framer-motion";

import { Outlet, getRouterContext } from "@tanstack/react-router";

const transitionProps: HTMLMotionProps<"div"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.75 },
};

export const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
  const isPresent = useIsPresent();
  const RouterContext = getRouterContext();
  const routerContext = useContext(RouterContext);
  const renderedContext = useRef(routerContext);

  if (isPresent) {
    renderedContext.current = cloneDeep(routerContext);
  }

  return (
    <motion.div ref={ref} {...transitionProps}>
      <RouterContext.Provider value={renderedContext.current}>
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  );
});
