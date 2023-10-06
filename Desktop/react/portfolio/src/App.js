import "./App.css";
import Left from "./component/Left";
import RightSection from "./component/Right/RightSection";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <div class="main-container">
        <Left />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
