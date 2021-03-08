import './Jumbo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';

function Jumbo() {
    return (
        <>
            <Jumbotron  id="h1Jumbo">                
                <h3>Having a difficult time with planning a diet?</h3>
                <h3>In the mood to explore new recipes?</h3>
                <h3>Want to get fit?</h3>
                <h4>Fitbuddy creates the perfect meal plan for you based on your preferences and goals</h4>
                <h2>Let me do the thinking</h2>     
                <h1>You do the eating</h1>
            </Jumbotron>
        </>
    );
}

export default Jumbo;
