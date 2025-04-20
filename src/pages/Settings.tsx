
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 space-y-6">
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          Display Settings
        </h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            <span>Dark Mode</span>
          </div>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
}
