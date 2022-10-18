import Sidebar from './component/Sidebar';
import Table from 'react-bootstrap/Table';
import Navbar from './component/Navbar';
import { useState, Fragment,useMemo} from 'react';
import DeviceJson from './device.json';
import Pagination from './component/Pagination';

export default function Device() {
    let [Inputdata, setInputdata] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 17;
    let [Foundtext,setFoundtext] = useState(DeviceJson.length);
    const filterDevice = (Inputdata) => {
               return DeviceJson.filter((device)=>{
                return device.name.toLowerCase().includes(Inputdata.toLowerCase());
        });
    }
    const currentTableDevice = useMemo(()=>{
        const firstPageIndex = (currentPage - 1) * postsPerPage;
        const lastPageIndex = firstPageIndex + postsPerPage;
        if(Inputdata===""){setFoundtext(DeviceJson.length);return DeviceJson.slice(firstPageIndex, lastPageIndex);}
        else{setFoundtext(filterDevice(Inputdata).length);return filterDevice(Inputdata).slice(firstPageIndex, lastPageIndex);}
    },[Inputdata,currentPage])


        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
        <>
        <Navbar/>
        <div className="Content">
            <Sidebar/>
            <div className="Header">
            <h1>Device</h1>
            <br/>
            
            <input
                className="search_device"
                type="text"
                placeholder="Search by name..."
                value={Inputdata}
                onChange={(e)=>setInputdata(e.target.value)}
            />
            <p>found result {Foundtext}</p>
            <div className="device_table">
            <Table striped borderless hover size="lg" >
            <thead>
            <tr>
                <th>id</th>
                <th>Device Name</th>
                <th>Status</th>
                <th>Humidity</th>
                <th>Temperature</th>
                <th>Error</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
            {currentTableDevice.map((device,index)=>{
                    
                    return(
                        <Fragment >
                        <tr key={index}>
                            <td >{index+1}</td>
                            <td>{device.name}</td>
                            <td>{device.status}</td>
                            <td>{device.humidity}</td>
                            <td>{device.temp}</td>
                            <td>no error</td>
                            <td><a href="#device" id={index+1}>edit </a> </td>
                         </tr>
                        </Fragment>
                    )}
                   
            )}
            
        
            </tbody>
                </Table>
            </div>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={DeviceJson.length}
            paginate={paginate}
            />

      </div>
    </div>
    </>
    );
  }