import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Card from 'react-bootstrap/Card';

export default function Dashboard() {

    return (
    <>
    <Navbar/>
    <div className="Content">
            <Sidebar/>
            <div className="Header">
                <h1>Dashboard</h1>
                <br/>
                <div className="statistic_card">
            <Card style={{ width: '18rem' }}>
                 
                <Card.Body>
                        <Card.Title>Machine Online</Card.Title>
                        <Card.Text>
                        45 
                        </Card.Text>
                </Card.Body>
             </Card>
             <Card style={{ width: '18rem' }}>
                <Card.Body>
                        <Card.Title>Error occurred</Card.Title>
                        <Card.Text>
                        0
                        </Card.Text>
                </Card.Body>
             </Card>
             <Card style={{ width: '18rem' }}>
                 
                 <Card.Body>
                         <Card.Title>Machine Online</Card.Title>
                         <Card.Text>
                         45 
                         </Card.Text>
                 </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                 <Card.Body>
                         <Card.Title>Error occurred</Card.Title>
                         <Card.Text>
                         0
                         </Card.Text>
                 </Card.Body>
              </Card>

             </div>
            </div>
            
    </div>
    </>
    );
  }