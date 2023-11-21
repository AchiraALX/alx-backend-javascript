type RowID = number;

interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;