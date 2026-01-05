export interface IButtonProperty1HoverProps {
  text?: string;
  property1?: "dissable" | "active" | "white" | "hover";
  className?: string;
}

export const ButtonProperty1Hover = ({
  text = "Concept 01",
  property1 = "dissable",
  className,
  ...props
}: IButtonProperty1HoverProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bg-orange-500 rounded-[30px] pt-2.5 pr-8 pb-2.5 pl-8 flex flex-row gap-2.5 items-center justify-center relative cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:scale-95 active:shadow-inner " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold uppercase relative">
        {text}{" "}
      </div>
    </div>
  );
};
