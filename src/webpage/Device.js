import Sidebar from './component/Sidebar';
import Table from 'react-bootstrap/Table';
import Navbar from './component/Navbar';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Device() {
    
    return (
        <>
        <Navbar/>
        <div className="Content">
            <Sidebar/>
            <div className="Header">
            <h1>Device</h1>
            <br/>
            
            <input type="text" className="search" placeholder="Search.."></input><button>search</button>
            <div className="device_table">
            <Table striped borderless hover size="lg" >
            <thead>
            <tr>
                <th>id</th>
                <th>Device Name</th>
                <th>Status</th>
                <th>Process</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>K yom</td>
                <td>Online</td>
                <td></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><a href="k">edit </a> </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            </tbody>
                </Table>
            </div>
            <nav aria-label='Page navigation example'>
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                    <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                    <MDBPaginationLink href='#'>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                    <MDBPaginationLink href='#'>2</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                    <MDBPaginationLink href='#'>3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                    <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
      </div>
    </div>
    </>
    );
  }