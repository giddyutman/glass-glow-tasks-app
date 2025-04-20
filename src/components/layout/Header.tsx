
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="glass-card flex items-center justify-between p-4 m-4 rounded-2xl">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-xl border-none bg-white/50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </Button>
        
        <Button variant="ghost" className="flex items-center gap-2">
          <User size={20} />
          <span>Peter Malby</span>
        </Button>
      </div>
    </header>
  );
};
