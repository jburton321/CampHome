import { ButtonProperty1Active } from "../../ButtonProperty1Active/ButtonProperty1Active";

export interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps): JSX.Element => {
  return (
    <div
      className={
        "lg:bg-neutral-white lg:rounded-xl py-4 lg:pt-8 lg:pb-5 flex flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden lg:shadow-[0px_10px_30px_-12px_rgba(0,0,0,0.25)] " +
        className
      }
    >
      <img
        className="shrink-0 w-[120px] lg:w-[174.4px] h-auto relative overflow-visible"
        src="group-190.svg"
        alt="CampNow Logo"
      />
      <div className="hidden lg:flex flex-row gap-8 items-center justify-end shrink-0 relative">
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative border-solid border-orange-500 border-b-2 pb-1 cursor-pointer transition-all duration-300 ease-out">
          <div className="text-orange-500 text-left font-['Inter-Regular',_sans-serif] text-text-sizes-text-regular leading-normal font-normal uppercase relative">
            Home
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
          <div className="text-color-scheme-1-text text-left font-['Inter-Regular',_sans-serif] text-text-sizes-text-regular leading-normal font-normal uppercase relative">
            About Us
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
          <div className="text-color-scheme-1-text text-left font-['Inter-Regular',_sans-serif] text-text-sizes-text-regular leading-normal font-normal uppercase relative">
            Deals
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
          <div className="text-color-scheme-1-text text-left font-['Inter-Regular',_sans-serif] text-text-sizes-text-regular leading-normal font-normal uppercase relative">
            Contact Us
          </div>
        </div>
      </div>
      <ButtonProperty1Active
        text="Call now 1 (888) 664-1859"
        property1="active"
        className="!shrink-0 !text-xs lg:!text-sm !px-4 lg:!px-8"
      />
    </div>
  );
};
