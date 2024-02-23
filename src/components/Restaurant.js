import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Restaurant ({restaurant}) {

    return (
        <Card style={{backgroundColor:"#efbad6"}}>
            <Card.Img variant="top" src={restaurant.photograph} />
            <Card.Body>
                <Card.Title><b>{restaurant.name}</b></Card.Title>
                    <h5 style={{color:"red"}}>
                        {restaurant.neighborhood}
                    </h5>               
                    <h5 style={{color:"navy"}}>
                        {restaurant.address}
                    </h5>               
                <Button variant="primary" as={Link} to={`/restaurant/${restaurant.id}`} >Know More</Button>
            </Card.Body>
        </Card>
    )
}

export default Restaurant;