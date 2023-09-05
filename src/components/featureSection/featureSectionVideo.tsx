import CustomButton from "../layout/button";

const FeatureSectionVideo = () => {
  return (
    <div className="flex  justify-center items-center md:justify-between flex-col md:flex-row w-full h-[494px]  gap-6 p-12">
      <div className="flex  w-full md:w-1/3 justify-center h-full bg-red-500 flex-col ">
        <div className="flex flex-col gap-2">
          <span className="text-4xl">Action Packed</span>
        </div>

        <span className="text-lg">
          Phosfluor escently engage worldwide with <br /> web-enabled
          process-centric technology.
        </span>
        <div>
          <CustomButton
            input={"See collection"}
            size={"textL"}
            fill={"transparent"}
            iconSide={"right"}
            iconType="arrow"
          />
        </div>
      </div>

      <div>
      </div>
    </div>
  );
};

export default FeatureSectionVideo;
