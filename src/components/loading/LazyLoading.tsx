import React, { lazy, Suspense } from "react";

const LazyLoadingComponent = lazy(() => import("./Loading"));

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoadingComponent />}>
        <LazyLoadingComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
