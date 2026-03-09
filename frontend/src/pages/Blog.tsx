import React, { useEffect, useMemo } from "react";
import PageHeader from "../components/ui/PageHeader";
import { useSearchParams } from "react-router-dom";
import { articles } from "../data/articles";
import TabPill from "../components/ui/TabPill";
import Input from "../components/ui/Input";
import { SearchIcon } from "lucide-react";
import BlogCard from "../components/common/BlogCard";
import { scroller } from "react-scroll";
import ContactBanner from "../components/sections/ContactBanner";

const articleCategories = [
  "all",
  "performance",
  "refactoring",
  "ui / ux",
  "technical seo",
  "development",
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const articlesPerPage = 9;

  const page = searchParams.get("page") ?? "1";
  const category = searchParams.get("category") ?? "all";
  const search = searchParams.get("search") ?? "";

  useEffect(() => {
    if (!searchParams.toString()) {
      setSearchParams({
        page: "1",
        category: "all",
        search: "",
      });
    }
  }, [searchParams, setSearchParams]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        category === "all" || article.category === category;

      const matchesSearch =
        query === "" ||
        [
          article.title,
          article.description,
          article.author,
          article.category,
        ].some((field) => field.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const totalPages = Math.ceil(filtered.length / articlesPerPage);

  useEffect(() => {
    if (+page > totalPages && totalPages > 0) {
      setSearchParams({
        page: "1",
        category,
        search,
      });
    }
  }, [page, totalPages, category, search, setSearchParams]);

  const paginatedArticles = useMemo(() => {
    const start = (+page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    return filtered.slice(start, end);
  }, [filtered, page]);

  const handleCategoryChange = (category: string) => {
    setSearchParams({
      page: "1",
      category,
      search,
    });
  };

  const handleSearchChange = (search: string) => {
    setSearchParams({
      page: "1",
      category,
      search,
    });
  };

  return (
    <div>
      <PageHeader
        label="Blog"
        title="Thoughts on design, development, and performance"
        subtitle="Thoughts on design, development, and performance"
      />

      <div
        className="flex flex-col gap-[40px] p-[120px] pt-[40px] w-full h-fit"
        id="section"
      >
        <div className="flex items-center justify-between pb-[40px] gap-[40px]">
          <div className="flex flex-wrap gap-[10px] flex-1">
            {articleCategories.map((articleCategory) => (
              <TabPill
                key={articleCategory}
                active={category === articleCategory}
                onClick={() => handleCategoryChange(articleCategory)}
              >
                {articleCategory.charAt(0).toUpperCase() +
                  articleCategory.slice(1).toLowerCase()}
              </TabPill>
            ))}
          </div>
          <Input
            placeholder="Search..."
            className="w-[320px]!"
            icon={SearchIcon}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <p>
          Showing{" "}
          {filtered.length === 0 ? 0 : (+page - 1) * articlesPerPage + 1}–
          {Math.min(+page * articlesPerPage, filtered.length)} of{" "}
          {filtered.length} articles
        </p>
        <div className="grid grid-cols-3 gap-[25px]">
          {paginatedArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
        <div>
          {totalPages > 1 && (
            <div className="flex gap-[10px] items-center justify-center">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchParams({
                      page: String(index + 1),
                      category,
                      search,
                    });
                    scroller.scrollTo("section", {
                      delay: 0,
                      smooth: "easeInOut",
                      offset: -80,
                    });
                  }}
                  className={`h-[40px] w-[40px] flex items-center justify-center  border
                          border-border rounded-full cursor-pointer transition-all duration-300
                          ${+page === index + 1 ? "bg-primary/25 text-primary" : "bg-surface text-text-disabled hover:bg-border"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <ContactBanner />
    </div>
  );
};

export default Blog;
