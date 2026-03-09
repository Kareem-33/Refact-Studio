import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  options: Array<string>;
  children?: React.ReactNode;
  className?: string;
  name?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
};

const Select = ({ required = true, register, ...props }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <label className="hover:cursor-pointer relative">
        <p
          className="text-text-muted text-sm mb-[5px]"
          onClick={() => {
            if (open) {
              selectRef.current?.blur();
              setOpen(false);
            } else {
              selectRef.current?.focus();
              setOpen(true);
            }
          }}
        >
          {props.label} {!required && "(Optional)"}
        </p>
        <select
          name={props.name}
          hidden
          {...register}
          value={selected !== -1 ? props.options[selected] : ""}
        >
          <option value="" disabled hidden />
          {props.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div
          ref={selectRef}
          tabIndex={0}
          onBlur={() => setOpen(false)}
          onClick={() => setOpen(!open)}
          className="rounded-[5px] outline-0 outline-primary/15 focus:outline-5 transition-all duration-300 ease-in-out"
        >
          <div
            className={`p-[7px] border border-soft-border rounded-[5px]
              ${open ? "bg-surface" : "bg-elevated"}
              ${selected != -1 ? "text-text-primary" : "text-text-disabled"}
              flex items-center justify-between transition-all duration-300 ease-in-out`}
          >
            {selected !== -1 ? props.options[selected] : props.placeholder}
            <ChevronDown
              size={20}
              className={`${open ? "rotate-180" : ""} transition-all duration-300 ease-in-out text-text-disabled`}
            />
          </div>
          {open && (
            <div className="absolute top-[100%] bg-surface border border-soft-border rounded-[5px] divide-y divide-soft-border">
              {props.options.map((option, index) => (
                <div
                  key={index}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setSelected(index);
                    setOpen(false);

                    register?.onChange({
                      target: {
                        name: props.name,
                        value: option,
                      },
                    });
                  }}
                  className="p-[10px] hover:bg-elevated cursor-pointer transition-all duration-300 ease-in-out"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Select;
