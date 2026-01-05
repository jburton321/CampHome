import { ButtonProperty1Active } from "../../ButtonProperty1Active/ButtonProperty1Active";

export interface INavbarProps {
  className?: string;
  activeSection?: string;
  onNavClick?: (section: string) => void;
}

export const Navbar = ({
  className,
  activeSection = "home",
  onNavClick,
}: INavbarProps): JSX.Element => {
  const handleNavClick = (section: string) => {
    if (onNavClick) {
      onNavClick(section);
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "deals", label: "Deals" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div
      className={
        "bg-neutral-white rounded-xl pt-8 pb-5 flex flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden " +
        className
      }
      style={{ boxShadow: "0px 10px 30px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <img
        className="shrink-0 w-[174.4px] h-[31.18px] relative overflow-visible"
        src="group-190.svg"
        alt=""
      />
      <div className="flex flex-row gap-8 items-center justify-end shrink-0 relative">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={
              "flex flex-row gap-1 items-center justify-center shrink-0 relative cursor-pointer " +
              (activeSection === item.id
                ? "border-solid border-orange-500 border-b-2"
                : "")
            }
          >
            <div
              className={
                "text-left font-['Inter-Regular',_sans-serif] text-text-sizes-text-regular leading-normal font-normal uppercase relative " +
                (activeSection === item.id
                  ? "text-orange-500"
                  : "text-color-scheme-1-text")
              }
            >
              {item.label}{" "}
            </div>
          </div>
        ))}
      </div>
      <ButtonProperty1Active
        text="Call now 1 (888) 664-1859"
        property1="active"
        className="!shrink-0"
      />
    </div>
  );
};
