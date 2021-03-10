import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState, Fragment,  } from 'react';
import ButtonImageWithLabel from './ButtonImageWithLabel';
import ModularFormLabelplusInput from './ModularFormLabelplusInput'
import $ from 'jquery';

function MainPageMealForm() {
    const [inputFields, setInputFields] = useState([
        {calories: 2500, meals: 4}
    ]);
    const handleSubmit = e => {
        e.preventDefault();
        console.log("inputfields", inputFields[0])
    }
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if(event.target.name === "calories") {
            values[index].calories = event.target.value;
        } else {
            values[index].meals = event.target.value;
        }
        setInputFields(values);
    };
    return (
    <>
        <Form className="MealForm" onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
                <div className="MainFormImages">
                <ButtonImageWithLabel imageClass="dietType" 
                                image="Images/dietEverything.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Anything" 
                                btnVar="outline-success" >
                </ButtonImageWithLabel>
                <ButtonImageWithLabel imageClass="dietType" 
                                image="Images/dietPaleo.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Paleo" 
                                btnVar="outline-info">   
                </ButtonImageWithLabel>
                <ButtonImageWithLabel imageClass="dietType" 
                                image="Images/dietVegetarian.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Vegeterian" 
                                btnVar="outline-danger">    
                </ButtonImageWithLabel>
                <ButtonImageWithLabel imageClass="dietType" 
                                image="Images/dietKeto.png" 
                                imageWidth="50px" 
                                imageHeight="50px" 
                                dietType="Keto" 
                                btnVar="outline-warning">
                </ButtonImageWithLabel>
                </div>
                <div className="MealFormInput">
                <ModularFormLabelplusInput inputClass="FormInputRight" 
                                labelClass="FormLabelLeft" 
                                visibleText="I want to eat" 
                                showBtn="calcBtn" 
                                btnVariant="outline-light" 
                                inputText="calories"
                                name="calories" 
                                min="1000"
                                step="25"
                                inputValue={inputField.calories} 
                                inputType="number"
                                btnImage={  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                                                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                                            </svg>}
                                changeProp={event => handleInputChange(index, event)}>
 
                </ModularFormLabelplusInput>
                </div>                
                <div className="MealFormInput">
                <ModularFormLabelplusInput inputClass="FormInputRight" 
                                labelClass="FormLabelLeft" 
                                visibleText="In" 
                                inputTextClass="longAppend" 
                                inputText="meals" 
                                name="meals" 
                                showBtn="hidden"  
                                min="1"
                                max="9" 
                                step="1"
                                inputValue={inputField.meals} 
                                inputType="number"
                                changeProp={event => handleInputChange(index, event)}>
                </ModularFormLabelplusInput>
                </div>
            </Fragment>
            ))}
            <div className="MealFormSubmit">        
                <Button variant="primary" type="submit" size="lg">Generate!</Button>
            </div>                
        </Form>
    </>
    );
}
export default MainPageMealForm;