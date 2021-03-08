import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, InputGroup} from 'react-bootstrap';

function FormInput(props) {
    let button;
    if(props.showBtn === "calcBtn") {
        button = <Button className={props.showBtn} variant={props.btnVariant}>
                    {props.btnImage}
                </Button>;
    } else {
        button = '';
    };

    return (
        <Form.Group>
            <div className={props.labelClass}>
                <Form.Label> {props.visibleText} </Form.Label>      
            </div>
            <div className={props.inputClass}>               
                <InputGroup> 
                <Form.Control type={props.inputType} min={props.min} step={props.step} value={props.inputValue} /> 
                    <InputGroup.Append>
                        <InputGroup.Text className={props.inputTextClass}>{props.inputText}</InputGroup.Text>
                        {button}
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Form.Group>
    );
}
export default FormInput;