import React from "react";
//import HomeIcon from "@mui/icons-material/Home";
//import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
//import SummarizeIcon from "@mui/icons-material/Summarize";
//import ScreenshotIcon from "@mui/icons-material/Screenshot";
import { ReactComponent as HomeIcon } from "../images/home.svg";
import { ReactComponent as ScreenshotIcon } from "../images/screenshot.svg";
import { ReactComponent as ConfigurationIcon } from "../images/configuration.svg";
import { ReactComponent as ReportIcon } from "../images/reporting.svg";

interface SidebarItem {
  title: string;
  icon: JSX.Element;
  link: string;
}
export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Capture",
    icon: <ScreenshotIcon />,
    link: "/capture",
  },
  {
    title: "Hardware",
    icon: <ConfigurationIcon />,
    link: "/hardware",
  },
  {
    title: "Report",
    icon: <ReportIcon />,
    link: "/report",
  },
];
