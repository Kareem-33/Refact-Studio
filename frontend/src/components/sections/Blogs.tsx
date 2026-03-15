import SectionHeader from "../ui/SectionHeader";
import BlogCard from "../common/BlogCard";
import Button from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { articles } from "../../data/articles";

const Blogs = () => {

  const navigate = useNavigate();

  return (
    <div className="md:p-[120px] px-[30px] py-[100px] flex flex-col items-center justify-center gap-[60px] relative overflow-hidden">
      <SectionHeader
        label="ARTICLES & BLOGS"
        title="Thoughts on design, development, and performance"
        classname="w-[500px]"
      />
      <motion.div
        className="grid md:grid-cols-3 grid-cols-1 gap-[25px]"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        {articles.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </motion.div>
      <Button variant="secondary" className="-mt-[30px]" onClick={() => navigate("/blog")}>
        <p>Explore more articles</p>
        <ArrowRightIcon size={18} />
      </Button>
    </div>
  );
};

export default Blogs;
