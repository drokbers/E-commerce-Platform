import CustomForm from "../../layout/form";


const ShippingInformation = () => {
    return(
        <div className="flex border rounded-md p-6 border-black-300 flex-col gap-6">
        <span className="text-xl text-left  font-medium">Shipping infromation </span>
  
        <div className="flex flex-col gap-8">
        <div className="">
            <CustomForm inputType="text"  placeholder="Street address" label="Street address *" />
          </div>
          <div className="">
            <CustomForm inputType="text" placeholder="Country" label="Country  *" />
          </div>
          <div className="">
            <CustomForm inputType="text" placeholder="Town / City" label="Town / City *" />
          </div>
          <div className="flex  gap-8 ">
            <CustomForm
              inputType="text"
              label="State"
              placeholder="State"
              className="w-1/2"
            />
  
            <CustomForm
              inputType="text"
              label="Zip code"
              placeholder="Zip code"
              className="w-1/2"
            />
          </div>
  
       
        </div>
      </div>
    )}

    export default ShippingInformation;