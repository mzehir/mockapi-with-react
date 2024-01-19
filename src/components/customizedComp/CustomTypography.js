import TypographyComp from "../Typography";
import SkeletonComp from "../Skeleton";
import { isSkeletonActive } from "../../utils/helper/other";

export const StrongMinLineHeightTypography = (props) => {
  const { children, ...other } = props;
  return (
    <TypographyComp
      {...other}
      sx={{ color: "#000000", lineHeight: "1" }}
      gutterBottom
    >
      <strong>{children}</strong>
    </TypographyComp>
  );
};

export const PriceMinLineHeightTypography = (props) => {
  const { children, ...other } = props;
  return (
    <TypographyComp
      {...other}
      sx={{ color: "#2A59FE", lineHeight: "1" }}
      gutterBottom
    >
      {children}
    </TypographyComp>
  );
};

export const StrongPriceKeyTypography = (props) => {
  const { children, ...other } = props;
  return (
    <TypographyComp gutterBottom sx={{ color: "#000000" }} {...other}>
      <strong>{children}</strong>
    </TypographyComp>
  );
};

export const StrongPriceValueTypography = (props) => {
  const { children, ...other } = props;
  return (
    <TypographyComp gutterBottom sx={{ color: "#2A59FE" }} {...other}>
      <strong>{children}</strong>
    </TypographyComp>
  );
};

export const StrongXLargePriceTypography = (props) => {
  const { children, isSkeleton = true, ...other } = props;

  return isSkeletonActive(isSkeleton, children) ? (
    <SkeletonComp {...other} />
  ) : (
    <TypographyComp
      gutterBottom
      sx={{ color: "#2A59FE", fontSize: "x-large" }}
      {...other}
    >
      <strong>{children}</strong>
    </TypographyComp>
  );
};

export const StrongXLargeTypography = (props) => {
  const { children, isSkeleton = true, ...other } = props;

  return isSkeletonActive(isSkeleton, children) ? (
    <SkeletonComp {...other} />
  ) : (
    <TypographyComp
      {...other}
      sx={{ color: "#000000", fontSize: "x-large" }}
      gutterBottom
    >
      <strong>{children}</strong>
    </TypographyComp>
  );
};
