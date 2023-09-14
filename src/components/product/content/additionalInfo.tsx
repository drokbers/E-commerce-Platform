interface AdditaionalInfoProps {
  color?: string[];
  size?: string[];
  weight: number;
}

const AdditionalInfo = ({ size, color, weight }: AdditaionalInfoProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  function poundToKg(pound: number) {
    return (pound / 2.205).toFixed(2);
  }

  return (
    <div>
      <table>
        <tbody className="flex  flex-col  pt-4 md:pt-8 gap-8">
          <tr className="flex gap-10 items-center">
            <td className="text-sm md:text-lg font-semibold">SIZE:</td>
            <td className="text-sm md:text-lg font-normal">
              {size?.map((item) => item.toUpperCase()).join(", ")}
            </td>
          </tr>
          <tr className="flex gap-4 items-center">
            <td className="text-sm md:text-lg  font-semibold">COLOR:</td>
            <td className="text-sm md:text-lg font-normal">
              {color?.map(capitalizeFirstLetter).join(", ")}
            </td>
          </tr>
          <tr className="flex gap-4 items-center">
            <td className="text-sm md:text-lg  font-semibold">Weight:</td>
            <td className="text-sm md:text-lg  font-normal">
              {weight} lb , {poundToKg(weight)} kg
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInfo;
