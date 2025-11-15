import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import RequireStep from './layouts/RequireStep';

function App() {
  return (
    <div className="flex flex-col items-center text-center max-w-[1075px]">
      <Header />
      <RequireStep />
      <Footer />
    </div>
  );
}

export default App;
