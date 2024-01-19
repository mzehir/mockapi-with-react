import React from "react";
import { CardMediaComp } from "../Card";
import SkeletonComp from "../Skeleton";
import { isSkeletonActive } from "../../utils/helper/other";

const CardMediaSkeleton = (props) => {
  const { image, ...other } = props;

  return isSkeletonActive(true, image) ? (
    <SkeletonComp {...other} />
  ) : (
    <CardMediaComp image={image} {...other} />
  );
};

export default CardMediaSkeleton;
