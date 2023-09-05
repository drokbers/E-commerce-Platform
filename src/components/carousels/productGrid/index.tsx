import CustomButton from "../../layout/button";
import ProductItem from "../productCarousel/productGridItem";

const productGrid = () => {
  const Dummy = [
    {
      id: 1,
      photo:
        "https://s3-alpha-sig.figma.com/img/1cfe/4aed/1bcadb35f8105b3448db15c95920b69e?Expires=1694390400&Signature=lD2b0sEdBcHqjQM3mIYTEik393nYig78wVanmCEikBctOP088tVyIiLEhCO0StEMzXAp9z297kH~yr1dNI9l4gr~hMU-tD2NvB-X-evpkdXCv7rmeUrFeWjHr59YfPORZIBCWPh~pqWC4S26U4fygLfp29ioNQa8sxNNG2Q47J8~ejgmN5acgwCCSWdttdK~6dAQ6XBL4q3EdO2t3~5A~7mUdwIkC5D~vMch90ZcBrDKF7UuDdoACEO5q-jk0zpNN3EwZF6qVE3PVkFrKuThj-ukymKbzIAqXCk1isYGWJOktH4OI3NT1SxBfgQRpw2oHVvdQVEEGrN0wKze9Si1qQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Nairo Sweater",
      price: 65.2,
      discount: 20,
      new: true,
    },
    {
      id: 2,
      photo:
        "https://s3-alpha-sig.figma.com/img/1219/a8a5/f6d87a61ad61cb616003df6dd07418ed?Expires=1694390400&Signature=OxAVvWNoQquSV4N5pY39sTQFk83pn1gqlOo9jJRO2diARLG60zZdAuf1YXdA80z2ge3tEmNFkhJR8nmgE1C1WEKdwnCPolvjL6~6A2z9EO5CPSLnKcgSIu3oKVhkL~VRL89~HVNXOINnaqZRUdhizmmnDf5pAA2HWUPnBCjmfEqsr8BnGhEKuOQtuzJIJBeTY3ZQoF7Xuh5AvOvlg0kOEAQWt381PfrGbsUxCJA1U~q7z~SP0Mfiq-SCYsMLQ651YnPE~gzeUMPRntHOWe5XXHZSFmibKde1YQhMLkCjLW71V-rY3UyFfyW1WjrUpBToltmApxHUKVBdHdlZUYb0FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Elegant Blouse",
      price: 45.5,
      discount: 15,
      new: false,
    },
    {
      id: 3,
      photo:
        "https://s3-alpha-sig.figma.com/img/30b7/ed4f/763d05efa7740886736de0bd0d57b5bc?Expires=1694390400&Signature=pySAAkrEmXIbkMQnGw2a61O30x4CX0mSgTXfc0sIK2D081VsRuZF8-RTcTxnPbD1SIIY~Se7~os04pIn-9hXpwUOH4UaUV3utu-fp2DkyafeZCQjrXaB6ibKC3nrViOXOemUNpp4bAnnKubI~YvICkcCTzyiI6Ah~~6ATF1cQ0vsZokN9D6eAxZ6Z3h~UKmKhNcUhwm9tPbKR0xp~yED~DQFm4GWwmpVLe~JzRr-icEoMyHIUEUypyQ17FWFUp12GRijbalgxGu0qNRWRtcXWVywxkKVc7EaYHU47Gm4SHuQvwFlbw0Zj7adkzzPDqqnCXzIMBqJ2AIBhidUzifyzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Denim Jeans",
      price: 55.0,
      discount: 10,
      new: true,
    },
    {
      id: 4,
      photo:
        "https://s3-alpha-sig.figma.com/img/58ba/e7ee/fd232f80a0a55c100c151db43873de30?Expires=1694390400&Signature=qck9LvbjHBkJ00o5N4x70IulWbuUslDh2lXZjZoK69dl19wUr1TI4~qLfngT8gP0EqYgFVR-gR2I28288UTVacC~ohQfOMJDLFhvrBEJb1FYaY8nkKOa3Ey2GNeyMTPZP6nZKGuErBJIRR-~2aBJOkluPnXtYVlXrYkJGVGdkEy1iWnypdPkqIdG0AgbERk0sQF7REpS9~nTYpriTayD5ZgNOT2GkGu4GEOwVR4dnlnP7lExucG7OMYZNCvn21K9ux01suxZkZx027gfW~9~VenyOI7e02yVUBtP4YBjZA09pgCUBBxq5aXVQ0B5oHkhMm2lHzrrAIFhhQrHC7XvhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Sporty Jacket",
      price: 75.8,
      discount: 5,
      new: false,
    },
    {
      id: 5,
      photo:
        "https://s3-alpha-sig.figma.com/img/0261/2eed/e19ad9fdfae288a228f2006720e7eeb7?Expires=1694390400&Signature=kAilZ6t5AQ5A5s9OxVDyNJsEqdQQxRKls5slXpdda1q4TgTcsnmUSv1z62NPQJLMEuiGKjOap0mL5oDqWacq8Tvl0obV4rm~6z1JbMXndeGGTk~DOtRUPRVPmHc84JiZSHOfE~dvDM92DIyCZURO4YGVOsxwZc85KTTRdw8ZqxST5DDjS-D0EVIvMV~S2lARdBybAcQtWVFdcjmrWGXfkkp73vmCsRFxgyl0T04qzBZHezVLQ1DmKugI-QSq31vvarmKV1OBx8c8e5aRMpGFVinPrQAiIe7POMuC5BMAK0twaaBxq3aSoEVJjiiIOHbypODK31vBYAoqwPeLlmCmxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "sonraki sayfa",
      price: 45.5,
      discount: 15,
      new: false,
    },
    {
      id: 6,
      photo:
        "https://s3-alpha-sig.figma.com/img/30b7/ed4f/763d05efa7740886736de0bd0d57b5bc?Expires=1694390400&Signature=pySAAkrEmXIbkMQnGw2a61O30x4CX0mSgTXfc0sIK2D081VsRuZF8-RTcTxnPbD1SIIY~Se7~os04pIn-9hXpwUOH4UaUV3utu-fp2DkyafeZCQjrXaB6ibKC3nrViOXOemUNpp4bAnnKubI~YvICkcCTzyiI6Ah~~6ATF1cQ0vsZokN9D6eAxZ6Z3h~UKmKhNcUhwm9tPbKR0xp~yED~DQFm4GWwmpVLe~JzRr-icEoMyHIUEUypyQ17FWFUp12GRijbalgxGu0qNRWRtcXWVywxkKVc7EaYHU47Gm4SHuQvwFlbw0Zj7adkzzPDqqnCXzIMBqJ2AIBhidUzifyzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Denim Jeans",
      price: 55.0,
      discount: 10,
      new: true,
    },
    {
      id: 7,
      photo:
        "https://s3-alpha-sig.figma.com/img/3edf/11b8/d0bb9a2ea93dfb26a93586a66c687cea?Expires=1694390400&Signature=I9e4V4PKWrl6519y10rcCU3igOGURbHO8Y4k1-MNJ2ST8FmzIBH1FV4w3rRsb~9zp1aQvkXl4vp9lcWtyA-PGi0Cney6jEMMyNBM3TsaHuOCTnf21u0IBhBI6mHqOogs7hwvMMXoJEzRFHUNCpMpE~iBm85qZn9uKBDepdjJpHNWoq7QVzlAVt1WTL9O3GZTguGuO7gLggTL9R1rvnYMhNfFOEGLPgqnJir3sThkC9pqzjad1ToPnx~UZfs7jFIaM~UXvJK2Iyc~FUTF0FCJVicCkoBLbfDY8Vb15jGR0q~Jiy0Ymq2PNdZdQcp7r~-u4HcjjXf86CXDVsw9MH0g1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Nairo Sweater",
      price: 65.2,
      discount: 20,
      new: true,
    },

    {
      id: 8,
      photo:
        "https://s3-alpha-sig.figma.com/img/58ba/e7ee/fd232f80a0a55c100c151db43873de30?Expires=1694390400&Signature=qck9LvbjHBkJ00o5N4x70IulWbuUslDh2lXZjZoK69dl19wUr1TI4~qLfngT8gP0EqYgFVR-gR2I28288UTVacC~ohQfOMJDLFhvrBEJb1FYaY8nkKOa3Ey2GNeyMTPZP6nZKGuErBJIRR-~2aBJOkluPnXtYVlXrYkJGVGdkEy1iWnypdPkqIdG0AgbERk0sQF7REpS9~nTYpriTayD5ZgNOT2GkGu4GEOwVR4dnlnP7lExucG7OMYZNCvn21K9ux01suxZkZx027gfW~9~VenyOI7e02yVUBtP4YBjZA09pgCUBBxq5aXVQ0B5oHkhMm2lHzrrAIFhhQrHC7XvhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Sporty YYJacket",
      price: 75.8,
      discount: 5,
      new: false,
    },
    {
      id: 9,
      photo:
        "https://s3-alpha-sig.figma.com/img/2337/4191/3da93acc8a684bacb5b2dcc316cea8d0?Expires=1694390400&Signature=oLvuXTLJZbxyEbivqEMag-~ycEZuffYgKQTbvOZ0MVQmeKgQO0KeRy7AL92t8Z1CwlwIziGueKyqdCh-pzTYN0VDcNB1QdkEZKzxIvMUPB8wIJjCo7SW~M6kMHnRg1fVqFLxtx3gv06vrQXvXzEc8mhwE2sKEAfNXN11L1PnXN5YaeuTymYdQib--RXAqfZa~4uWz71bkjdsrNBj~aT0gigp1BRoPHvwkVQ74IBsFAEqgCJpcoUpQdJT4K45YiEGbqw7I2ZaOCf36Z7cEHS-BOMUVrMeWJo2rrX88RlHUFtryNwC0iO0O-JE~LedEuMyfLxpAgWB5Phy41B9395kaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Mavi baska",
      price: 65.2,
      discount: 20,
      new: true,
    },
    {
      id: 10,
      photo:
        "https://s3-alpha-sig.figma.com/img/0261/2eed/e19ad9fdfae288a228f2006720e7eeb7?Expires=1694390400&Signature=kAilZ6t5AQ5A5s9OxVDyNJsEqdQQxRKls5slXpdda1q4TgTcsnmUSv1z62NPQJLMEuiGKjOap0mL5oDqWacq8Tvl0obV4rm~6z1JbMXndeGGTk~DOtRUPRVPmHc84JiZSHOfE~dvDM92DIyCZURO4YGVOsxwZc85KTTRdw8ZqxST5DDjS-D0EVIvMV~S2lARdBybAcQtWVFdcjmrWGXfkkp73vmCsRFxgyl0T04qzBZHezVLQ1DmKugI-QSq31vvarmKV1OBx8c8e5aRMpGFVinPrQAiIe7POMuC5BMAK0twaaBxq3aSoEVJjiiIOHbypODK31vBYAoqwPeLlmCmxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Elegant Blouse",
      price: 45.5,
      discount: 15,
      new: false,
    },

    {
      id: 11,
      photo:
        "https://s3-alpha-sig.figma.com/img/30b7/ed4f/763d05efa7740886736de0bd0d57b5bc?Expires=1694390400&Signature=pySAAkrEmXIbkMQnGw2a61O30x4CX0mSgTXfc0sIK2D081VsRuZF8-RTcTxnPbD1SIIY~Se7~os04pIn-9hXpwUOH4UaUV3utu-fp2DkyafeZCQjrXaB6ibKC3nrViOXOemUNpp4bAnnKubI~YvICkcCTzyiI6Ah~~6ATF1cQ0vsZokN9D6eAxZ6Z3h~UKmKhNcUhwm9tPbKR0xp~yED~DQFm4GWwmpVLe~JzRr-icEoMyHIUEUypyQ17FWFUp12GRijbalgxGu0qNRWRtcXWVywxkKVc7EaYHU47Gm4SHuQvwFlbw0Zj7adkzzPDqqnCXzIMBqJ2AIBhidUzifyzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Zara Jeans",
      price: 55.0,
      discount: 10,
      new: true,
    },
    {
      id: 12,
      photo:
        "https://s3-alpha-sig.figma.com/img/58ba/e7ee/fd232f80a0a55c100c151db43873de30?Expires=1694390400&Signature=qck9LvbjHBkJ00o5N4x70IulWbuUslDh2lXZjZoK69dl19wUr1TI4~qLfngT8gP0EqYgFVR-gR2I28288UTVacC~ohQfOMJDLFhvrBEJb1FYaY8nkKOa3Ey2GNeyMTPZP6nZKGuErBJIRR-~2aBJOkluPnXtYVlXrYkJGVGdkEy1iWnypdPkqIdG0AgbERk0sQF7REpS9~nTYpriTayD5ZgNOT2GkGu4GEOwVR4dnlnP7lExucG7OMYZNCvn21K9ux01suxZkZx027gfW~9~VenyOI7e02yVUBtP4YBjZA09pgCUBBxq5aXVQ0B5oHkhMm2lHzrrAIFhhQrHC7XvhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Denim Jacket",
      price: 75.8,
      discount: 5,
      new: false,
    },
    {
      id: 13,
      photo:
        "https://s3-alpha-sig.figma.com/img/2337/4191/3da93acc8a684bacb5b2dcc316cea8d0?Expires=1694390400&Signature=oLvuXTLJZbxyEbivqEMag-~ycEZuffYgKQTbvOZ0MVQmeKgQO0KeRy7AL92t8Z1CwlwIziGueKyqdCh-pzTYN0VDcNB1QdkEZKzxIvMUPB8wIJjCo7SW~M6kMHnRg1fVqFLxtx3gv06vrQXvXzEc8mhwE2sKEAfNXN11L1PnXN5YaeuTymYdQib--RXAqfZa~4uWz71bkjdsrNBj~aT0gigp1BRoPHvwkVQ74IBsFAEqgCJpcoUpQdJT4K45YiEGbqw7I2ZaOCf36Z7cEHS-BOMUVrMeWJo2rrX88RlHUFtryNwC0iO0O-JE~LedEuMyfLxpAgWB5Phy41B9395kaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Nairo Sweater",
      price: 65.2,
      discount: 20,
      new: true,
    },
    {
      id: 14,
      photo:
        "https://s3-alpha-sig.figma.com/img/0261/2eed/e19ad9fdfae288a228f2006720e7eeb7?Expires=1694390400&Signature=kAilZ6t5AQ5A5s9OxVDyNJsEqdQQxRKls5slXpdda1q4TgTcsnmUSv1z62NPQJLMEuiGKjOap0mL5oDqWacq8Tvl0obV4rm~6z1JbMXndeGGTk~DOtRUPRVPmHc84JiZSHOfE~dvDM92DIyCZURO4YGVOsxwZc85KTTRdw8ZqxST5DDjS-D0EVIvMV~S2lARdBybAcQtWVFdcjmrWGXfkkp73vmCsRFxgyl0T04qzBZHezVLQ1DmKugI-QSq31vvarmKV1OBx8c8e5aRMpGFVinPrQAiIe7POMuC5BMAK0twaaBxq3aSoEVJjiiIOHbypODK31vBYAoqwPeLlmCmxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Elegant cok baska2Blouse",
      price: 45.5,
      discount: 15,
      new: false,
    },
    {
      id: 15,
      photo:
        "https://s3-alpha-sig.figma.com/img/30b7/ed4f/763d05efa7740886736de0bd0d57b5bc?Expires=1694390400&Signature=pySAAkrEmXIbkMQnGw2a61O30x4CX0mSgTXfc0sIK2D081VsRuZF8-RTcTxnPbD1SIIY~Se7~os04pIn-9hXpwUOH4UaUV3utu-fp2DkyafeZCQjrXaB6ibKC3nrViOXOemUNpp4bAnnKubI~YvICkcCTzyiI6Ah~~6ATF1cQ0vsZokN9D6eAxZ6Z3h~UKmKhNcUhwm9tPbKR0xp~yED~DQFm4GWwmpVLe~JzRr-icEoMyHIUEUypyQ17FWFUp12GRijbalgxGu0qNRWRtcXWVywxkKVc7EaYHU47Gm4SHuQvwFlbw0Zj7adkzzPDqqnCXzIMBqJ2AIBhidUzifyzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Denim Jeans",
      price: 55.0,
      discount: 10,
      new: true,
    },
    {
      id: 4,
      photo:
        "https://s3-alpha-sig.figma.com/img/58ba/e7ee/fd232f80a0a55c100c151db43873de30?Expires=1694390400&Signature=qck9LvbjHBkJ00o5N4x70IulWbuUslDh2lXZjZoK69dl19wUr1TI4~qLfngT8gP0EqYgFVR-gR2I28288UTVacC~ohQfOMJDLFhvrBEJb1FYaY8nkKOa3Ey2GNeyMTPZP6nZKGuErBJIRR-~2aBJOkluPnXtYVlXrYkJGVGdkEy1iWnypdPkqIdG0AgbERk0sQF7REpS9~nTYpriTayD5ZgNOT2GkGu4GEOwVR4dnlnP7lExucG7OMYZNCvn21K9ux01suxZkZx027gfW~9~VenyOI7e02yVUBtP4YBjZA09pgCUBBxq5aXVQ0B5oHkhMm2lHzrrAIFhhQrHC7XvhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Sporty Jacket",
      price: 75.8,
      discount: 5,
      new: false,
    },
  ];

  return (
    <div className="flex flex-col   items-center gap-12 p-12">
      <div className="flex  text-2xl font-medium gap-3 items-center justify-center leading-9">
        <span>You’re browsing</span>
        <CustomButton
          input={"Dresses"}
          size={"textXL"}
          iconSide={'right'}
          fill={"transparent"}
    
          underline={true}
         
          iconType="ChevronDown"
        />
        <span>In</span>
        <CustomButton
          input={"Tag"}
          size={"textXL"}
          iconSide={'right'}
          fill={"transparent"}
     
          underline={true}
      
          iconType="ChevronDown"
        />

      </div>
      <div className="flex flex-col w-full  gap-4 md:gap-8  ">
        <div className="grid grid-cols-2 justify-center  xl:grid-cols-4 gap-8">
          {Dummy.slice(0, 8).map((item) => (
            <ProductItem key={item.id} {...item} type={"productGrid"} />
          ))}
        </div>
      </div>
      <CustomButton input={"Load more"} size={"medium"} fill={"black"}/>
    </div>
  );
};
export default productGrid;
