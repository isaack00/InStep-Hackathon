import { TooltipProvider } from "~/components/ui/tooltip";
import type { Route } from "./+types/home";
import Page from "./dashboard";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  
  return <TooltipProvider><Page /></TooltipProvider>;
}
