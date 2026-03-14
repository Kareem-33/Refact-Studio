import Label from "../ui/Label";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="px-[30px] md:px-[120px] py-[40px] md:py-[80px] flex justify-between items-start overflow-x-hidden">
      <motion.div
        className="space-y-[40px] w-[580px]"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="space-y-[24px]">
          <div className="space-y-[16px]">
            <Label>DIGITAL DESIGN & DEVELOPMENT STUDIO</Label>
            <h1 className="text-[42px] md:text-[56px] font-medium leading-[120%] bg-linear-180 from-text-primary to-text-muted bg-clip-text text-transparent">
              We Build, Upgrade, and{" "}
              <span className="text-primary-soft">Refactor</span> Digital
              Experiences
            </h1>
          </div>
          <p className="md:text-lg leading-[150%] font-normal text-text-secondary tracking-wide">
            Refact Studio is a web design and programming agency focused on
            building fast, scalable, and maintainable websites for modern
            businesses.
          </p>
        </div>
        <div className="flex items-center gap-[10px] md:gap-[24px]">
          <Button variant="primary">Start a Project</Button>
          <Button variant="secondary">View Our Work</Button>
        </div>
      </motion.div>
      <motion.div
        className="w-[480px] md:block hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <svg
          width="490"
          height="540"
          viewBox="0 0 490 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.06" width="245" height="8" rx="4" fill="#FAFBFC" />
          <rect
            opacity="0.12"
            y="32"
            width="368"
            height="8"
            rx="4"
            fill="#3566B0"
          />
          <rect
            opacity="0.12"
            y="64"
            width="306"
            height="8"
            rx="4"
            fill="#F5C26B"
          />
          <rect
            opacity="0.06"
            y="96"
            width="184"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.12"
            y="128"
            width="306"
            height="8"
            rx="4"
            fill="#3566B0"
          />
          <rect
            x="0.5"
            y="176.5"
            width="234"
            height="363"
            rx="11.5"
            stroke="#FAFBFC"
            stroke-opacity="0.05"
          />
          <circle opacity="0.06" cx="56.5" cy="232.5" r="36.5" fill="#FAFBFC" />
          <rect
            opacity="0.06"
            x="103"
            y="219.5"
            width="112"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.12"
            x="103"
            y="237.5"
            width="77"
            height="8"
            rx="4"
            fill="#3566B0"
          />
          <rect
            opacity="0.06"
            x="50"
            y="351.5"
            width="135"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="20"
            y="369.5"
            width="195"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.12"
            x="82"
            y="387.5"
            width="71"
            height="8"
            rx="4"
            fill="#3566B0"
          />
          <rect
            opacity="0.06"
            x="20"
            y="478"
            width="58.3333"
            height="42"
            rx="5"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="88.3333"
            y="478"
            width="58.3333"
            height="42"
            rx="5"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="156.667"
            y="478"
            width="58.3333"
            height="42"
            rx="5"
            fill="#FAFBFC"
          />
          <rect
            x="255.5"
            y="176.5"
            width="234"
            height="363"
            rx="11.5"
            stroke="#FAFBFC"
            stroke-opacity="0.05"
          />
          <rect
            opacity="0.06"
            x="275"
            y="196"
            width="195"
            height="101"
            rx="10"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="275"
            y="313"
            width="195"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.12"
            x="275"
            y="331"
            width="77"
            height="8"
            rx="4"
            fill="#3566B0"
          />
          <rect
            opacity="0.06"
            x="275"
            y="392.5"
            width="195"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="275"
            y="410.5"
            width="195"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="275"
            y="428.5"
            width="140"
            height="8"
            rx="4"
            fill="#FAFBFC"
          />
          <rect
            opacity="0.06"
            x="276"
            y="491"
            width="77"
            height="28"
            rx="4"
            stroke="#FAFBFC"
            stroke-width="2"
          />
          <rect
            opacity="0.06"
            x="364"
            y="490"
            width="106"
            height="30"
            rx="5"
            fill="#FAFBFC"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
