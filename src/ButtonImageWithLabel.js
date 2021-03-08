import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';

function ButtonImageWithLabel(props) {
    return (
        <Form.Group className={props.imageClass}>
            <div>
                <Button variant={props.btnVar} className="imgBtn">
                    <img src={props.image} alt="" width={props.imageWidth} height={props.imageHeight}/>    
                </Button>
                <Form.Label> {props.dietType} </Form.Label>
            </div>
        </Form.Group>
    );
}
export default ButtonImageWithLabel;