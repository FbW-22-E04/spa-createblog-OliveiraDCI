import { Link } from "react-router-dom";

function SinglePost(props) {
  console.log("singlePost Props ==> ", props);
  return (
    <div className="container flex flex-col items-center w-[80vw] mx-auto max-w-[600px]">
      <h2>Single Post Page</h2>

      <div className="container w-[80vw] mx-auto max-w-[600px] flex flex-col items-center">
        <p>
          Created by {props && props.singlePost.name} on{" "}
          {props && props.singlePost.date}
        </p>
        <p>{props && props.singlePost.title}</p>
        <p>{props && props.singlePost.text}</p>
        <Link to="/allposts">
          <button>⏎ All Posts</button>
        </Link>
      </div>
    </div>
  );
}

export default SinglePost;
