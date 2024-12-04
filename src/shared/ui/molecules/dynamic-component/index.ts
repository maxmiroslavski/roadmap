"use client";

import dynamic from "next/dynamic";
import { SkeletonLoader } from "../loader";

export const DynamicComponentWithLoader = dynamic(
  () =>
    import("./dynamic-component").then(
      ({ DynamicComponent }) => DynamicComponent
    ),
  {
    ssr: false,
    loading: SkeletonLoader,
  }
);
