import { useLocation } from "react-router";
import { TooltipProvider } from "~/components/ui/tooltip";
import Page from "./dashboard";

// Table 1: Standard Logs
import { columns } from "../components/table-columns";
import logs from "../../fake_data/logs.json";

// Table 2: Personal Logs
import { columns_2 } from "../components/table-columns-2";
import logs2 from "../../fake_data/logs-2.json";

// Individual Card View
import { AuditLogCard } from "~/components/individual-log";
import { DataTable } from "~/components/data-table";

export default function Home() {
  const { pathname } = useLocation();

  const renderContent = () => {
    console.log(pathname);
    console.log("ASDFS");
    switch (pathname) {
      case "/usage-record":
        return (
          <div className="flex flex-wrap gap-4">
            {logs.map((log, i) => (
              <AuditLogCard key={i} log={log} />
            ))}
          </div>
        );

      case "/personal":
        return <DataTable columns={columns_2} data={logs2} />;

      case "/dashboard":
      default:
        return <DataTable columns={columns} data={logs} />;
    }
  };

  return (
    <TooltipProvider>
      <Page>
        {renderContent()}
      </Page>
    </TooltipProvider>
  );
}