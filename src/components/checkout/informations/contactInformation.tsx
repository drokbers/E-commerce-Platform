import CustomForm from "../../layout/form";

const ContactInformation = () => {
  return (
    <div className="flex border rounded-md p-6 border-black-300 flex-col gap-6">
      <span className="text-xl text-left font-medium">Contact infromation </span>

      <div className="flex flex-col gap-8">
        <div className="flex  gap-8 ">
          <CustomForm
            inputType="text"
            label="First name"
            placeholder="Name"
            className="w-1/2"
          />

          <CustomForm
            inputType="text"
            label="First name"
            placeholder="Surname"
            className="w-1/2"
          />
        </div>

        <div className="">
          <CustomForm inputType="email" label="Email adress" />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
