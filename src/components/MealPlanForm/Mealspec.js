import 'bootstrap/dist/css/bootstrap.min.css';

import ImageWithLabel from '../FormComponents/ImageWithLabel';
import FormInputProp from '../FormComponents/FormInputProp'

import { Form, Button } from 'react-bootstrap';

function Mealspec() {
    return (
    <>
        <Form className="MealForm">
            <div className="MainFormImages">
                <ImageWithLabel imageClass="dietType" 
                                image="Images/dietEverything.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Anything" 
                                btnVar="outline-success" >
                </ImageWithLabel>
                <ImageWithLabel imageClass="dietType" 
                                image="Images/dietPaleo.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Paleo" 
                                btnVar="outline-info">   
                </ImageWithLabel>
                <ImageWithLabel imageClass="dietType" 
                                image="Images/dietVegetarian.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Vegeterian" 
                                btnVar="outline-danger">    
                </ImageWithLabel>
                <ImageWithLabel imageClass="dietType" 
                                image="Images/dietKeto.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Keto" 
                                btnVar="outline-warning">
                </ImageWithLabel>
            </div>
            <div className="MealFormInput">
                <FormInputProp inputClass="FormInputRight" 
                                labelClass="FormLabelLeft" 
                                visibleText="I want to eat" 
                                showBtn="calcBtn" 
                                btnVariant="outline-light" 
                                inputText="calories" 
                                min="100" 
                                step="100" 
                                inputValue="2500" 
                                inputType="number"
                                btnImage={  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                                                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                                            </svg>}>    
                </FormInputProp>
            </div>                
            <div className="MealFormInput">
                <FormInputProp inputClass="FormInputRight" 
                                labelClass="FormLabelLeft" 
                                visibleText="In" 
                                inputTextClass="longAppend" 
                                inputText="meals" 
                                showBtn="hidden"  
                                min="1" 
                                step="1" 
                                inputValue="4" 
                                inputType="number">
                </FormInputProp>
            </div>
            <div className="MealFormSubmit">        
                <Button variant="primary" type="submit" size="lg">Generate!</Button>
            </div>                
        </Form>
    </>
    );
}

export default Mealspec;