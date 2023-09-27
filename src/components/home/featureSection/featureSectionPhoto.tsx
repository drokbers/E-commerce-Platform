
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
              src="https://s3-alpha-sig.figma.com/img/5121/b582/16aa2327dd987714f2eb77d6a6f7d385?Expires=1694390400&Signature=H3ni8pS7jmyE6hIAvpGBZj1aAGoWI6PZ6LsXcBPzru2S6qnBblPMy9~EQdA93tbMMwBDKiD3PkWq7F-QinuXaDxAYA~tGI0jGBc2nDh1Et7ya2bkV~oCTwJbw4JUPfPDizbM-SDrR6o0wP3vvUkiPhlARGLmfmL1TsquoIYPFYkwh-JQrI-FnvXiap1fd~IUurkwGPeTdOgvgUsqy9KinZAQMeYA7lEPixlPLxmBw7CU9cKwIZD1QqN7iqorjyUOzDl3Mt69G84u80EQU0pxHwtR2d9KNt1rt5GFxVKJKVJiyHT2GBDZ9eW71CZ1mkrl4GG2ecwVGHBRifFc68gAoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              sizes="570px"
              alt="Picture of the author"
              fill
            />
          </div>
          <div className=" absolute left-0 bottom-0 w-[23vw] h-[30vw]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/dc8a/b2f1/3d662bc212705a8d53afb04b6e68fbe6?Expires=1694390400&Signature=ORXs~S7zuQMYrQoRpQuLzCPJE-MHuAdih3lzEJQ7gWsQqzekgTbuL6rSGwCCJHtYNzmHjHpHTl2qUxfoNiCscE4JuG~Z1hxYR6GqrRJ8jJEc8T7P1v1TYLeeKzirclYMZfB50kxDocYqB3lPicpXPXVCLOijdgiZ6jl8MtGIuMsYFtH0a0MYJ9u9MyrwBMIQe-FcE2dV5X6SWk8O92ucjemWB5TEDB3f7W0KKPdftZ4tkbTA3Ek9i1dI2dnjLWbTjU~v0WFZE7Widvqok6EltGiQjYYnKdGbPLZKukXbAJ8PT2e-SFY-AYX-KFRzz2VrM5~h0mvMCjaXck74vLMFyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
