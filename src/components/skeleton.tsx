import { ReactElement } from "react";

/* eslint-disable react/no-multi-comp
  --
  For the sake of simplicity, it is better to keep these components together.
*/
type SkeletonProps = {
    height?: string;
    width?: string;
    color?: string;
    "data-testid"?: string;
};

/**
 * @param {string} height TailwindCSS height utility class
 * @param {string} width TailwindCSS width utility class
 * @param {string} color TailwindCSS bg utility class
 * @param {string} dataTestId id for tests
 */
const Skeleton = ({
                      height = "h-4",
                      width = "w-full",
                      color = "bg-gray-300",
                      "data-testid": dataTestId
                  }: SkeletonProps): ReactElement => (
    <div
        data-testid={dataTestId}
        className={`${height} ${width} ${color} animate-pulse rounded`}
    ></div>
);

type SkeletonCircleProps = SkeletonProps;

/**
 * @param {string} height TailwindCSS height utility class
 * @param {string} width TailwindCSS width utility class
 * @param {string} color TailwindCSS bg utility class
 */
const SkeletonCircle = ({
                            height = "h-4",
                            width = "w-4",
                            color = "bg-gray-300"
                        }: SkeletonCircleProps): React.ReactElement => (
    <div className={`${height} ${width} ${color} animate-pulse rounded-full`}></div>
);

export { Skeleton, SkeletonCircle };
