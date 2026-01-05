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
    <header
      className={
        "bg-neutral-white rounded-xl pt-4 pb-4 px-4 lg:pt-8 lg:pb-5 flex flex-col lg:flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden gap-4 lg:gap-0 " +
        className
      }
      style={{ boxShadow: "0px 10px 30px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <img
        className="shrink-0 w-[140px] lg:w-[174.4px] h-auto relative overflow-visible"
        src="group-190.svg"
        alt="CampNow Logo"
      />
      <nav className="flex flex-row gap-4 lg:gap-8 items-center justify-center lg:justify-end shrink-0 relative flex-wrap">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavClick(item.id)}
            className={
              "flex flex-row gap-1 items-center justify-center shrink-0 relative cursor-pointer pb-1 " +
              (activeSection === item.id
                ? "border-solid border-orange-500 border-b-2"
                : "border-b-2 border-transparent")
            }
          >
            <span
              className={
                "text-left font-['Inter-Regular',_sans-serif] text-sm lg:text-text-sizes-text-regular leading-normal font-normal uppercase relative " +
                (activeSection === item.id
                  ? "text-orange-500"
                  : "text-color-scheme-1-text")
              }
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
      <ButtonProperty1Active
        text="Call now 1 (888) 664-1859"
        property1="active"
        className="!shrink-0 hidden lg:flex"
      />
    </header>
  );
};
