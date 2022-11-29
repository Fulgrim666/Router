import NavBar from "./components/navBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
// import Posts from "./components/Posts";
import Home from "./components/home";
import Stats from "./components/stats";
import PostList from "./components/postList";
import Post from "./components/post";

const posts = [
  { id: 1, label: "post 1" },
  { id: 2, label: "post 2" },
  { id: 3, label: "post 3" },
];

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>App</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/stats" exact component={Stats} />

          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/posts/:postId"
            render={(props) => <Post post={posts} {...props} />}
          />
          <Route
            path="/posts"
            render={(props) => <PostList post={posts} {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
