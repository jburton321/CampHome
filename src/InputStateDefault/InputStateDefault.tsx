import { ToggleStateOff } from "../ToggleStateOff/ToggleStateOff";

export interface IInputStateDefaultProps {
  text?: string;
  showToggle?: boolean;
  state?: "default" | "hover" | "filled" | "focus";
  className?: string;
}

export const InputStateDefault = ({
  text = "Owner’s First Name*",
  showToggle = true,
  state = "default",
  className,
  ...props
}: IInputStateDefaultProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-[#ffffff] rounded-md border-solid border-[#e0e0e1] border p-3 flex flex-row gap-2 items-center justify-start h-12 relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-grey-text text-left font-['Montserrat-Regular',_sans-serif] text-xs leading-tight font-normal relative flex-1">
        {text}{" "}
      </div>
      {showToggle && (
        <>
          <ToggleStateOff className="!shrink-0"></ToggleStateOff>
        </>
      )}
    </div>
  );
};
