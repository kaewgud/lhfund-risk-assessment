import * as React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows_table1 = [
  {
    key: "1",
    Mutual_funds: "LHTREASURY-A",
    percent: "15%",
  },
  {
    key: "2",
    Mutual_funds: "LHMMPVD",
    percent: "15%",
  },
  {
    key: "3",
    Mutual_funds: "LHMM-L",
    percent: "10%",
  },
];

  
  const columns_table1 = [
    {
      key: "Mutual_funds",
      label: "กองทุนรวมตลาดเงินในประเทศ",
    },
    {
      key: "percent",
      label: "40%",
    },
  ];


export default function Navbar() {
    return (
        <div className='pt-3'>
            <div >
                <Table aria-label="Fund recommendation table" >
                    <TableHeader columns={columns_table1}>
                        {(column) => <TableColumn key={column.key} >{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows_table1}>
                        {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            
        </div>
    );

}