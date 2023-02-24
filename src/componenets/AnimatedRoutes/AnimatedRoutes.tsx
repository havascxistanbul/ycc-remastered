import React from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import routes from '../../routes';
import { Routes, Route, useLocation } from 'react-router-dom';

function AnimatedRoutes(): JSX.Element {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes
        location={location}
        key={location.pathname}
      >
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <m.div
              // style={{ position: 'relative' }}
              // initial={{ left: '-100vw' }}
              // animate={{ left: 0 }}
              // exit={{ left: '100vw', position: 'absolute' }}
              // transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <route.element />
              </m.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
