import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        {/* STAT */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Toatal Sale"
            icon={Zap}
            value="€42,500"
            color="#6366f1"
          />
          <StatCard
            name="New User"
            icon={Users}
            value="2,500"
            color="#8b5cf6"
          />
          <StatCard
            name="Total Product"
            icon={ShoppingBag}
            value="15,040"
            color="#ec4899"
          />
          <StatCard
            name="Coversion Rate"
            icon={BarChart2}
            value="27%"
            color="#10b981"
          />
        </motion.div>
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
