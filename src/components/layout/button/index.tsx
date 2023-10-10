import {
  IconArrowRight,
  IconChevronDown,
  IconHeart,
  IconAdjustmentsHorizontal,
  IconHelpCircle,
  IconShare,
  IconTrash
} from "@tabler/icons-react";
import React from "react";

interface CustomButtonProps {
  label?: string;
  size: ButtonSize;
  buttonType?: ButtonType;
  iconSide?: "left" | "right";
  fill?: FillType;
  rounded?: boolean;
  underline?: boolean;
  border?: boolean;
  iconType?: IconType;
  onClick?: () => void;
  className?: string;
}

type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
type ButtonType = "default" | "square" | "circle" | "text";
type FillType = "black" | "white" | "transparent" | "gray";
type IconType =
  | "arrow"
  | "ChevronDown"
  | "heart"
  | "help"
  | "share"
  | "trash"
  | "settings";

type RoundedType = "rounded" | "rounded-full" | "rounded-3xl";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  size,
  iconSide,
  buttonType = "default",
  fill,
  rounded = false,
  underline = false,
  border = false,
  iconType,
  onClick,
  className,
}) => {
  const getBackgroundColor = () => {
    switch (fill) {
      case "black":
        return "bg-black-900 text-white-900";
      case "white":
        return "bg-white-100 text-black-900";
      case "gray":
        return "bg-black-100  text-black-900";
      default:
        return "bg-transparent text-black-900";
    }
  };

  const getIconComponent = () => {
    switch (iconType) {
      case "arrow":
        return IconArrowRight;
      case "ChevronDown":
        return IconChevronDown;
      case "heart":
        return IconHeart;
      case "help":
        return IconHelpCircle;
      case "share":
        return IconShare;
      case "settings":
        return IconAdjustmentsHorizontal;
      case "trash":
        return IconTrash;
      default:
        return null;
    }
  };

  const commonStyles = {
    backgroundColor: getBackgroundColor(),
    isRounded: rounded ? "rounded-3xl" : "",
    border: border ? "border" : "",
    iconColor: fill === "black" ? "white" : "black",
    underline: underline ? "underline" : "",
  };

  const sizeStyles = {
    default: {
      xsmall: { styles: "w-auto h-10 px-5 py-2 gap-0.5 text-sm", iconSize: 18 },
      small: {
        styles: "w-auto h-11  px-6 py-2 gap-1  text-base",
        iconSize: 22,
      },
      medium: {
        styles: "w-full h-12 px-6 py-2.5 gap-1  text-lg",
        iconSize: 26,
      },
      large: { styles: "w-auto h-16  px-11 py-5 gap-2 text-xl", iconSize: 30 },
      xlarge: {
        styles: "w-auto h-20  px-14 py-5 gap-2 text-2xl",
        iconSize: 34,
      },
    },
    square: {
      xsmall: { styles: `w-10 h-10  rounded text-sm`, iconSize: 18 },
      small: { styles: "w-11 h-11 text-base", iconSize: 28 },
      medium: { styles: "w-18 h-18 text-lg", iconSize: 32 },
      large: { styles: "w-24 h-24 text-xl", iconSize: 40 },
      xlarge: { styles: "w-32 h-32 text-2xl", iconSize: 44 },
    },
    circle: {
      xsmall: { styles: "w-10 h-10 text-sm rounded-full", iconSize: 18 },
      small: { styles: "w-14 h-14 text-base rounded-full", iconSize: 28 },
      medium: { styles: "w-18 h-18 text-lg rounded-full", iconSize: 32 },
      large: { styles: "w-24 h-24 text-xl rounded-full", iconSize: 40 },
      xlarge: { styles: "w-32 h-32 text-2xl rounded-full", iconSize: 44 },
    },
    text: {
      xsmall: { styles: "w-auto h-auto gap-0.5 text-xs", iconSize: 18 },
      small: { styles: " w-auto h-auto gap-1 text-sm", iconSize: 22 },
      medium: { styles: "w-auto h-auto gap-1 text-base", iconSize: 26 },
      large: { styles: "w-auto h-auto  gap-2 text-xl", iconSize: 30 },
      xlarge: { styles: "w-auto h-auto gap-2 text-2xl", iconSize: 34 },
    },
  };

  const currentSize = sizeStyles[buttonType][size];
  const IconComponent = getIconComponent();

  return (
    <button onClick={onClick}
      className={` ${className} ${currentSize.styles}  ${commonStyles.border} ${commonStyles.backgroundColor} ${commonStyles.underline} ${commonStyles.isRounded} inline-flex justify-center items-center`}
    >
      {iconSide === "left" && IconComponent && (
        <IconComponent
          color={commonStyles.iconColor}
          size={currentSize.iconSize}
        />
      )}
      {label}
      {iconSide === "right" && IconComponent && (
        <IconComponent
          color={commonStyles.iconColor}
          size={currentSize.iconSize}
        />
      )}
    </button>
  );
};

export default CustomButton;
