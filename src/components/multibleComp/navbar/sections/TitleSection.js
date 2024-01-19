import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { generalAppConfigs } from "../../../../redux/actions/generalAppConfigAction";
import TypographyComp from "../../../Typography";
import { ROUTER } from "../../../../utils/constants/routerConstant";

const TitleSection = () => {
  const navigate = useNavigate();
  const appConfigs = useSelector(generalAppConfigs);
  return (
    <TypographyComp
      variant="h6"
      noWrap
      sx={{ fontWeight: "900", cursor: "pointer" }}
      onClick={() => navigate(ROUTER.PRODUCTS.path)}
    >
      {appConfigs.appName}
    </TypographyComp>
  );
};

export default TitleSection;
