
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title='My First App' aboutTitle="About Us" />
      <div className="container">
        <TextForm heading="Write down the message" />

      </div>
    </>
  );
}

export default App;
