import * as SC from "./styles"
import { Item } from "../../types/Item"
import { formatCurrency } from "../../utils/formatCurrency"
interface TableItemProps {
    item: Item
}
export const TableItem = ({ item }:TableItemProps) => {
    return(
        <SC.TableLine>
            <SC.TableColumn></SC.TableColumn>
            <SC.TableColumn>{item.category}</SC.TableColumn>
            <SC.TableColumn>{item.title}</SC.TableColumn>
            <SC.TableColumn>{formatCurrency(item.value)}</SC.TableColumn>
        </SC.TableLine>
    )
}