import { IconChevronDown } from "@tabler/icons-react";
import { ReactElement } from "react";

interface CustomAccordionProps {
  title: string;
  text: string | ReactElement;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ title, text }) => {
  return (
    <div className=" max-w-screen-xl mx-auto   bg-white max-h-max">
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto ">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> {title}</span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown size={24} />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              {text}
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
