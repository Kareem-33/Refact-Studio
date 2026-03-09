import type { LucideIcon } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  placeholder?: string;
  label?: string;
  icon?: LucideIcon;
  className?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  register,
  required = true,
  ...props
}: Props) => {
  const Icon = props.icon;

  return (
    <label
      className={`${props.className ?? ""} hover:cursor-text space-y-[5px] w-full`}
    >
      {props.label && (
        <p className="text-sm text-text-muted">
          {props.label} {!required && "(Optional)"}
        </p>
      )}

      <div
        className="text-text-primary w-full border border-soft-border flex items-center
          gap-[7px] p-[7px] bg-elevated rounded-[5px] outline-0 outline-primary/15 focus-within:outline-5
          transition-all duration-300 ease-in-out"
      >
        {Icon && (
          <div>
            <Icon className="text-text-disabled w-[20px]" />
          </div>
        )}

        <input
          type={type}
          placeholder={props.placeholder}
          className="border-none outline-none w-full"
          {...register}
          onChange={props.onChange}
        />
      </div>
    </label>
  );
};

export default Input;
