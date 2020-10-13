import Link from "next/link";
const BlogCard = ({ article }) => {
  return (
    <>
      <div className="card">
        <img src={article.image} />
        <h3>{article.title}</h3>
        <small>{article.athor}</small>
        <div className="card-footer">
          <Link href={`/blog/${article.id}`}>
            <a>View</a>
          </Link>
          <span>June 19, 2020</span>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
