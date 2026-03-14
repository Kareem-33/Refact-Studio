import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import {
  BadgeQuestionMarkIcon,
  BriefcaseBusinessIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  CircleQuestionMarkIcon,
  CircleUserIcon,
  HomeIcon,
  MenuIcon,
  NewspaperIcon,
  PersonStandingIcon,
  PhoneIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { servicesArr } from "../sections/Services";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
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

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoved(true);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`flex w-full justify-between items-center px-[30px] md:px-[120px] sticky top-0 z-50 ${scrolled || menuOpen ? "bg-surface h-[80px]! shadow-primary/5 shadow-xl border-b border-border" : "h-[150px]! border-b border-transparent"} transition-all duration-300`}
    >
      <Link
        to="/"
        className={`${scrolled || menuOpen ? "h-[40px]!" : "h-[50px]!"} transition-all duration-300`}
      >
        <img src="./images/logo.svg" alt="Logo" className="h-full" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex justify-center items-center gap-[35px] font-medium">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => mouseMoved && setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <Link
              to={"/services"}
              className="cursor-pointer flex items-center gap-1 hover:text-primary-tint transition-all duration-300 ease-in-out cursor-default"
            >
              Services
              <ChevronDownIcon size={18} />
            </Link>
            <motion.div
              className="absolute z-50 bg-surface rounded-[10px] shadow-lg top-full left-0 mt-2 border border-border w-fit"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: servicesMenuOpen ? 1 : 0,
                y: servicesMenuOpen ? 0 : -10,
                display: servicesMenuOpen ? "flex" : "none",
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: servicesMenuOpen ? 0 : 0.2,
              }}
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
                  <li key={index} className="w-[250px]">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-[10px] p-[10px] bg-elevated border border-border rounded-[5px] font-normal text-sm hover:bg-primary/15 transition-all duration-300"
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center bg-surface border border-border rounded-[5px]">
                        <service.icon size={20} className="text-primary" />
                      </div>
                      <span className="flex-1">{service.title}</span>
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
      <Button
        className={`${scrolled && "h-[36px]"} hidden md:flex`}
        onClick={() => navigate("/start-project")}
      >
        Start a Project
      </Button>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${scrolled || menuOpen ? "p-[10px] bg-elevated border border-border rounded-md" : "border-0 border-border"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon size={24} />
      </div>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: menuOpen ? 1 : 0, display: menuOpen ? "block" : "none" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed bg-black/75 z-40 w-[100%] h-[calc(100vh-80px)] ${menuOpen ? "top-[80px]" : "top-[150px]"} left-0 transition-all duration-300 ease-in-out`}
        onClick={() => setMenuOpen(false)}
      />
      <motion.div
        initial={{ x: "100%", display: "none" }}
        animate={{
          x: menuOpen ? 0 : "100%",
          display: menuOpen ? "block" : "none",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-[calc(100vh-80px)] overflow-auto w-[70%] absolute bg-surface border-l border-t border-border top-full right-0 z-50"
      >
        <nav>
          <ul className="flex flex-col justify-start items-start font-medium divide-y divide-border">
            <li className={`navbar-item-mobile ${pathname === "/" && "bg-primary/15"}`}>
              <Link to="/" className="flex gap-[10px] items-center">
                <HomeIcon size={18} className="stroke-text-disabled" />
                Home
              </Link>
            </li>
            <li
              className={`w-full relative ${pathname === "/services/" && "bg-primary/15"}`}
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
            >
              <div className="cursor-pointer p-[20px] flex items-center gap-[10px] hover:text-primary-tint transition-all duration-300 ease-in-out cursor-default">
                <StarIcon size={18} className="stroke-text-disabled" />
                Services
                <ChevronDownIcon size={18} className={`${servicesMenuOpen && "-rotate-180"} transition-all duration-300 ease-in-out`} />
              </div>
              <motion.ul
                initial= {{ height: 0 }}
                animate={{
                  height: servicesMenuOpen ? "auto" : 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              className="overflow-hidden">
                <div className="flex flex-col bg-elevated text-text-muted divide-y divide-soft-border">
                  {servicesArr.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-[10px] p-[20px] transition-all duration-300"
                      >
                        {/* <div className="w-[40px] h-[40px] flex items-center justify-center bg-elevated border border-border rounded-[5px]"> */}
                          <service.icon size={18} />
                        {/* </div> */}
                        <span className="flex-1">{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </div>
              </motion.ul>
            </li>
            <li className={`navbar-item-mobile ${pathname === "/work" && "bg-primary/15"}`}>
              <Link to="/work" className="flex gap-[10px] items-center">
                <BriefcaseBusinessIcon
                  size={18}
                  className="stroke-text-disabled"
                />
                Work
              </Link>
            </li>
            <li className={`navbar-item-mobile ${pathname === "/about-us" && "bg-primary/15"}`}>
              <Link to="/about-us" className="flex gap-[10px] items-center">
                <CircleUserIcon size={18} className="stroke-text-disabled" />
                About Us
              </Link>
            </li>
            <li className={`navbar-item-mobile ${pathname === "/blog" && "bg-primary/15"}`}>
              <Link to="/blog" className="flex gap-[10px] items-center">
                <NewspaperIcon size={18} className="stroke-text-disabled" />
                Blog
              </Link>
            </li>
            <li className={`navbar-item-mobile ${pathname === "/faq" && "bg-primary/15"}`}>
              <Link to="/faq" className="flex gap-[10px] items-center">
                <CircleQuestionMarkIcon
                  size={18}
                  className="stroke-text-disabled"
                />
                FAQ
              </Link>
            </li>
            <li className={`navbar-item-mobile ${pathname === "/contact-us" && "bg-primary/15"}`}>
              <Link to="/contact-us" className="flex gap-[10px] items-center">
                <PhoneIcon size={18} className="stroke-text-disabled" />
                Contact Us
              </Link>
            </li>
            <li className="navbar-item-mobile bg-primary">
              <Link
                to="/start-project"
                className="flex gap-[10px] items-center"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
