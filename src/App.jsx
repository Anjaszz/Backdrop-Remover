import Header from "./components/Header";
import Home from "./page/HomeView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-x-hidden">
      <Header />
      <main className="flex-grow flex justify-center items-start px-4 py-6 sm:px-6 lg:px-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
