import './App.css';
import NavigationBar from './NavigationBar';
import Jumbo from './Jumbo';
import MainPageMealForm from './MainPageMealForm';
import Footer from './Footer';
import CaloricIntakeForm from './CaloricIntakeForm'

function App() {
  return (
  <> 
    <div>
      <div className="NavBar">      
        <NavigationBar/>
      </div>   
      <div>
        <Jumbo/> 
      </div>
      <div>
        <MainPageMealForm/>
      </div>
      <div>
        <CaloricIntakeForm/>
      </div>
      <div className="Footer">        
        <Footer/>
      </div>    
    </div>
  </>
  );
}
export default App;
