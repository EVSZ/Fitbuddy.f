import './App.css';
import NavigationB from './components/Navbar/NavigationB';
import Jumbo from './components/Jumbotron/Jumbo';
import Mealspec from './components/MealPlanForm/Mealspec';
import Footer from './components/Footer/Footer';
import CaloricForm from './components/CaloricIntakeForm/CaloricForm'

function App() {
  return (
  <>     
    <div className="Main">      
      <div className="NavBar">      
        <NavigationB/>
      </div>   
      <div>
        <Jumbo/> 
      </div>
      <div>
        <Mealspec/>
      </div>
      <div>
        <CaloricForm/>
      </div>
      <div className="Footer">        
        <Footer/>
      </div>   
    </div>   
  </>
  );
}

export default App;
