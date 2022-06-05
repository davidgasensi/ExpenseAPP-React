import './ExpenseItem.css'; // Incluimos el css para añadir estilos a este html
import ExpenseDate from './ExpenseData';
import Card from '../UI/Card';

// import React, { useState } from 'react'; // Para refrescar el componente importamos useState

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title); // Seteamos una funcion para cambiar el props.title (title=variable, setTitle=funcion a llamar)

  // Las 2 son funciones. Significan lo mismo
  // const clickHandler = () => {
  //   setTitle('Updated!'); // Para actualizar la variable title y que se refresque la pag
  // };

  // function clickHandler() {
  //   console.log('Clicked!!!!!')
  // };

  return ( // className funciona igual que el class en html. props.title recoge props de App.js y recoge el title o amount etc
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2> {/*aqui llamamos a la variable con el string cambiado*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
