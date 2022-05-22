import { useEffect, useRef, useState } from "react";
import useDynamicProductTable from "../custom-hooks/useDynamicProductTable";
import { ProductTable } from "../promises/interfaces";

export const ProductTableComponent = ({ table }: ProductTable) => {
    const [myTableHead, myTableBody] = useDynamicProductTable(table);
    const [selectValue, setSelectValue] = useState<string>('');
    const selectInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log(selectValue);
    }, [selectValue]);

    return <section>
        <select onChange={() => setSelectValue(selectInput.current!.value)}/>
        <table>
            <thead>
                <tr>
                    {
                        myTableHead.map((v, k) => {
                            return <th key={k}>
                                {v}
                            </th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    myTableBody.map((row, k) => {
                        return <tr key={k}>
                            {
                                row.map((vColumn, l) => {
                                    return <td key={l}>
                                        {vColumn}
                                    </td>
                                })
                            }
                        </tr>
                    })
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </section>
}