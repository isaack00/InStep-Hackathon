import { TooltipProvider } from "~/components/ui/tooltip";
import Page from "./dashboard"; 
import { columns_2 } from "../components/table-columns-2";
import { DataTable } from "~/components/data-table";
import logs2 from "../../fake_data/logs-2.json";

export default function PersonalRoute() {
  return (
    <TooltipProvider>
      <Page>
        <DataTable columns={columns_2} data={logs2} />
      </Page>
    </TooltipProvider>
  );
}