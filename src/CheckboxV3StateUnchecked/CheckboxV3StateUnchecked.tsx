export interface ICheckboxV3StateUncheckedProps {
  state?: "checked" | "unchecked" | "hover" | "hover-checked";
  className?: string;
}

export const CheckboxV3StateUnchecked = ({
  state = "checked",
  className,
  ...props
}: ICheckboxV3StateUncheckedProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <img
      className={
        "shrink-0 w-6 h-6 relative overflow-visible " +
        className +
        " " +
        variantsClassName
      }
      src="checkbox-v-3-state-unchecked.svg"
    />
  );
};
