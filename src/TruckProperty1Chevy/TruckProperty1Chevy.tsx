export interface ITruckProperty1ChevyProps {
  property1?: "chevy" | "dodge" | "ford";
  className?: string;
}

export const TruckProperty1Chevy = ({
  property1 = "chevy",
  className,
  ...props
}: ITruckProperty1ChevyProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "flex flex-col gap-0 items-center justify-start shrink-0 h-[auto] relative overflow-visible " +
        className +
        " " +
        variantsClassName
      }
      src="truck-property-1-chevy.svg"
    />
  );
};
