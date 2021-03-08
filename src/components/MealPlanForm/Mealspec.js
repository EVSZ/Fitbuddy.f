import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap';

function InputNmbSm(props) {
    return (
        <Form.Group>
            <div className="MealFormGrL">
                <Form.Label> {props.visibleText} </Form.Label>      
            </div>
            <div className="MealFormGrC">
                <Form.Control type="number" step={props.step} placeholder={props.placeholder}></Form.Control>   
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
                <InputNmbSm visibleText="I want to eat" step="100"placeholder="calories"></InputNmbSm>
            </div>                
            <div className="MealFormEl">
                <InputNmbSm visibleText="In" placeholder="meals" step="1" type="withCalc"></InputNmbSm>
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