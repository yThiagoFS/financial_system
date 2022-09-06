import * as SC from "./styles"

import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io"
import { formatCurrentMonth } from "../../helpers/dateFilter"
import { ResumeItem } from "../ResumeItem"

interface InfoAreaProps {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}
export const InfoArea = ({ currentMonth, onMonthChange, income, expense }:InfoAreaProps) => {

    const handlePrevMonth = () => {
        let [year,month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth( currentDate.getMonth() -1 )
        onMonthChange(`${currentDate.getFullYear()} -  ${currentDate.getMonth() + 1}`)

    }
    const handleNextMonth = () => {
        let [year,month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth( currentDate.getMonth() + 1 )
        onMonthChange(`${currentDate.getFullYear()} -  ${currentDate.getMonth() + 1}`)
    }

    return(
        <SC.Container>
            <SC.MonthArea>
                <SC.MonthArrow onClick={handlePrevMonth}>
                    <IoIosArrowBack />
                </SC.MonthArrow>
                <SC.MonthTitle>{formatCurrentMonth(currentMonth)}</SC.MonthTitle>
                <SC.MonthArrow onClick={handleNextMonth}>
                    <IoIosArrowForward />
                </SC.MonthArrow>
            </SC.MonthArea>
            <SC.ResumeArea>
                <ResumeItem title="Recipt" 
                value={income} />
                <ResumeItem title="Expense" 
                value={expense} />
                <ResumeItem title="Balance" 
                value={income - expense}
                color={(income - expense) < 0 ? 'red' : 'green'} />
            </SC.ResumeArea>
        </SC.Container>
    )
}