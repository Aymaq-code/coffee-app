import { NavLink, useParams } from "react-router-dom";
import { useNav } from "../contexts/CoffeeContext";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import BlogPageElementor from "./BlogPageElementor";
import EmptyMsg from "../errors/EmptyMsg";

export default function BlogPageDynamic() {
  const { blog, readMore, handleReadMore } = useNav();
  const { pageNo } = useParams();

  if (blog.length === 0) return <EmptyMsg />;

  const currentPage = parseInt(pageNo) || 1;

  const postsPerPage = 4;
  const totalPages = Math.ceil(blog.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blog.slice(startIndex, endIndex);

  return (
    <main className="blogPages">
      <div className="blogPages__contents">
        <div className="blogPages__contents__left">
          {currentPosts.map((details) => (
            <div className="blogPages__contents__left-box " key={details.id}>
              <div className="blogPages__contents__left-box--image">
                <img src={details.image} alt="img2" />
              </div>
              <div className="blogPages__contents__left-box--text">
                <p className="time">
                  <span>&#9202;</span> {details.time}
                </p>
                <h3 className="title">{details.title}</h3>
                <div className={readMore ? "readMore" : "details"}>
                  <p>{details.description}</p>
                </div>
                <span className="readMoreBtn" onClick={handleReadMore}>
                  {!readMore ? "Read More →" : "← Read Less"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="blogPages__contents-right">
          <RecentPosts />
          <Categories />
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <>
              <NavLink
                to={`/blog/page/1`}
                className="first-last"
                aria-label="blog page 1"
              >
                First
              </NavLink>
              <NavLink
                to={`/blog/page/${currentPage - 1}`}
                aria-label="blog past page"
              >
                ←
              </NavLink>
            </>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <NavLink
              key={i}
              to={`/blog/page/${i + 1}`}
              aria-label={`page ${i + 1}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {i + 1}
            </NavLink>
          ))}

          {currentPage < totalPages && (
            <>
              <NavLink
                to={`/blog/page/${currentPage + 1}`}
                aria-label="next page"
              >
                →
              </NavLink>
              <NavLink
                to={`/blog/page/${totalPages}`}
                className="first-last"
                aria-label="last page"
              >
                Last
              </NavLink>
            </>
          )}
        </div>
        {currentPage === 1 && <BlogPageElementor />}
      </div>
    </main>
  );
}
