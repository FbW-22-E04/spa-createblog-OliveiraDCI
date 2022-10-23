import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePost(props) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    title: "",
    text: "",
    date: null,
  });

  const handleInput = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
      date: `${("0" + new Date().getDate()).slice(-2)}/${(
        "0" + new Date().getMonth()
      ).slice(-2)}/${("0" + new Date().getFullYear()).slice(-2)}`,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/allposts");
    props.cbAll([...props.allPosts, data]);
  };

  return (
    <div className="container w-[80vw] mx-auto max-w-[600px]">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Your Name: <input onChange={handleInput} name="name" type="text" />
          </label>
        </div>
        <div>
          <label>
            Post Title:{" "}
            <input onChange={handleInput} name="title" type="text" />
          </label>
        </div>
        <div>
          <label>
            Post Text:{" "}
            <textarea onChange={handleInput} name="text" type="text" rows="5" />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
