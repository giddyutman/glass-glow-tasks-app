
import React from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ListTodo,
  Bell,
  Settings,
  Menu,
} from "lucide-react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <ListTodo size={20} />, label: "My Tasks", count: 5 },
    { icon: <Bell size={20} />, label: "Reminders" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <aside className={`glass-card flex flex-col p-4 m-4 rounded-2xl ${collapsed ? "w-20" : "w-64"}`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className={`font-bold text-xl ${collapsed ? "hidden" : "block"}`}>TaskFlow</h1>
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          <Menu size={20} />
        </Button>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${item.active ? "active" : ""}`}
          >
            {item.icon}
            {!collapsed && (
              <span className="flex-1">{item.label}</span>
            )}
            {!collapsed && item.count && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
};
