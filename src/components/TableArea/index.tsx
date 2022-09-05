import * as SC from "./styles"
import { Item } from '../../types/Item'
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
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </SC.Table>
    )
}