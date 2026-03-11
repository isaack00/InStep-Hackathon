import { TooltipProvider } from "~/components/ui/tooltip";
import DashboardLayout from "./dashboard"; 
import { columns } from "../components/table-columns";
import { DataTable } from "~/components/data-table";
import logs from "../../fake_data/logs.json";

export default function DashboardRoute() {
  return (
    <TooltipProvider>
      <DashboardLayout>
        <DataTable columns={columns} data={logs} />
      </DashboardLayout>
    </TooltipProvider>
  );
}