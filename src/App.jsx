import Header from "./components/Header";
import Home from "./page/HomeView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 text-white">
      <Header />
      <main className="flex-grow flex justify-center items-center px-4 py-6 sm:px-6 lg:px-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
