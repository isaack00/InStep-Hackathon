"use client"

import type { ColumnDef } from "@tanstack/react-table"

export type AIAuditLog = {
  username: string       // Service account, worker ID, or environment
  date: string           // ISO 8601 timestamp
  cost_per: number       // Cost per token or per request
  file_name: string      // Path to the file containing the API call
  line: number           // Line number where the call is initiated
  ai_model: string       // The model identifier (e.g., 'gpt-4o', 'gemini-1.5-flash')
  description: string    // Technical metadata (latency, tokens, or status)
}

export const columns: ColumnDef<AIAuditLog>[] = [
  {
    accessorKey: "ai_model",
    header: "Model",
  },
  {
    accessorKey: "username",
    header: "Service/User",
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
    accessorKey: "cost_per",
    header: "Cost/Per100",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("cost_per"))
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(amount)
    },
  },
  {
    accessorKey: "date",
    header: "Timestamp",
  },
]