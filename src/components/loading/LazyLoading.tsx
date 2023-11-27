import React, { lazy, Suspense } from "react";
import Loading from "./Loading";

const LazyLoadingComponent = lazy(() => import("./Loading"));

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyLoadingComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
