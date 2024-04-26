import BlogsList from "./BlogsList";
import SideBar from "./../sidebar/SideBar";

function BlogsContainer() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <BlogsList />
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogsContainer;
