import iconsMap from "./iconsMap";
import iconsData from "../data/iconsData.json";
import type { IconType } from "react-icons";

type IconsMapType = typeof iconsMap;

export function getTechIconProps(technology: string) {
  const key = technology.toLowerCase();
  const IconComponent: IconType =
    (iconsMap as IconsMapType)[key as keyof IconsMapType] || iconsMap.default;

  const iconInfo = iconsData.find((icon) => icon.iconId.toLowerCase() === key);
  const color = iconInfo?.iconColor || "#bdbdbd";
  const hoverColor = iconInfo?.iconHoverColor || "#888";

  return { IconComponent, color, hoverColor };
}
