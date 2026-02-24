import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ChevronDownIcon, StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { servicesArr } from "../sections/Services";

const Navbar = () => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center px-[120px] sticky top-0 z-50 ${scrolled ? "bg-surface h-[80px]! shadow-primary/5 shadow-xl border-b border-border" : "h-[150px]! border-b border-transparent"} transition-all duration-300`}
    >
      <Link
        to="/"
        className={`${scrolled ? "h-[40px]!" : "h-[60px]!"} transition-all duration-300`}
      >
        <img src="./images/logo.svg" alt="Logo" className="h-full" />
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-[35px] font-medium">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-primary-tint transition-all duration-300 ease-in-out cursor-default">
              Services
              <ChevronDownIcon size={18} />
            </div>
            <motion.div
              className="absolute z-50 bg-surface rounded-[10px] shadow-lg top-full left-0 mt-2 border border-border w-fit"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: servicesMenuOpen ? 1 : 0,
                y: servicesMenuOpen ? 0 : -10,
                display: servicesMenuOpen ? "flex" : "none",
              }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: servicesMenuOpen ? 0 : 0.2 }}
            >
              <div className="bg-elevated p-[20px] flex flex-col gap-[10px] w-[200px] rounded-l-[10px]">
                <div className="flex items-center gap-[10px]">
                  <StarIcon
                    size={18}
                    className="fill-accent-hover"
                    strokeWidth={0}
                  />
                  <h3 className="font-semibold text-base">Our Services</h3>
                </div>
                <p className="text-sm font-normal leading-[150%] tracking-wide text-text-muted">
                  Comprehensive digital solutions to transform your business
                </p>
              </div>
              <ul className="rounded-r-[10px] flex flex-col gap-[15px] p-[15px]">
                {servicesArr.map((service, index) => (
                  <li
                    key={index}
                    className="w-[250px]"
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-[10px] p-[10px] bg-elevated border border-border rounded-[5px] font-normal text-sm hover:bg-primary/15 transition-all duration-300"
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center bg-surface border border-border rounded-[5px]">
                        <service.icon size={20} className="text-primary" />
                      </div>
                      <span className="flex-1">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
          <li className="navbar-item">
            <Link to="/work">Work</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Button className={`${scrolled && "h-[36px]"}`}>Start a Project</Button>
    </header>
  );
};

export default Navbar;
