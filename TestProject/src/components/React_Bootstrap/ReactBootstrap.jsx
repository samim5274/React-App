import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>This is a simple card component using React Bootstrap.</Card.Text>
                <Button>Submit</Button>
            </Card.Body>
        </Card>
    );
}

export default ReactBootstrap;