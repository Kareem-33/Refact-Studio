import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import ReactMarkdown from "react-markdown";
import { CalendarIcon, FolderIcon, PenIcon } from "lucide-react";
import Button from "../components/ui/Button";

const Article = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const article = articles.find((article) => article.slug === slug);

  useEffect(() => {
    if (article?.content) {
      fetch(article.content)
        .then((res) => res.text())
        .then((data) => setContent(data));
    }
  }, [article]);

  return (
    <div className="flex md:flex-row flex-col md:gap-[60px] items-start px-[30px] pb-[100px] md:p-[120px] md:pt-[60px] relative">
      <div className="md:w-[25%] w-full md:max-h-[calc(100vh-120px)] overflow-auto md:sticky top-[100px] space-y-[40px]">
        <div className="bg-surface rounded-[10px]  border border-border p-[20px] space-y-[20px]">
          <h3 className="text-xl font-semibold leading-[120%] border-b border-border pb-[20px]">
            Article Info
          </h3>
          <div className="flex flex-wrap items-center">
            <PenIcon size={16} strokeWidth={1.5} />
            <h4 className=" ml-[10px]">Author</h4>
            <p className="w-full text-text-muted">{article?.author}</p>
          </div>
          <div className="flex flex-wrap items-center">
            <CalendarIcon size={16} strokeWidth={1.5} />
            <h4 className=" ml-[10px]">Published</h4>
            <p className="w-full text-text-muted">{article?.date}</p>
          </div>
          <div className="flex flex-wrap items-center">
            <FolderIcon size={16} strokeWidth={1.5} />
            <h4 className=" ml-[10px]">Category</h4>
            <Link
              to={`/blog?category=${article?.category}`}
              className="w-full text-text-muted underline underline-offset-2"
            >
              {article?.category}
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="text-lg">Let’s build something better together</h3>
          <p className="text-text-muted text-sm mt-[5px]">
            Tell us about your project, goals, or existing website. We’ll review
            your requirements and get back to you with clear next steps.
          </p>
          <div className="mt-[10px] space-y-[10px]">
            <Button
              variant="small-ghost"
              className="text-sm!"
              onClick={() => navigate("/start-project")}
            >
              Start a Project
            </Button>
            <Button
              variant="small-ghost"
              className="text-sm!"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-[40px]">
        <div className="space-y-[15px]">
          <h1 className="text-3xl md:text-5xl font-semibold leading-[120%]">
            {article?.title}
          </h1>
          <p className="text-text-muted tracking-wide">
            {article?.description}
          </p>
        </div>
        <img src={article?.img} alt="" className="w-full rounded-[20px]" />
        <div className="prose prose-invert prose-headings:font-semibold prose-h1:text-3xl max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="md:hidden bg-surface p-[20px] rounded-[10px] border border-border mt-[60px]">
        <h3 className="text-lg">Let’s build something better together</h3>
        <p className="text-text-muted text-sm mt-[5px]">
          Tell us about your project, goals, or existing website. We’ll review
          your requirements and get back to you with clear next steps.
        </p>
        <div className="mt-[15px] flex gap-[10px]">
          <Button
            variant="small-ghost"
            className="text-sm! bg-elevated!"
            onClick={() => navigate("/start-project")}
          >
            Start a Project
          </Button>
          <Button
            variant="small-ghost"
            className="text-sm! bg-elevated!"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
