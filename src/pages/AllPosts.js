import { Link } from "react-router-dom";

function AllPosts(props) {
  const handleDelete = (e) => {
    // it is not yet properly deleting, this is just a visual effect. will be improving it later on.
    e.target.parentElement.parentElement.parentElement.style.border = "none";
    e.target.parentElement.parentElement.parentElement.innerHTML = "";
  };
  return (
    <div className="container w-[80vw] mx-auto max-w-[600px]">
      <h2>AllPosts Page</h2>
      <div>
        {props.allPosts.map((post, idx) => {
          return (
            <div
              key={idx}
              className="article-container my-[2rem] p-3 border-solid border-[#999] border-2"
            >
              <div className="title">Title: {post.title}</div>
              <div>{post.text}</div>
              <div className="description">
                {"Posted by " + post.name}{" "}
                {post.date ? "on " + post.date : null}
              </div>
              <div className="btns-container">
                <Link to="/singlepost">
                  <span className="btn-view">full view</span>
                </Link>
                <Link>
                  <span className="btn-edit">edit</span>
                </Link>
                <Link>
                  <span className="btn-delete" onClick={handleDelete}>
                    delete
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllPosts;
