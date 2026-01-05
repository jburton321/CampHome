import { SocialIconsProperty1Fb } from "../SocialIconsProperty1Fb/SocialIconsProperty1Fb";
import { SocialIconsProperty1X } from "../SocialIconsProperty1X/SocialIconsProperty1X";
import { SocialIconsProperty1Ig } from "../SocialIconsProperty1Ig/SocialIconsProperty1Ig";
import { ButtonProperty1Active } from "../ButtonProperty1Active/ButtonProperty1Active";

export interface IFooterProps {
  className?: string;
}

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer
      className={
        "bg-blue-950 pt-8 lg:pt-10 px-4 lg:pr-12 pb-8 lg:pb-10 lg:pl-12 flex flex-col gap-6 items-start justify-center relative " +
        className
      }
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-6 lg:gap-8 items-start justify-center flex-1 relative w-full">
          <div className="border-solid border-neutral-300 border-b pb-4 lg:pb-6 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center lg:items-end justify-between self-stretch shrink-0 relative">
            <div className="shrink-0 w-[160px] lg:w-[200px] h-auto lg:h-[51.11px] relative overflow-hidden">
              <img
                className="w-[54.07%] h-[20.65%] absolute right-[0%] left-[45.92%] bottom-[-0.02%] top-[79.37%] overflow-visible"
                src="group0.svg"
                alt=""
              />
              <img
                className="w-[100%] h-[69.69%] absolute right-[0%] left-[0%] bottom-[30.02%] top-[0.29%] overflow-visible"
                src="group1.svg"
                alt="CampNow Logo"
              />
              <img
                className="w-[9.53%] h-[51.4%] absolute right-[76.06%] left-[14.41%] bottom-[48.58%] top-[0.02%] overflow-visible"
                src="vector0.svg"
                alt=""
              />
              <img
                className="w-[9.76%] h-[15.66%] absolute right-[76.06%] left-[14.19%] bottom-[30.42%] top-[53.92%] overflow-visible"
                src="vector1.svg"
                alt=""
              />
              <img
                className="w-[9.76%] h-[15.66%] absolute right-[76.06%] left-[14.19%] bottom-[30.42%] top-[53.92%] overflow-visible"
                src="vector2.svg"
                alt=""
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
          <div className="flex flex-col gap-4 lg:gap-6 items-center justify-start self-stretch shrink-0 relative">
            <p className="text-neutral-white text-center lg:text-left font-['Inter-Regular',_sans-serif] text-xs leading-[140%] font-normal relative self-stretch flex items-center justify-start">
              Camp Now is a premier destination for RV enthusiasts, offering a
              wide selection of resort experiences tailored to RV travelers. We
              understand the unique needs and preferences of RV enthusiasts, and
              our handpicked resorts provide the perfect blend of comfort,
              convenience, and natural beauty.{" "}
            </p>
            <nav className="flex flex-row gap-4 lg:gap-8 items-start justify-center lg:justify-start shrink-0 relative flex-wrap">
              <a href="#about" className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start hover:underline">
                About Us{" "}
              </a>
              <a href="#deals" className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start hover:underline">
                RV Resorts{" "}
              </a>
              <a href="#contact" className="text-orange-400 text-left font-['Inter-Regular',_sans-serif] text-sm leading-[21px] font-normal relative flex items-center justify-start hover:underline">
                Contact Us{" "}
              </a>
            </nav>
          </div>
          <div className="border-solid border-neutral-300 border-t pt-4 lg:pt-5 flex flex-col lg:flex-row gap-2 lg:gap-0 items-center justify-between self-stretch shrink-0 min-h-[41px] relative">
            <span className="text-neutral-white text-center lg:text-left font-['Inter-Regular',_sans-serif] text-xs lg:text-sm leading-[21px] font-normal relative flex items-center justify-start">
              2025 CampNow. All rights reserved.{" "}
            </span>
            <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative flex-wrap">
              <a
                href="#"
                className="text-[#539eff] text-left font-['Inter-Regular',_sans-serif] text-xs lg:text-sm leading-[21px] font-normal relative flex items-center justify-start underline hover:no-underline"
              >
                Terms &amp; Conditions{" "}
              </a>
              <span className="text-neutral-white text-left font-['Inter-Regular',_sans-serif] text-xs lg:text-sm leading-[21px] font-normal relative flex items-center justify-start hidden lg:block">
                |{" "}
              </span>
              <a
                href="#"
                className="text-[#539eff] text-left font-['Inter-Regular',_sans-serif] text-xs lg:text-sm leading-[21px] font-normal relative flex items-center justify-start underline hover:no-underline"
              >
                Privacy Policy{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 rounded-[20px] p-6 lg:pt-8 lg:pr-6 lg:pb-8 lg:pl-6 flex flex-col gap-4 lg:gap-0 items-start justify-between self-stretch shrink-0 relative w-full lg:w-auto">
          <h3 className="text-neutral-white text-left font-['Poppins-SemiBold',_sans-serif] text-lg lg:text-xl leading-normal font-semibold uppercase relative flex items-center justify-start">
            Contact Us{" "}
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-start shrink-0 relative w-full">
            <img
              className="shrink-0 w-32 lg:w-40 h-auto lg:h-[121px] relative rounded-lg"
              style={{ objectFit: "cover", aspectRatio: "160/121" }}
              src="image-20.png"
              alt="Contact illustration"
            />
            <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative w-full lg:w-auto">
              <a href="mailto:info@campnow.com" className="flex flex-row gap-2 items-center justify-start shrink-0 relative hover:opacity-80 transition-opacity">
                <img
                  className="shrink-0 w-5 lg:w-6 h-5 lg:h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="mail0.svg"
                  alt=""
                />
                <span className="text-neutral-white text-left font-['Poppins-Regular',_sans-serif] text-sm lg:text-base leading-normal font-normal relative flex items-center justify-start">
                  info@campnow.com{" "}
                </span>
              </a>
              <a href="tel:888-664-1859" className="flex flex-row gap-2 items-center justify-start shrink-0 relative hover:opacity-80 transition-opacity">
                <img
                  className="shrink-0 w-5 lg:w-6 h-5 lg:h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="call0.svg"
                  alt=""
                />
                <span className="text-neutral-white text-left font-['Poppins-Regular',_sans-serif] text-sm lg:text-base leading-normal font-normal relative flex items-center justify-start">
                  888-664-1859{" "}
                </span>
              </a>
              <ButtonProperty1Active
                text="Send a Message"
                property1="active"
                className="!pt-2.5 !pr-8 lg:!pr-12 !pb-2.5 !pl-8 lg:!pl-12 !self-stretch !shrink-0"
              ></ButtonProperty1Active>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
