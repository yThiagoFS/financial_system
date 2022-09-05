import { useState, useEffect } from "react"
import * as SC from "./App.styles"
import { Category } from "./types/Category"
import { Item } from "./types/Item"

import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"

import { TableArea } from './components/TableArea'
const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] =  useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
    console.log(filteredList)
  }, [currentMonth, list])

  return (
    <SC.Container>
      <SC.Header>
        <SC.HeaderText>
          Financial System
        </SC.HeaderText>
      </SC.Header>
      <SC.Body>
        {/* Information area */}

        {/* Insert informations */}

        {/* Items table */}
       <TableArea list={filteredList}/>
      </SC.Body>
    </SC.Container>
  );
}

export default App;
