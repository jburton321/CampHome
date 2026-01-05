import { SocialIconsProperty1Fb } from "../SocialIconsProperty1Fb/SocialIconsProperty1Fb";
import { SocialIconsProperty1X } from "../SocialIconsProperty1X/SocialIconsProperty1X";
import { SocialIconsProperty1Ig } from "../SocialIconsProperty1Ig/SocialIconsProperty1Ig";
import { ButtonProperty1Active } from "../ButtonProperty1Active/ButtonProperty1Active";

export interface IFooterProps {
  className?: string;
}

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <div
      className={
        "bg-blue-950 pt-10 pr-12 pb-10 pl-12 flex flex-col gap-6 items-start justify-center relative " +
        className
      }
    >
      <div className="flex flex-row gap-12 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-8 items-start justify-center flex-1 relative">
          <div className="border-solid border-neutral-300 border-b pb-6 flex flex-row items-end justify-between self-stretch shrink-0 relative">
            <div className="shrink-0 w-[200px] h-[51.11px] relative overflow-hidden">
              <img
                className="w-[54.07%] h-[20.65%] absolute right-[0%] left-[45.92%] bottom-[-0.02%] top-[79.37%] overflow-visible"
                src="group0.svg"
              />
              <img
                className="w-[100%] h-[69.69%] absolute right-[0%] left-[0%] bottom-[30.02%] top-[0.29%] overflow-visible"
                src="group1.svg"
              />
              <img
                className="w-[9.53%] h-[51.4%] absolute right-[76.06%] left-[14.41%] bottom-[48.58%] top-[0.02%] overflow-visible"
                src="vector0.svg"
              />
              <img
                className="w-[9.76%] h-[15.66%] absolute right-[76.06%] left-[14.19%] bottom-[30.42%] top-[53.92%] overflow-visible"
                src="vector1.svg"
              />
              <img
                className="w-[9.76%] h-[15.66%] absolute right-[76.06%] left-[14.19%] bottom-[30.42%] top-[53.92%] overflow-visible"
                src="vector2.svg"
              />
            </div>
            <div className="flex flex-row gap-3 items-start justify-center shrink-0 relative">
              <SocialIconsProperty1Fb className="!shrink-0"></SocialIconsProperty1Fb>
              <SocialIconsProperty1X
                property1="x"
                className="!shrink-0"
              ></SocialIconsProperty1X>
              <SocialIconsProperty1Ig
                property1="ig"
                className="!shrink-0"
              ></SocialIconsProperty1Ig>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start self-stretch shrink-0 relative">
            <div className="text-neutral-white text-left font-['Inter-Regular',_sans-serif] text-xs leading-[140%] font-normal relative self-stretch flex items-center justify-start">
              Camp Now is a premier destination for RV enthusiasts, offering a
              wide selection of resort experiences tailored to RV travelers. We
              understand the unique needs and preferences of RV enthusiasts, and
              our handpicked resorts provide the perfect blend of comfort,
              convenience, and natural beauty.{" "}
            </div>
            <div className="flex flex-row gap-8 items-start justify-start shrink-0 relative">
              <div className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start">
                About Us{" "}
              </div>
              <div className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start">
                RV Resorts{" "}
              </div>
              <div className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start">
                Contact Us{" "}
              </div>
            </div>
          </div>
          <div className="border-solid border-neutral-300 border-t pt-5 flex flex-row items-center justify-between self-stretch shrink-0 h-[41px] relative">
            <div className="text-neutral-white text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start">
              ©2025 CampNow. All rights reserved.{" "}
            </div>
            <div className="flex flex-row gap-3 items-start justify-center shrink-0 relative">
              <div
                className="text-[#539eff] text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start"
                style={{ textDecoration: "underline" }}
              >
                Terms &amp; Conditions{" "}
              </div>
              <div className="text-neutral-white text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start">
                |{" "}
              </div>
              <div
                className="text-[#539eff] text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start"
                style={{ textDecoration: "underline" }}
              >
                Privacy Policy{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 rounded-[20px] pt-8 pr-6 pb-8 pl-6 flex flex-col items-start justify-between self-stretch shrink-0 relative">
          <div className="text-neutral-white text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative flex items-center justify-start">
            Contact Us{" "}
          </div>
          <div className="flex flex-row gap-6 items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-40 h-[121px] relative"
              style={{ objectFit: "cover", aspectRatio: "160/121" }}
              src="image-20.png"
            />
            <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
              <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="mail0.svg"
                />
                <div className="text-neutral-white text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative flex items-center justify-start">
                  info@campnow.com{" "}
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="call0.svg"
                />
                <div className="text-neutral-white text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative flex items-center justify-start">
                  888-664-1859{" "}
                </div>
              </div>
              <ButtonProperty1Active
                text="Send a Message"
                property1="active"
                className="!pt-2.5 !pr-12 !pb-2.5 !pl-12 !self-stretch !shrink-0"
              ></ButtonProperty1Active>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
