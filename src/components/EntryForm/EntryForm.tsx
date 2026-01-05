import { useState } from "react";
import { ButtonProperty1Active } from "../../ButtonProperty1Active/ButtonProperty1Active";

export interface IEntryFormProps {
  className?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  ownsRV: boolean;
  consent: boolean;
}

export const EntryForm = ({
  className,
  onSubmit,
}: IEntryFormProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    ownsRV: false,
    consent: false,
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div
      className={
        "pt-6 pr-12 pb-6 pl-12 flex flex-col gap-6 items-center justify-start self-stretch shrink-0 relative " +
        className
      }
    >
      <div className="flex flex-row gap-6 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-4 items-start justify-center flex-1 relative">
          <div className="flex flex-row gap-4 items-center justify-start self-stretch shrink-0 relative">
            <div className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1">
              <input
                type="text"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 bg-transparent border-0 outline-none w-full"
              />
            </div>
            <div className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1">
              <input
                type="text"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 bg-transparent border-0 outline-none w-full"
              />
            </div>
            <div className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1">
              <input
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 bg-transparent border-0 outline-none w-full"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start self-stretch shrink-0 relative">
            <div className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1">
              <input
                type="tel"
                placeholder="Phone*"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 bg-transparent border-0 outline-none w-full"
              />
            </div>
            <div className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1">
              <input
                type="text"
                placeholder="Zip Code*"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 bg-transparent border-0 outline-none w-full"
              />
            </div>
            <div
              className="bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative flex-1 cursor-pointer"
              onClick={() => handleInputChange("ownsRV", !formData.ownsRV)}
            >
              <div className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1">
                Do you own an RV?
              </div>
              <div
                className={
                  "rounded-[20px] pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex flex-row gap-1.5 items-center w-14 h-[22px] relative " +
                  (formData.ownsRV
                    ? "bg-green-500 justify-start"
                    : "bg-neutral-500 justify-end")
                }
              >
                <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-tight font-semibold relative">
                  {formData.ownsRV ? "Yes" : "No"}
                </div>
                <div
                  className="bg-neutral-white rounded-[50%] shrink-0 w-6 h-6 absolute top-[50%]"
                  style={{
                    left: formData.ownsRV ? "calc(100% - 26px)" : "0",
                    translate: "0 -50%",
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                    transition: "left 0.2s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 rounded-lg pt-4 pr-3 pb-4 pl-3 flex flex-col gap-3 items-start justify-start self-stretch flex-1 relative overflow-hidden">
          <div className="text-neutral-600 text-left font-['Montserrat-Bold',_sans-serif] text-sm font-bold relative self-stretch">
            Before submitting your entry, please agree to the following
          </div>
          <div
            className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative cursor-pointer"
            onClick={() => handleInputChange("consent", !formData.consent)}
          >
            <div className="shrink-0 w-6 h-6 relative">
              {formData.consent ? (
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  src="checkbox-v-30.svg"
                  alt="Checked"
                />
              ) : (
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  src="checkbox-v-3-state-unchecked.svg"
                  alt="Unchecked"
                />
              )}
            </div>
            <div
              className="text-neutral-600 text-left font-['Poppins-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1 flex items-center justify-start overflow-hidden"
              style={{
                letterSpacing: "0.2px",
                textOverflow: "ellipsis",
              }}
            >
              By clicking "I Consent", I give my electronic signature and
              consent that CampNow, Outdoor Adventures, Venture Out Resorts,
              Ocean Canyon Resorts and affiliates may contact me with offers at
              the phone number or email address provided, including by text
              msg., autodialer, or prerecorded msg. Purchase not required. Msg.
              &amp; data rates may apply.
            </div>
          </div>
          <div className="bg-neutral-400 rounded-[20px] shrink-0 w-0.5 h-7 absolute right-1 top-[46px]" />
        </div>
      </div>
      <div
        onClick={handleSubmit}
        className="cursor-pointer"
      >
        <ButtonProperty1Active
          text="Enter Now to Win the Truck or $40K!"
          property1="active"
          className="!shrink-0"
        />
      </div>
      <div className="flex flex-row gap-[3.41px] items-center justify-start shrink-0 relative">
        <div className="text-neutral-300 text-center font-['MaterialIcons-Regular',_sans-serif] text-[11.378402709960938px] leading-[11.38px] font-normal relative">
          lock
        </div>
        <div className="text-neutral-300 text-center font-font-family-body text-xs leading-[13.65px] font-bold relative">
          Your information is secure
        </div>
      </div>
    </div>
  );
};
