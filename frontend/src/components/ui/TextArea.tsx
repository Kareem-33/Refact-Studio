import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  placeholder: string;
  label?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
};

const TextArea = ({ register, required = true, ...props }: Props) => {
  return (
    <label className={` hover:cursor-text space-y-[5px]`}>
      <p className="text-sm text-text-muted">{props.label} {!required && "(Optional)"}</p>
      <textarea
        placeholder={props.placeholder}
        className={`min-h-[170px] ${props.className} outline-none w-full text-text-primary border p-[7px] border-soft-border bg-elevated rounded-[5px]`}
        {...register}
      />
    </label>
  );
};

export default TextArea;
