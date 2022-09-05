import * as SC from "./styles"
import { Item } from '../../types/Item'
import { TableItem } from "../TableItem"
interface TableAreaProps  {
    list: Item[]
}
export const TableArea = (props: TableAreaProps) => {
    return(
        <SC.Table>
            <thead>
                <tr>
                    <SC.TableHeadColumn width={100}>Date</SC.TableHeadColumn>
                    <SC.TableHeadColumn width={100}>Category</SC.TableHeadColumn>
                    <SC.TableHeadColumn>Title</SC.TableHeadColumn>
                    <SC.TableHeadColumn width={100}>Value</SC.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {props.list.map((item, index) =>(
                   <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </SC.Table>
    )
}