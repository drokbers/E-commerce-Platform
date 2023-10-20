
import Image from "next/image";

import CustomButton from "../../layout/button";
import Link from "next/link";

const FeatureSectionPhoto = () => {
  return (
    <div className="flex  justify-center items-center md:justify-between flex-col md:flex-row w-full h-[627px]  gap-6 p-12">
      <div className="flex  w-full md:w-1/3 justify-center  flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-base">TRENDING</span>
          <span className="text-5xl">
            Made from the <br />
            finest materials
          </span>
        </div>

        <span className="text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem
          accusantium doloremque laudantium, <br />
          totam rem aperiam, eaque ipsa quae.
        </span>
        <div>
          <Link href={`/shop`}>
            <CustomButton
              label={"See collection"}
              size={"large"}
              buttonType="text"
              fill={"transparent"}
              iconSide={"right"}
              iconType="arrow"
            />
          </Link>
        </div>
      </div>
      <div className="w-[auto] h-auto ">
        <div className="relative  flex   justify-center  flex-row md:flex-col h-[46vw] w-[52vw]  ">
          <div className="absolute right-0   top-0 h-[40vw] w-[40vw]  ">
            <Image
              src="https://i.hizliresim.com/kz2ac0q.png"
              sizes="570px"
              alt="Picture of the author"
              fill
            />
          </div>
          <div className=" absolute left-0 bottom-0 w-[23vw] h-[30vw]">
            <Image
              src="https://i.hizliresim.com/qtulsk0.png"
              fill
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSectionPhoto;
