export interface IButtonProperty1WhiteProps {
  text?: string;
  property1?: "dissable" | "active" | "white" | "hover";
  className?: string;
}

export const ButtonProperty1White = ({
  text = "Concept 01",
  property1 = "dissable",
  className,
  ...props
}: IButtonProperty1WhiteProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bg-neutral-white rounded-[30px] pt-2.5 pr-8 pb-2.5 pl-8 flex flex-row gap-2.5 items-center justify-center relative cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-50 active:scale-95 active:shadow-inner min-h-[44px] " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-orange-500 text-left font-['Inter-Bold',_sans-serif] text-sm font-bold uppercase relative">
        {text}{" "}
      </div>
    </div>
  );
};
