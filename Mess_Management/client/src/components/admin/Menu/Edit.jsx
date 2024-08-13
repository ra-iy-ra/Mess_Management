import React,{useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu'
// import {v4 as uuid} from 'uuid'
import { useNavigate,Link } from 'react-router-dom'

const Edit = () => {
    const [day,setDay]= useState('');
    const [breakfast,setBreakfast] = useState('');
    const [lunch,setLunch] = useState('');
    const [dinner,setDinner] = useState('');
    const  [id,setId] = useState('');
    let history=useNavigate();
    var index=Menu.map(function(e)  {
        return e.id
    }) .indexOf(id);

    const handleSubmit = (e)=> {
        e.preventDefault();
        let a=Menu[index];
        a.day=day;
        a.breakfast=breakfast;
        a.lunch=lunch;
        a.dinner=dinner;
        history('/menu')
    }

    useEffect(() => {
        setDay(localStorage.getItem('day'))
        setBreakfast(localStorage.getItem('breakfast'))
        setLunch(localStorage.getItem('lunch'))
        setDinner(localStorage.getItem('dinner'))
        setId(localStorage.getItem('id'))

    })

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

        <Button type='submit' onClick={(e) => handleSubmit(e)}> Update</Button>
        </Form>
      
    </div>
  )
}

export default Edit
