export interface ISocialIconsProperty1FbProps {
  property1?: "fb" | "fb-hover" | "x" | "x-hover" | "ig" | "ig-hover";
  className?: string;
}

export const SocialIconsProperty1Fb = ({
  property1 = "fb",
  className,
  ...props
}: ISocialIconsProperty1FbProps): JSX.Element => {
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
        className="shrink-0 w-5 h-5 relative overflow-visible"
        style={{ aspectRatio: "1" }}
        src="ic-outline-facebook0.svg"
      />
    </div>
  );
};
