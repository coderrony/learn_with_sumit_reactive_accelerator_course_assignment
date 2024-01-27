import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TaskBoard from "../components/TaskBoard/TaskBoard";

function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <TaskBoard />

      <Footer />
    </>
  );
}

export default Page;
