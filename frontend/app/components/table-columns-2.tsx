"use client"

import type { ColumnDef } from "@tanstack/react-table"

export type PersonalLog = {
  date: string
  original_cost_per: number
  file_name: string
  line: number
  ai_model: string
  new_cost_per: number
  total_bonus_per: number
}

export const columns_2: ColumnDef<PersonalLog>[] = [
  {
    accessorKey: "ai_model",
    header: "Model",
  },
  {
    accessorKey: "file_name",
    header: "File Path",
  },
  {
    accessorKey: "line",
    header: "Line",
  },
  {
    accessorKey: "original_cost_per",
    header: "Original Cost",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("original_cost_per"))
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(amount)
    },
  },
  {
    accessorKey: "new_cost_per",
    header: "New Cost",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("new_cost_per"))
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(amount)
    },
  },
  {
    accessorKey: "total_bonus_per",
    header: "Total Bonus",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_bonus_per"))
      return (
        <span className="text-green-600 font-medium">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
          }).format(amount)}
        </span>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Timestamp",
  },
]