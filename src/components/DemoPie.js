import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import "./Demopie.css"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"


const DemoPie = () => {

  const [incometograph, setIncome]=useState(0)
  const [expensetograph, setExpense] = useState(0)
  const [balancetograph, setBalance] = useState(0)

  const getDetails=()=>{
  
  setIncome( parseInt(localStorage.getItem("income")));
  setExpense(parseInt(localStorage.getItem("expense")));
  setBalance(parseInt(localStorage.getItem("balance")));
  }

  useEffect(() => {
    getDetails();
  }, [])


  var data = [
    // {
    //   type: 'Income',
    //   value: incometograph ,
    // },
    {
      type: `Expense `,
      value: expensetograph,
    },
    {
      type: 'Balance',
      value: balancetograph,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return (
    <div className="divPiechart">
        <Button className="header">Income: {incometograph}</Button>
        <Button className="header">Expense: {expensetograph}</Button>
        <Button className="header">Balance: {balancetograph}</Button>

  <Pie {...config} />
  <Link className="linkdiv" to="/"><button className="backBtn">Back</button></Link>
  </div>
  )
};

export default DemoPie;