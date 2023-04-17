import { Helmet } from "react-helmet";
import NavBar from "components/NavBar";

export const Layout = ({ title, content, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
    <NavBar />
    <div className="container mt-5">{children}</div>
  </>
);

export default Layout;
