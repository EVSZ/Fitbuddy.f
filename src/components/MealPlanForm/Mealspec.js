import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, InputGroup } from 'react-bootstrap';

function InputNmbSm(props) {
    let button;

    if(props.showBtn === "calcBtn") {
        button = <Button className={props.showBtn} variant="outline-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg>
        </Button>;
    } else {
        button = '';
    }
    return (
        <Form.Group>
            <div className="MealFormGrL">
                <Form.Label> {props.visibleText} </Form.Label>      
            </div>
            <div className="MealFormGrC">               
                <InputGroup className="mb-3"> 
                <Form.Control type="number" min={props.min} step={props.step} value={props.placeholder} /> 
                    <InputGroup.Append>
                    <InputGroup.Text className={props.lengthOfPh}>{props.input}</InputGroup.Text>
                    {button}
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Form.Group>
    );
}

function CheckDietType(props) {
    return (
        <Form.Group className="dietTypeFG">
            <div>
                <Button variant={props.btnVar} className="imgBtn">
                    <img src={props.image} alt="" width="50px" height="50px"/>    
                </Button>
                <Form.Label> {props.dietType} </Form.Label>
            </div>
        </Form.Group>
    );
}

function Mealspec() {
    return (
    <>
        <Form className="MealForm">
            <div className="MealFormElImages">
                <CheckDietType image="Images/dietEverything.png" dietType="Anything" btnVar="outline-primary"></CheckDietType>
                <CheckDietType image="Images/dietPaleo.png" dietType="Paleo" btnVar="outline-primary"></CheckDietType>
                <CheckDietType image="Images/dietVegetarian.png" dietType="Vegeterian" btnVar="outline-primary"></CheckDietType>
                <CheckDietType image="Images/dietKeto.png" dietType="Keto" btnVar="outline-primary"></CheckDietType>
            </div>
            <div className="MealFormEl">
                <InputNmbSm visibleText="I want to eat" showBtn="calcBtn" input="calories" min="100" step="100" placeholder="2500"></InputNmbSm>
            </div>                
            <div className="MealFormEl">
                <InputNmbSm visibleText="In" lengthOfPh="longAppend" input="meals" showBtn="hidden"  min="1" step="1" placeholder="4"></InputNmbSm>
            </div>
            <div className="MealFormEl">        
                {/*<Button variant="outline-info" type="submit" size="sm">Unsure?</Button> */}
                <Button variant="secondary" type="submit" size="lg">Generate!</Button>
            </div>                
        </Form>
    </>
    );
}

export default Mealspec;