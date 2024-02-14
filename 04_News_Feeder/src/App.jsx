import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsBoard from "./components/newsBoard/NewsBoard";
import NewsProvider from "./provider/NewsProvider";
import CategoryProvider from "./provider/CategoryProvider";

function App() {
  return (
    <CategoryProvider>
      <NewsProvider>
        <Header />
        <NewsBoard />
        <Footer />
      </NewsProvider>
    </CategoryProvider>
  );
}

export default App;
