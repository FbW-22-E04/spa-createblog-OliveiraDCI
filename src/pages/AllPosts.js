import { Link } from "react-router-dom";

function AllPosts(props) {
  const handleView = (idx) => {
    console.log("idx", idx);
    console.log("props-allPosts", props.allPosts[idx]);
    props.cbSinglePost(props.allPosts[idx]);
  };

  const handleDelete = (idx) => {
    const middleStep = [...props.allPosts];
    middleStep.splice(idx, 1);
    props.cb(middleStep);
  };
  return (
    <div className="container w-[80vw] mx-auto max-w-[600px]">
      <h2>AllPosts</h2>
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
                <Link to="/singlepost" onClick={() => handleView(idx)}>
                  <span className="btn-view">full view</span>
                </Link>
                <Link>
                  <span className="btn-edit">edit</span>
                </Link>
                <Link>
                  <span
                    className="btn-delete"
                    onClick={() => handleDelete(idx)}
                  >
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
