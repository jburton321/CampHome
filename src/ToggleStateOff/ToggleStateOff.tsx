export interface IToggleStateOffProps {
  state?: "off" | "on";
  className?: string;
}

export const ToggleStateOff = ({
  state = "off",
  className,
  ...props
}: IToggleStateOffProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-neutral-500 rounded-[20px] pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex flex-row gap-1.5 items-center justify-end w-14 h-[22px] relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-tight font-semibold relative">
        No{" "}
      </div>
      <div
        className="bg-neutral-white rounded-[50%] shrink-0 w-6 h-6 absolute left-0 top-[50%]"
        style={{
          translate: "0 -50%",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
        }}
      ></div>
    </div>
  );
};
