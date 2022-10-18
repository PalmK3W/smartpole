import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
export default function Statistics() {
    function Exportdaily(){
        axios.get('http://localhost:4000/exportdaily',{
                responseType: 'blob'
          })
          .then((res)=>{
                                                                               
                const url = window.URL.createObjectURL(new Blob([res.data], 
                {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Report_daily.xlsx');
                document.body.appendChild(link);
                link.click();
                link.remove();
          })
          .catch((error)=>{
            console.log(error)
          })
    } 
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
                        <Button variant="primary" onClick={Exportdaily}>Export</Button>
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