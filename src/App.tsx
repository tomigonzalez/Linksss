import "./App.css";
import Footer from "./components/footer/Footer";
import Profil from "./components/profil/Profil";
import Redirect from "./components/redirect/Redirect";

function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Profil />
      <Redirect />
      <Footer />
    </div>
  );
}

export default App;
