import * as SC from "./styles"
import { formatCurrency } from "../../utils/formatCurrency"

interface ResumeItemProps {
    title:string
    value:number
    color?:string
}

export const ResumeItem = ({ title, value, color }:ResumeItemProps) => {
    return( 
        <SC.Container>
            <SC.Title>
                {title}
            </SC.Title>
            <SC.Info color={color}>
                {formatCurrency(value)}
            </SC.Info>
        </SC.Container>
    )
}