import PageHeader from "../components/ui/PageHeader";
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { socials } from "../components/data/socialMedia";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import ContactBanner from "../components/sections/ContactBanner";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

const ContactUs = () => {

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <PageHeader
        label="CONTACT"
        title="Get in touch"
        subtitle="For general questions, clarifications, or anything that doesn’t require a full project brief."
      />
      <div className="flex gap-[30px] p-[120px] justify-stretch">
        <div className="flex-1 flex flex-col gap-[20px] p-[20px] bg-surface border border-border rounded-[15px]">
          <h3 className="text-xl font-semibold tracking-wide">Contact Info</h3>
          <hr className="border-border" />
          <div className="flex gap-[10px] p-[10px] rounded-[10px] bg-elevated border border-border">
            <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[5px] bg-border border border-soft-border">
              <MapPinIcon size={24} className="stroke-primary" />
            </div>
            <div>
              <p>Address</p>
              <p className="text-sm text-text-muted">
                Egypt, Giza, 6th of October
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] p-[10px] rounded-[10px] bg-elevated border border-border">
            <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[5px] bg-border border border-soft-border">
              <PhoneIcon size={24} className="stroke-primary" />
            </div>
            <div>
              <p>Phone</p>
              <p className="text-sm text-text-muted">+20 155 7337 236</p>
            </div>
          </div>
          <div className="flex gap-[10px] p-[10px] rounded-[10px] bg-elevated border border-border">
            <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[5px] bg-border border border-soft-border">
              <MailIcon size={24} className="stroke-primary" />
            </div>
            <div>
              <p>Email</p>
              <p className="text-sm text-text-muted">hello@refactstudio.com</p>
            </div>
          </div>
          <div className="space-y-[10px] mt-auto">
            <div className="space-y-[10px] p-[10px] rounded-[10px] bg-elevated border-border border">
              <p>Social Media</p>
              <div className="flex items-center gap-[10px]">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="w-[35px] h-[35px] border border-text-muted rounded-[7px] flex items-center
                      justify-center hover:bg-text-muted hover:text-background text-text-muted
                      transition-all duration-300 ease-in-out"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <p className=" text-text-disabled">
              For project inquiries, please use the{" "}
              <Link to={"/start-project"} className="text-text-muted underline">
                Start a project page.
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-center">
          <div className="bg-border w-[1px] h-full flex-1" />
          <p className="text-soft-border">OR</p>
          <div className="bg-border w-[1px] h-full flex-1" />
        </div>
        <div className="flex-1 flex flex-col gap-[20px] p-[20px] bg-surface border border-border rounded-[15px]">
          <h3 className="text-xl font-semibold tracking-wide">Send Direct Message</h3>
          <hr className="border-border" />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
            <Input placeholder="John Doe" label="Full Name" register={register("fullName", { required: true })} />
            <Input placeholder="example@domain.com" label="Email" register={register("email", { required: true })} />
            <TextArea placeholder="Your question or message goes here..." label="Message" register={register("message", { required: true })} className="min-h-[170px]" />
            <Button variant="small-ghost" type="submit" className="ml-auto">
              Send Message
              <ArrowRightIcon size={20} />
            </Button>
          </form>
        </div>
      </div>
      <ContactBanner type="project"/>
    </div>
  );
};

export default ContactUs;
