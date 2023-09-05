import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";
import React from "react";

interface CustomButtonProps {
  input: string;
  size: ButtonSize;
  iconSide?: "left" | "right";
  fill: "black" | "white" | "transparent";
  rounded?: boolean;
  underline?: boolean;
  border?: boolean;
  iconType?: "arrow" | "ChevronDown";
  onclick?: () => void;
}

type ButtonSize = "textL" | "textXL" | "xsmall" | "small" | "medium" | "large" | "xlarge";

const CustomButton: React.FC<CustomButtonProps> = ({
  input,
  size,
  iconSide,
  fill,
  rounded = false,
  underline = false,
  border = false,
  iconType,
  onclick,
}) => {
  const getBackgroundColor = () => {
    switch (fill) {
      case "black":
        return "bg-black-900 text-white-900";
      case "white":
        return "bg-white-100 text-black-900";
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
      default:
        return null;
    }
  };

  const commonStyles = {
    backgroundColor: getBackgroundColor(),
    isRounded: rounded ? "rounded-3xl" : "rounded-none",
    border: border ? "border border-black-900" : "border-none",
    iconColor: fill === "black" ? "white" : "black",
    underline: underline ? "underline" : "no-underline",
  };

  const sizeStyles: Record<
    ButtonSize,
    { buttonSize: string; iconSize: number }
  > = {
    textL: { buttonSize: "w-auto h-auto px-0 py-0  gap-2 text-xl", iconSize: 18 },
    textXL: { buttonSize: "w-auto h-auto px-0 py-0  gap-2 text-2xl", iconSize: 18 },
    xsmall: { buttonSize: "w-40 h-10 px-5 py-2 gap-0.5 text-sm", iconSize: 18 },
    small: { buttonSize: "w-44 h-11 px-6 py-2 gap-1 text-base", iconSize: 20 },
    medium: { buttonSize: "w-52 h-12 px-6 py-2.5 gap-1 text-lg", iconSize: 24 },
    large: { buttonSize: "w-72 h-16 px-11 py-5 gap-2 text-xl", iconSize: 28 },
    xlarge: { buttonSize: "w-80 h-20 px-14 py-5 gap-2 text-2xl", iconSize: 32 },
  };

  const currentSize = sizeStyles[size] || sizeStyles.small;
  const IconComponent = getIconComponent();

  return (
    <button
      className={`${currentSize.buttonSize} ${commonStyles.backgroundColor} ${commonStyles.underline} ${commonStyles.isRounded} inline-flex justify-center items-center`}
    >
      {iconSide === "left" && IconComponent && (
        <IconComponent
          color={commonStyles.iconColor}
          size={currentSize.iconSize}
        />
      )}
      {input}
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
