import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

function RestaurantDetails () {

    const restaurantsData = useSelector((state) => state.restaurants.data)

    const {id} = useParams();


    const restaurant = restaurantsData.find((item) => item.id == id)
    console.log(restaurant);

    return (
        <Container>
            <Row>
                <Col md={6} className='mt-4'>                   
                    {
                        restaurant && (
                            <Card style={{ width: '25rem'}}>
                                <Card.Img variant="top" src={restaurant.photograph} />
                                <Card.Body>
                                    <Card.Title><b>{restaurant.name}</b></Card.Title>
                                    <h5 style={{color:"blue"}}><b>{restaurant.cuisine_type}</b></h5> 
                                     <ListGroup variant="flush">
                                        <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
                                        <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                                        <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                                        <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
                                        <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
                                        <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
                                        <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
                                    </ListGroup>                                               
                                    <Button variant="primary">Order Now</Button>
                                </Card.Body>                                                                                            
                            </Card>
                        )
                    }                 
                </Col>
                <Col md={6} className='mt-4'>                   
                    {
                        restaurant && ( 
                            <Card style={{ width: '25rem'}}>
                                <Card.Body>
                                    <Card.Title><b>Reviews</b></Card.Title>  
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Name : {restaurant.reviews[0].name}</ListGroup.Item>
                                            <ListGroup.Item>Date : {restaurant.reviews[0].date}</ListGroup.Item>
                                            <ListGroup.Item>Rating : {restaurant.reviews[0].rating}</ListGroup.Item>                                          
                                        </ListGroup>  
                                    <Card.Text>
                                        Comments : {restaurant.reviews[0].comments}
                                    </Card.Text>
                                </Card.Body>                                                                                       
                                <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Name : {restaurant.reviews[1].name}</ListGroup.Item>
                                            <ListGroup.Item>Date : {restaurant.reviews[1].date}</ListGroup.Item>
                                            <ListGroup.Item>Rating : {restaurant.reviews[1].rating}</ListGroup.Item>                                          
                                        </ListGroup>  
                                    <Card.Text>
                                        Comments : {restaurant.reviews[1].comments}
                                    </Card.Text>
                                </Card.Body>                                                                                       
                                <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Name : {restaurant.reviews[2].name}</ListGroup.Item>
                                            <ListGroup.Item>Date : {restaurant.reviews[2].date}</ListGroup.Item>
                                            <ListGroup.Item>Rating : {restaurant.reviews[2].rating}</ListGroup.Item>                                          
                                        </ListGroup>  
                                    <Card.Text>
                                        Comments : {restaurant.reviews[2].comments}
                                    </Card.Text>
                                </Card.Body>                                                                                       
                            </Card> 
                        )

                        }
                </Col>  
            </Row>
        </Container>
    )
}

export default RestaurantDetails;

