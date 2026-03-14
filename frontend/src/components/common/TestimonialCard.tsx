import Pill from '../ui/Pill'
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {
  rate: number,
  review: string,
  name: string,
  position: string,
  profilePicture: string,
}

const TestimonialCard = (props: Props) => {
  return (
    <div className='bg-surface border border-border rounded-[10px] md:w-[500px] h-fit flex flex-col'>
      <div className='flex items-start justify-between h-fit p-[20px] pb-0'>
        <FaQuoteLeft className='fill-primary/50 w-[30px] h-[30px]' />
        <Pill>{props.rate}/10 Overall</Pill>
      </div>
      <p className='p-[20px] text-base font-normal leading-[150%] tracking-wide flex-1 '>{props.review}</p>
      <div className='flex items-center justify-start gap-[10px] p-[20px] border-t border-border'>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
          <img src={props.profilePicture} alt={props.name} className='w-full h-full' />
        </div>
        <div>
          <p className='font-semibold'>{props.name}</p>
          <p className='text-text-muted text-sm'>{props.position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard