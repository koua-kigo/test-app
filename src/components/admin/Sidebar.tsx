"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useSidebar } from "./SidebarContext";
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Settings, 
  Gift, 
  Trophy, 
  Globe, 
  ChevronDown, 
  ChevronRight, 
  LogOut,
  Menu,
  X
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users size={20} />,
  },
  {
    title: "Restaurants",
    href: "/admin/restaurants",
    icon: <Store size={20} />,
    submenu: [
      { 
        title: "All Restaurants", 
        href: "/admin/restaurants" 
      },
      { 
        title: "Add Restaurant", 
        href: "/admin/restaurants/new" 
      },
    ]
  },
  {
    title: "Prizes",
    href: "/admin/prizes",
    icon: <Gift size={20} />,
  },
  {
    title: "Achievements",
    href: "/admin/achievements",
    icon: <Trophy size={20} />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings size={20} />,
  },
];

export default function Sidebar() {
  const { user } = useUser();
  const pathname = usePathname();
  const { collapsed, toggleCollapse } = useSidebar();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Toggle submenu
  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  // Check if a menu item is active
  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  // Check if a submenu item is active
  const isSubmenuActive = (href: string) => {
    return pathname === href;
  };

  // Mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden fixed z-50 top-4 right-4 p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
          ${collapsed ? "md:w-20" : "md:w-64"} 
          fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-40
          flex flex-col
        `}
      >
        {/* Logo and collapse button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link href="/admin" className="flex items-center space-x-3">
            <Globe size={24} className="text-blue-400" />
            {!collapsed && <span className="font-semibold text-lg">Restaurant Admin</span>}
          </Link>
          
          <button
            className="hidden md:block text-gray-400 hover:text-white"
            onClick={toggleCollapse}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* User info */}
        {!collapsed && (
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              {user?.imageUrl && (
                <img
                  src={user.imageUrl}
                  alt={user.firstName || "User"}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      className={`
                        w-full flex items-center justify-between p-3 rounded-md
                        ${isActive(item.href) ? "bg-blue-700" : "hover:bg-gray-800"}
                        transition-colors duration-200
                      `}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {!collapsed && <span>{item.title}</span>}
                      </div>
                      {!collapsed && (
                        <span>
                          {openSubmenu === item.title ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>
                      )}
                    </button>

                    {/* Submenu */}
                    {openSubmenu === item.title && !collapsed && (
                      <ul className="mt-1 pl-10 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.title}>
                            <Link
                              href={subitem.href}
                              className={`
                                block p-2 rounded-md text-sm
                                ${isSubmenuActive(subitem.href) ? "bg-blue-700" : "hover:bg-gray-800"}
                                transition-colors duration-200
                              `}
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      flex items-center p-3 rounded-md
                      ${isActive(item.href) ? "bg-blue-700" : "hover:bg-gray-800"}
                      transition-colors duration-200
                    `}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sign out button */}
        <div className="p-4 border-t border-gray-700">
          <Link 
            href="/sign-out" 
            className="flex items-center p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
          >
            <LogOut size={20} className="mr-3" />
            {!collapsed && <span>Sign Out</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}