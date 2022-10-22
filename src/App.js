import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Header from "./layout/Header";
import NotFound from "./pages/NotFound";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const [allPosts, setAllPosts] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/createpost"
          element={<CreatePost allPosts={allPosts} cbAll={setAllPosts} />}
        />
        <Route
          path="/allposts"
          element={<AllPosts allPosts={allPosts} cb={setAllPosts} />}
        />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
