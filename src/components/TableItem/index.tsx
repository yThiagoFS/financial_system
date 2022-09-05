import * as SC from "./styles"
import { Item } from "../../types/Item"
import { categories } from "../../data/categories"
import { formatCurrency } from "../../utils/formatCurrency"
import { formatDate } from "../../helpers/dateFilter"
interface TableItemProps {
    item: Item
}
export const TableItem = ({ item }: TableItemProps) => {
    return (
        <SC.TableLine>
            <SC.TableColumn>{formatDate(item.date)}</SC.TableColumn>
            <SC.TableColumn>
                <SC.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </SC.Category>
            </SC.TableColumn>
            <SC.TableColumn>{item.title}</SC.TableColumn>
            <SC.TableColumn >
                <SC.Value 
                color={categories[item.category].expense ? 'red' : 'green'}>{formatCurrency(item.value)}
            </SC.Value>
            </SC.TableColumn>
        </SC.TableLine>
    )
}