import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'
import { useNavigate,Link } from 'react-router-dom'
import Menu from './Menu'
import axios from 'axios'

const Add = () => {
  const [day,setDay]= useState('');
  const [breakfast,setBreakfast] = useState('');
  const [lunch,setLunch] = useState('');
  const [dinner,setDinner] = useState('');
  const navigate = useNavigate();
    const handleSubmit = (e)=> {
        e.preventDefault();
        // menu db
        axios
        .post("http://localhost:3001/menu", { day, breakfast, lunch ,dinner})
        .then((result) => {
          console.log(result);
          Menu.push({ day:day, breakfast:breakfast, lunch:lunch,dinner:dinner});
          navigate("/menu");
        })
        .catch((err) => console.log(err));}
      
        
       
        

    //     const ids = uuid();
    //     let uniqueId = ids.slice(0,8);
    //     let a = day, b=breakfast, c=lunch, d=dinner;

    //     Menu.push({id:uniqueId, day:day, breakfast:breakfast, lunch:lunch,dinner:dinner});
    //     history('/menu')
    // }
    // let history=useNavigate();

  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:'15rem'}}>
      <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Day' value={day} required onChange={(e) =>setDay(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formAge'>
            <Form.Control type='text' placeholder='Enter ' value={breakfast} required onChange={(e) =>setBreakfast(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formAge'>
            <Form.Control type='text' placeholder='Enter ' value={lunch} required onChange={(e) =>setLunch(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formAge'>
            <Form.Control type='text' placeholder='Enter ' value={dinner} required onChange={(e) =>setDinner(e.target.value)}></Form.Control>
        </Form.Group>


        <Button type='submit' onClick={(e) => handleSubmit(e)}> Submit</Button>


      </Form>
    </div>
  )
}

export default Add

