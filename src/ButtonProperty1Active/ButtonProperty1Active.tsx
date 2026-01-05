export interface IButtonProperty1ActiveProps {
  text?: string;
  property1?: "dissable" | "active" | "white" | "hover";
  className?: string;
  onClick?: () => void;
}

export const ButtonProperty1Active = ({
  text = "Concept 01",
  property1 = "dissable",
  className,
  onClick,
  ...props
}: IButtonProperty1ActiveProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "bg-yellow-500 rounded-[30px] pt-2.5 pr-8 pb-2.5 pl-8 flex flex-row gap-2.5 items-center justify-center relative cursor-pointer hover:brightness-110 transition " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold uppercase relative">
        {text}{" "}
      </span>
    </button>
  );
};
