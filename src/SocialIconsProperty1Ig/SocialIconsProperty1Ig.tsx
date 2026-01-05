export interface ISocialIconsProperty1IgProps {
  property1?: "fb" | "fb-hover" | "x" | "x-hover" | "ig" | "ig-hover";
  className?: string;
}

export const SocialIconsProperty1Ig = ({
  property1 = "fb",
  className,
  ...props
}: ISocialIconsProperty1IgProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rounded flex flex-row gap-2.5 items-center justify-center w-6 h-6 relative " +
        className +
        " " +
        variantsClassName
      }
      style={{ aspectRatio: "1" }}
    >
      <img
        className="shrink-0 w-5 h-5 relative overflow-visible"
        style={{ aspectRatio: "1" }}
        src="ri-instagram-fill0.svg"
      />
    </div>
  );
};
