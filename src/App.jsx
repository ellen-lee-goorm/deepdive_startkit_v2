import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import PrelearningStep from './layouts/PrelearningStep';
import RequireStep from './layouts/RequireStep';

function App() {
  return (
    <div className="flex flex-col items-center text-center max-w-[1075px] w-full">
      <Header />
      <RequireStep />
      <PrelearningStep />
      <Footer />
    </div>
  );
}

export default App;
