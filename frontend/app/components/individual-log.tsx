import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Check, Loader2 } from "lucide-react"; // Added Loader2 for the spinner
import type { AIAuditLog } from "../components/table-columns";

interface AuditLogCardProps {
  log: AIAuditLog;
}

export function AuditLogCard({ log }: AuditLogCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [efficiencyCost, setEfficiencyCost] = useState<number | null>(null);

  const handleCheckEfficiency = () => {
    setIsLoading(true);
    
    // Simulate 10 second calculation
    setTimeout(() => {
      const newCost = log.cost_per - 100;
      setEfficiencyCost(newCost);
      setIsLoading(false);
    }, 10000);
  };

  return (
    <Card className="w-full border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="font-mono">{log.ai_model}</Badge>
          <span className="text-xs text-muted-foreground">
            {new Date(log.date).toLocaleTimeString()}
          </span>
        </div>
        <CardTitle className="text-lg truncate">
          {log.file_name.split('/').pop()}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-sm space-y-2">
        <div className="bg-muted p-2 rounded text-xs font-mono">
          Line {log.line}: {log.file_name}
        </div>
        <p className="text-muted-foreground italic line-clamp-2">
          {log.description}
        </p>
        <div className="flex flex-col gap-1 pt-2">
          <div className="flex justify-between items-center">
             <span className="text-xs font-semibold uppercase">{log.username}</span>
             <span className="font-bold text-muted-foreground text-xs line-through">
               Original: ${log.cost_per.toFixed(2)}
             </span>
          </div>
          
          {/* Display result after loading */}
          {efficiencyCost !== null && (
            <div className="flex justify-between items-center bg-green-50 dark:bg-green-950 p-2 rounded border border-green-200">
              <span className="text-xs font-bold text-green-700 dark:text-green-400">Optimized Cost:</span>
              <span className="font-bold text-green-700 dark:text-green-400">
                ${efficiencyCost.toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t">
        <Button 
          size="sm" 
          variant="default" 
          className="w-full" 
          onClick={handleCheckEfficiency}
          disabled={isLoading} 
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Calculating (10s)...
            </>
          ) : (
            <>
              <Check className="w-4 h-4 mr-1" /> 
              Check Updated Efficiency
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}