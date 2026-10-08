import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";



export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="overview"> Overview</TabsTrigger>
        <TabsTrigger value="categories"> Categories</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="categories">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
