import { Routes, Route } from "react-router-dom";
import LayoutComponent from "components/layout/Layout";
import { lazyComponent } from "utils/lazyLoad";
import "./App.css";
import "antd-css-utilities/utility.min.css";
 
const Home = lazyComponent(
  () => import(/* vitePrefetch: true */ "pages/Home")
);
const Blog = lazyComponent(
  () => import(/* vitePrefetch: true */ "./pages/Blog")
);
 

function App() {
  return (
    <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </LayoutComponent>
  );
}

export default App;
