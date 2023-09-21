import { IconX } from "@tabler/icons-react";

interface BadgeProps {
  size: BadgeSize;
  fill?: FillType;
  rounded?: RoundedType;
  badgeType?: BadgeType;
  label?: string;
  iconSide?: "left" | "right";
  onClick?: () => void;
  className?: string;
}

type BadgeSize = "small" | "medium" | "large";
type FillType = "black" | "white" | "gray" | "transparent";
type RoundedType = "rounded" | "rounded-full" | "rounded-none";
type BadgeType = "default" | "circle";
type SizeStyleType = {
  styles: string;
  iconSize: number;
};

const CustomBadge: React.FC<BadgeProps> = ({
  label,
  size,
  iconSide,
  fill,
  rounded = false,
  badgeType = "default",
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

  const commonStyles = {
    backgroundColor: getBackgroundColor(),
    isRounded: rounded ? "rounded-3xl" : "",
    iconColor: fill === "black" ? "white" : "black",
  };

  const sizeStyles = {
    default: {
      small: {
        styles:
          "w-auto h-6  px-2.5 py-0.5  gap-1 justify-center items-center text-xs font-semibold",
        iconSize: 14,
      },
      medium: {
        styles:
          "w-auto h-7 px-6 py-2.5 gap-1  justify-center items-center text-sm font-semibold ",
        iconSize: 16,
      },
      large: {
        styles:
          "w-auto h-8 justify-center items-center  text-base font-semibold",
        iconSize: 18,
      },
    },
    circle: {
      small:
        "w-11 h-11 rounded-full justify-center text-xs font-semibold   items-center",
      medium:
        "w-14 h-14 rounded-full justify-center text-xs font-semibold  items-center",
      large:
        "w-16 h-16 rounded-full justify-center text-base font-semibold  items-center",
    },
  };

  const currentSize = sizeStyles[badgeType][size] as SizeStyleType;

  return (
    <div
      className={`${currentSize.styles} ${commonStyles.backgroundColor} ${commonStyles.isRounded} ${commonStyles.iconColor} max-w-sm inline-flex justify-center items-center`}
    >
      {iconSide === "left" && (
        <IconX
          color={commonStyles.iconColor}
          size={currentSize.iconSize}
          onClick={onClick}
        />
      )}
      {label}
      {iconSide === "right" && (
        <IconX
          color={commonStyles.iconColor}
          size={currentSize.iconSize}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default CustomBadge;
