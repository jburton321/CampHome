import { ButtonProperty1Active } from "../ButtonProperty1Active/ButtonProperty1Active";
import { ButtonProperty1Hover } from "../ButtonProperty1Hover/ButtonProperty1Hover";

export interface IOffersCardProperty1DefaultProps {
  price?: string;
  resort?: string;
  location?: string;
  offer?: string;
  property1?: "default" | "hover";
  className?: string;
}

export const OffersCardProperty1Default = ({
  price = "$109",
  resort = "Lake Shore Resort",
  location = "Davison, Michigan",
  offer = "4 Days / 3 Nights",
  property1 = "default",
  className,
  ...props
}: IOffersCardProperty1DefaultProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bg-neutral-white rounded-2xl flex flex-col gap-0 items-start justify-start w-[300px] min-w-[300px] min-h-[160px] relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
      style={{
        boxShadow:
          "var(--card-small-box-shadow,  0px 16px 20px -12px rgba(0, 0, 0, 0.25))",
      }}
    >
      <div
        className="pt-2.5 pb-3 flex flex-col items-center justify-between self-stretch shrink-0 h-[180px] relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.60) 100%)",
          background: "url(frame-376740.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative">
          <div className="bg-neutral-white rounded-tr-[30px] rounded-br-[30px] pr-4 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 h-[50px] relative">
            <div className="text-orange-500 text-center font-['Poppins-ExtraBold',_sans-serif] text-lg leading-normal font-extrabold uppercase relative flex items-center justify-center">
              {price}{" "}
            </div>
          </div>
        </div>
        <div className="pr-3 pl-3 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
          <div className="text-neutral-white text-center font-['Poppins-SemiBold',_sans-serif] text-lg leading-normal font-semibold uppercase relative flex-1 flex items-center justify-center">
            {resort}{" "}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
          <img
            className="shrink-0 w-6 h-6 relative overflow-visible"
            style={{ aspectRatio: "1" }}
            src="distance0.svg"
          />
          <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative flex-1 flex items-center justify-start">
            {location}{" "}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
          <img
            className="shrink-0 w-6 h-6 relative overflow-visible"
            style={{ aspectRatio: "1" }}
            src="loyalty0.svg"
          />
          <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative flex-1 flex items-center justify-start">
            {offer}{" "}
          </div>
        </div>
      </div>
      <div className="pr-6 pb-6 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <ButtonProperty1Active
          text="get this deal"
          property1="active"
          className="!pt-2.5 !pr-12 !pb-2.5 !pl-12 !self-stretch !shrink-0"
        ></ButtonProperty1Active>
        <ButtonProperty1Hover
          text="call now"
          property1="hover"
          className="!pt-2.5 !pr-12 !pb-2.5 !pl-12 !self-stretch !shrink-0"
        ></ButtonProperty1Hover>
      </div>
    </div>
  );
};
