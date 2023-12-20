import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Calc from './components/Calc';
import Footer from './components/Footer';
import Test from './components/Test';
import TestAgain from './components/TestAgain';
function App() {
  return (
   <div>
      <Navbar />

      <TestAgain />     
     {/* <Test /> */}
      {/* <Calc /> */}
     
      <Footer />
   </div>
  );
}

export default App;
