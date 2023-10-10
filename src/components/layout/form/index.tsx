import { IconSearch } from "@tabler/icons-react";
import CustomButton from "../button";

interface CustomFormProps {
  label?: string;
  formType?: FormType;
  inputType?: InputType;
  iconSide?: IconSideType;
  hint?: string;
  placeholder?: string;
  buttonLabel?: string; //void
  className?: string;
  onClick?: () => void;
}

type FormType = "input" | "textarea";
type IconSideType = "left" | "right" | "both";
type InputType = "text" | "email" | "password" | "search";

const CustomForm: React.FC<CustomFormProps> = ({
  label,
  iconSide,
  hint,
  placeholder,
  buttonLabel,
  className,
  inputType = "text",
  onClick,
}) => {
  const renderIcon = (position: IconSideType) =>
    (iconSide === position || iconSide === "both") && (
      <div
        className={`absolute inset-y-0 ${position}-0 flex items-center p-4 pointer-events-none`}
      >
        <IconSearch size={24} stroke={1.5} color="gray" />
      </div>
    );

  const inputClassNames = [
    "block w-full p-4 text-sm text-gray-900 border border-black-300 rounded-lg bg-white-100 focus:ring-black-900 focus:border-black-900 focus:outline-none",
    (iconSide === "left" || iconSide === "both") && "pl-12",
  ].join(" ");

  return (
    <form className={`flex flex-col gap-2 text-left ${className}`}>
      {label && (
        <label className=" text-sm font-semibold text-blue-100">
          {label}
        </label>
      )}

      <div className="relative flex gap-2">
        {renderIcon("left")}

        <input
          type={inputType}
          id="default-search"
          className={inputClassNames}
          placeholder={placeholder || "Search"}
          aria-label={label || "Search"}
        
        />

        {renderIcon("right")}
        {buttonLabel && (
          <CustomButton
            label={buttonLabel}
            buttonType="text"
            onClick={onClick}
            size={"xsmall"}
            className="absolute inset-y-0 right-0 flex items-center p-4 "
          />
        )}
      </div>

      {hint && (
        <span className="text-black-700 text-xs font-normal">{hint}</span>
      )}
    </form>
  );
};

export default CustomForm;
