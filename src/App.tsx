import { useState, useEffect } from "react"
import * as SC from "./App.styles"
import { Category } from "./types/Category"
import { Item } from "./types/Item"

import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"
const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] =  useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  console.log(typeof currentMonth)
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [currentMonth, lit])

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
      </SC.Body>
    </SC.Container>
  );
}

export default App;
