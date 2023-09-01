import { IconArrowRight } from "@tabler/icons-react";

interface CustomButtonProps {
  input: string;
  size: ButtonSize;
  arrow: 'left' | 'right' | null;
  fill: boolean;
  rounded: boolean;
}
type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const CustomButton: React.FC<CustomButtonProps> = ({
  input,
  size,
  arrow,
  fill,
    rounded,
}) => {
  const styles = {
    common: {
      backgroundColor: fill ? "bg-black-900" : "bg-white-900",
      isRounded: rounded ? "rounded-3xl" : "rounded-none",
      textColor: fill ? "text-white-900" : "text-black-900",
      iconColor: fill ? "white" : "black",
    },
    sizes: {
      xsmall: {
        buttonSize: " h-10 px-5 py-2 gap-0.5 text-sm",
        iconSize: 18,
      },
      small: {
        buttonSize: " h-11 px-6 py-2  gap-1 text-base",
        iconSize: 20,
      },
      medium: {
        buttonSize: " h-12 px-6 py-2.5 gap-1 text-lg ",
        iconSize: 24,
      },
      large: {
        buttonSize: " h-16 px-11 py-5 gap-2 text-xl  ",
        iconSize: 28,
      },
      xlarge: {
        buttonSize: " h-20 px-14 py-5 gap-2 text-2xl ",
        iconSize: 32,
      },
    },
  };

  const currentSize = styles.sizes[size] || styles.sizes.small; 

  return (
    <button
      className={`${currentSize.buttonSize} ${styles.common.backgroundColor} ${styles.common.textColor} ${styles.common.isRounded} inline-flex  justify-center items-center`}
    >
      {arrow === "left" && (
        <IconArrowRight
          color={styles.common.iconColor}
          size={currentSize.iconSize}
        />
      )}
      {input}
      {arrow === "right" && (
        <IconArrowRight
          color={styles.common.iconColor}
          size={currentSize.iconSize}
        />
      )}
    </button>
  );
};

export default CustomButton;
