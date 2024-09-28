import DashboardContainer from "./dashboardElement/container/DashboardContainer";
import TextDashboard from "./dashboardElement/TextDashboard";
import ChartDashboard from "./dashboardElement/ChartDashboard";

export default function DashboardPage() {
  return (
    <div>
      <DashboardContainer />
      <TextDashboard />
      <ChartDashboard />
    </div>
  );
}
