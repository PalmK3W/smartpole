import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Statistics() {

    return (
    <>
    <Navbar/>     
    <div className="Content">
            <Sidebar/>
            <div className="Header">
            <h1>Statistics</h1>
            <br/>
            
            <div className="statistic_card">
            <Card className="Card_dailyprocess">
                 
                <Card.Body>
                        <Card.Title>Daily Process</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Export</Button>
                </Card.Body>
             </Card>
             <Card className="Card_weeklyprocess">
                 
                <Card.Body>
                        <Card.Title>Weekly Process</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Export</Button>
                </Card.Body>
             </Card>

             </div>

            
            </div>
    </div>
    </>
    );
  }