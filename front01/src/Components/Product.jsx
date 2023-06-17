import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product(props){
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Body style={{color:props.color}}>
            <Card.Text>
                {props.name}
                </Card.Text> 
                <Card.Text>{props.year}</Card.Text>
                <Card.Text>
                    {props.color}
                </Card.Text>
                <Card.Text>
                    {props.pantone_value}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}