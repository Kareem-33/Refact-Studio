import Label from './Label'

type Props = {
  label: string;
  title: string;
  classname?: string;
  dir?: "left" | "right" | "center";
};

const SectionHeader = ({label, title, classname, dir="center"}: Props) => {
  return (
    <div className={`flex flex-col justify-center ${dir === "center" && "items-center text-center"}  w-[300px] max-w-full md:w-[440px] gap-[20px] ${classname || ""}`}>
      <Label>{label}</Label>
      <h2 className="text-[28px] md:text-[32px] font-medium leading-[130%] md:leading-[120%] tracking-normal w-full">{title}</h2>
    </div>
  )
}

export default SectionHeader