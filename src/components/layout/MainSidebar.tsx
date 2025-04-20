
import * as React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ListTodo,
  Bell,
  Settings,
  LogOut,
  FileText,
  Repeat
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/" },
  { icon: <ListTodo size={20} />, label: "My Tasks", href: "#", count: 5 },
  { icon: <Bell size={20} />, label: "Reminders", href: "#" },
  { icon: <FileText size={20} />, label: "Notes", href: "#" },
  { icon: <Repeat size={20} />, label: "Habits", href: "#" },
  { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
];

export const MainSidebarContent = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <SidebarHeader className="pb-4">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TaskFlow
          </h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild tooltip={item.label} isActive={index === 0}>
                <Link to={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.count && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full ml-auto">
                      {item.count}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <button className="w-full flex items-center gap-2">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <div className="flex items-center gap-3 p-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Peter Malby</p>
            <p className="text-xs text-muted-foreground truncate">peter@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
};

export const MainSidebar = () => {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <MainSidebarContent />
    </Sidebar>
  );
};
