export interface ISocialIconsProperty1XProps {
  property1?: "fb" | "fb-hover" | "x" | "x-hover" | "ig" | "ig-hover";
  className?: string;
}

export const SocialIconsProperty1X = ({
  property1 = "fb",
  className,
  ...props
}: ISocialIconsProperty1XProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rounded flex flex-row gap-2.5 items-center justify-center w-11 h-11 lg:w-6 lg:h-6 relative cursor-pointer transition-all duration-300 ease-out hover:opacity-70 hover:scale-110 " +
        className +
        " " +
        variantsClassName
      }
      style={{ aspectRatio: "1" }}
    >
      <img
        className="shrink-0 w-[18px] h-[18px] relative overflow-visible"
        style={{ aspectRatio: "1" }}
        src="fa-7-brands-square-x-twitter0.svg"
      />
    </div>
  );
};
