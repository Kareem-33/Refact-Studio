import { MailIcon, PhoneIcon } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaX,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/",
    },
    {
      icon: FaXTwitter,
      link: "https://www.x.com/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/",
    },
    {
      icon: FaWhatsapp,
      link: "https://www.whatsapp.com/",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="flex flex-col h-[410px] w-full bg-surface">
      <div className="flex items-start justify-between py-[60px] px-[120px] h-full">
        {/* Logo */}
        <div className="flex flex-col items-start gap-[20px] w-[320px]">
          <img src="/images/logo.svg" alt="logo" className="h-[80px]" />
          <p className="text-sm font-normal tracking-wide text-text-muted">
            Designing, building, and refactoring modern web systems.
          </p>
        </div>
        {/* Links */}
        <nav className="space-y-[15px]">
          <h4 className="text-base font-semibold">Services</h4>
          <ul className="space-y-[10px] text-sm font-normal text-text-secondary">
            <li>
              <Link to="">Web Design & UI/UX</Link>
            </li>
            <li>
              <Link to="">Web Development</Link>
            </li>
            <li>
              <Link to="">Website Refactoring</Link>
            </li>
            <li>
              <Link to="">SEO & Performance</Link>
            </li>
            <li>
              <Link to="">Web Applications</Link>
            </li>
            <li>
              <Link to="">Design Systems</Link>
            </li>
          </ul>
        </nav>
        <nav className="space-y-[15px]">
          <h4 className="text-base font-semibold">Company</h4>
          <ul className="space-y-[10px] text-sm font-normal text-text-secondary">
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Our Process</Link>
            </li>
            <li>
              <Link to="">Our Work</Link>
            </li>
            <li>
              <Link to="">Testimonials</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="space-y-[15px]">
          <h4 className="text-base font-semibold">Resources</h4>
          <ul className="space-y-[10px] text-sm font-normal text-text-secondary">
            <li>
              <Link to="">Insights / Blog</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
          </ul>
        </nav>
        {/* Contact */}
        <div className="flex flex-col gap-[20px] p-[20px] rounded-[10px] bg-background w-[325px]">
          <div className="space-y-[10px] text-sm text-text-muted">
            <h4 className="font-semibold text-base tracking-wide text-text-primary">
              Get in touch
            </h4>
            <div className="flex items-center gap-[10px]">
              <PhoneIcon size={16} strokeWidth={1.5} />
              <p>+20 155 7337 236</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <MailIcon size={16} strokeWidth={1.5} />
              <a className="underline" href="/">
                support@refactstudio.com
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="w-[35px] h-[35px] border border-text-primary rounded-[7px] flex items-center
                justify-center hover:bg-text-primary hover:text-background transition-all duration-300
                ease-in-out"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-text-disabled">Need Some Help? <Link to="/contact-us" className="underline">Contact Us</Link></p>
        </div>
      </div>
      <div className="bg-elevated border-t border-border flex items-center justify-center h-[70px] w-full text-sm font-normal text-text-muted">
        © 2026 Refact Studio. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
