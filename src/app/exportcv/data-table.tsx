// data_table.tsx
"use client";

import * as React from "react"; // Import React for useState
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  RowSelectionState, // Import RowSelectionState
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // Optional: Callback to pass selected rows data to parent
  onSelectedRowsChange?: (selectedRows: TData[]) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onSelectedRowsChange, // Destructure optional callback
}: DataTableProps<TData, TValue>) {
  // --- Add State for Row Selection ---
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({}); // State to store selected row IDs

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // --- Configure Row Selection ---
    onRowSelectionChange: setRowSelection, // Connect state setter to the table
    enableRowSelection: true, // Must be true to enable selection
    state: {
      rowSelection, // Pass the selection state to the table
    },
    // --- Optional: Define how to get unique row ID ---
    // If your data objects don't have an 'id' property, provide this function
    // getRowId: (originalRow, index, parent) => {
    //   // Example: return originalRow.uniqueKey or generate one
    //   return originalRow.someUniqueIdentifier;
    // }
    // --------------------------------------------------
  });

  // --- Optional: Effect to notify parent about selection changes ---
  React.useEffect(() => {
    if (onSelectedRowsChange) {
      const selectedData = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onSelectedRowsChange(selectedData);
    }
    // Log selected row IDs to console for debugging
    // console.log("Selected Row IDs:", rowSelection);
    // Log selected row data to console
    console.log(
      "Selected Rows Data:",
      table.getSelectedRowModel().rows.map((row) => row.original)
    );
  }, [rowSelection, table, onSelectedRowsChange]);
  // ------------------------------------------------------------------

  return (
    <div className="rounded-md border">
      {/* Optional: Display selected row count */}
      {/* <div className="p-2 text-sm text-muted-foreground">
        {table.getSelectedRowModel().rows.length} of{" "}
        {table.getCoreRowModel().rows.length} row(s) selected.
      </div> */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{
                      width:
                        header.getSize() !== 150 ? header.getSize() : undefined,
                    }}
                  >
                    {" "}
                    {/* Apply width if not default */}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      width:
                        cell.column.getSize() !== 150
                          ? cell.column.getSize()
                          : undefined,
                    }}
                  >
                    {" "}
                    {/* Apply width if not default */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
