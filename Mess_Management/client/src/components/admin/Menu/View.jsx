import React , {Fragment} from 'react'
import {Button,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu'
import { useNavigate,Link } from 'react-router-dom'


function View() {
    let history = useNavigate();
    const handleDelete =(id) => {
        var index=Menu.map(function(e)  {
            return e.id
        }) .indexOf(id);
        Menu.splice(index,1);
        history('/menu');
    }
    const handleEdit =(id,day,breakfast,lunch,dinner) =>{
        localStorage.setItem('breakfast',breakfast);
        localStorage.setItem('lunch',lunch);
        localStorage.setItem('dinner',dinner);
        localStorage.setItem('day',day);
        localStorage.setItem('id',id);
    }

    return (
      
          <Fragment>
              <div style={{margin:"10rem"}}>
                  <Table striped bordered hover size="sm">
                      <thead>
                          <tr>
                              <th>Day</th>
                              <th>Breakfast</th>
                              <th>lunch</th>
                              <th>dinner</th>
                              <th>actions</th>

                          </tr>
                      </thead>
                      <tbody>
                          {
                              Menu && Menu.length > 0
                              ?
                              Menu.map((item) => {
                                  return(
                                      <tr>
                                          <td>
                                             {item.day}
                                          </td>
                                          <td>
                                             {item.breakfast}
                                          </td>
                                          <td>
                                             {item.lunch}
                                          </td>
                                          <td>
                                             {item.dinner}
                                          </td>
                                          <td>
                                            <Link to= {'/edit'}>
                                            <Button onClick={() => handleEdit(item.id,item.day,item.breakfast,item.lunch,item.dinner)}> Edit </Button> 
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}> Delete </Button> 

                                          </td>
                                      </tr>
                                      
                                  )
                              })
                              :
                              "No data available"
                          }
                      </tbody>
                  </Table>
                  <br></br>
                  <Link to='/create' className='d-grid gap-2'>
                       <Button size='lg'> create</Button>
                  </Link>
              </div>
          </Fragment>
        
      
    )
  }
  
  export default View  



 
