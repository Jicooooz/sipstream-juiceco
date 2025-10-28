import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, History, Info, ShoppingCart, Code, Mail, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { icon: History, label: "Company History", href: "#history" },
  { icon: Package, label: "About our Products", href: "#products" },
  { icon: ShoppingCart, label: "Cart", href: "#cart" },
  { icon: Info, label: "About the app", href: "#about" },
  { icon: Code, label: "Developers", href: "#developers" },
  { icon: Mail, label: "Contact Us", href: "#contact" },
];

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 bg-card shadow-lg hover:bg-accent">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-sidebar-background text-sidebar-foreground border-sidebar-border">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-sidebar-foreground/70">+1 234 567 8900</p>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
