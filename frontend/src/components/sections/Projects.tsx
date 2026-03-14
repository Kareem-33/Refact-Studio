import { useEffect, useMemo } from "react";
import TabPill from "../../components/ui/TabPill";
import Input from "../../components/ui/Input";
import { SearchIcon } from "lucide-react";
import BigProjectCard from "../../components/common/BigProjectCard";
import { useSearchParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { scroller } from "react-scroll";

const projectCategories = ["all", "health", "ecommerce", "dashboard"];

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const projectsPerPage = 4;

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

    return projects.filter((project) => {
      const matchesCategory =
        category === "all" || project.category === category;

      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.deliverables.some((d) => d.toLowerCase().includes(query)) ||
        project.techStack.some((t) => t.toLowerCase().includes(query)) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, category, search]);

  const totalPages = Math.ceil(filtered.length / projectsPerPage);

  useEffect(() => {
    if (+page > totalPages && totalPages > 0) {
      setSearchParams({
        page: "1",
        category,
        search,
      });
    }
  }, [page, totalPages, category, search, setSearchParams]);

  const paginatedProjects = useMemo(() => {
    const start = (+page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
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
    <div
      className="flex flex-col gap-[40px] md:p-[120px] px-[30px] pt-[40px] pb-[100px] w-full h-fit"
      id="section"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pb-[40px] gap-[40px]">
        <div className="flex flex-wrap gap-[10px] flex-1">
          {projectCategories.map((projectCategory) => (
            <TabPill
              key={projectCategory}
              active={category === projectCategory}
              onClick={() => handleCategoryChange(projectCategory)}
            >
              {projectCategory.charAt(0).toUpperCase() + projectCategory.slice(1).toLowerCase()}
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
        Showing {filtered.length === 0 ? 0 : (+page - 1) * projectsPerPage + 1}–
        {Math.min(+page * projectsPerPage, filtered.length)} of{" "}
        {filtered.length} projects
      </p>
      <div className="flex flex-col gap-[40px]">
        {paginatedProjects.map((project, index) => (
          <BigProjectCard
            key={project.id}
            {...project}
            reverse={index % 2 !== 0}
          />
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
  );
};

export default Projects;
