import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product(props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title variant="top" src={props.name} />
            <Card.Body>
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