import { TooltipProvider } from "~/components/ui/tooltip";
import Page from "./dashboard"; 
import { AuditLogCard } from "~/components/individual-log";
import logs from "../../fake_data/logs.json";

export default function UsageRecordRoute() {
  return (
    <TooltipProvider>
      <Page>
        <div className="flex flex-wrap gap-4">

            <AuditLogCard log={logs[0]} />

        </div>
      </Page>
    </TooltipProvider>
  );
}