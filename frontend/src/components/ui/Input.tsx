import type { LucideIcon } from 'lucide-react'

type Props = {
  placeholder: string,
  label?: string,
  icon?: LucideIcon,
  className?: string,
  type?: string
}

const Input = ({type="text", ...props}: Props) => {
  return (
    <label className={`${props.className} hover:cursor-text`}>
      <p className='text-sm text-text-muted'>{props.label}</p>
      <div className='text-text-primary w-full border border-soft-border flex items-center gap-[7px] p-[7px] bg-surface rounded-[5px]'>
        {props.icon && 
          <div>
            <props.icon className='text-text-disabled w-[20px]'/>
          </div>
        }
        <input type={type} placeholder={props.placeholder} className={`border-none outline-none`}/>
      </div>
    </label>
  )
}

export default Input