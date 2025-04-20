
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Welcome Card */}
            <div className="glass-card p-6 rounded-2xl col-span-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  PM
                </div>
                <div>
                  <h2 className="text-xl font-bold">Hello Peter</h2>
                  <p className="text-gray-600">You have 5 tasks today</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">NEW TASKS</p>
                  <h3 className="text-3xl font-bold">34</h3>
                </div>
                <span className="text-red-500">-5.67%</span>
              </div>
              <div className="h-12 bg-red-50 rounded-lg" />
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">COMPLETED</p>
                  <h3 className="text-3xl font-bold">104</h3>
                </div>
                <span className="text-green-500">+14.88%</span>
              </div>
              <div className="h-12 bg-green-50 rounded-lg" />
            </div>

            {/* Task List */}
            <div className="glass-card p-6 rounded-2xl col-span-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">LIST OF TASKS</h3>
                <Button variant="ghost" size="sm">
                  Full list →
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                  <input type="checkbox" className="w-5 h-5 rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-medium">Meeting for case 1</h4>
                    <p className="text-sm text-gray-600">7:00 - 8:30</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Low
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
