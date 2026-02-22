import Label from './Label'

type Props = {
  label: string;
  title: string;
  classname?: string;
  dir?: "left" | "right" | "center";
};

const SectionHeader = ({label, title, classname, dir="center"}: Props) => {
  return (
    <div className={`flex flex-col justify-center ${dir === "center" && "items-center text-center"} w-[440px] gap-[20px] ${classname || ""}`}>
      <Label>{label}</Label>
      <h2 className="text-[32px] font-medium leading-[120%] tracking-normal w-full">{title}</h2>
    </div>
  )
}

export default SectionHeader