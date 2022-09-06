import { useState, useEffect } from "react"
import * as SC from "./App.styles"
import { Category } from "./types/Category"
import { Item } from "./types/Item"

import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"

import { TableArea } from './components/TableArea'
import { InfoArea } from "./components/InfoArea"
const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] =  useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [currentMonth, list])
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])
  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }
  return (
    <SC.Container>
      <SC.Header>
        <SC.HeaderText>
          Financial System
        </SC.HeaderText>
      </SC.Header>
      <SC.Body>
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        {/* Insert informations */}

        {/* Items table */}
       <TableArea list={filteredList}/>
      </SC.Body>
    </SC.Container>
  );
}

export default App;
