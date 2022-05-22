import { useEffect, useState } from "react";
import { UpgradeRow } from "../components/UpgradeTable";
import { Upgrade } from "../promises/interfaces";

    const useDynamicUpgradeTable = (table: Array<Upgrade>): [Array<string>, UpgradeRow] => {
        const [myTableHeads, setMyTableHeads] = useState<Array<string>>([]);
        const [myTableBody, setMyTableBody] = useState<UpgradeRow>([]);
        useEffect(()=> {
            const tableHeadings = Object.keys(table[0]);
            const tableRows: UpgradeRow = table.map((row) => {
                return Object.values(row);
            }) as UpgradeRow;
            setMyTableHeads(tableHeadings);
            setMyTableBody(tableRows);
        }, [table]);
        return [myTableHeads, myTableBody];
    }

    export default useDynamicUpgradeTable;