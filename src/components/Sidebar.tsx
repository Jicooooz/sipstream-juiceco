import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, History, Info, ShoppingCart, Code, Mail, Package, LogOut, LogIn, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { icon: History, label: "Company History", href: "/history" },
  { icon: Package, label: "About our Products", href: "/" },
  { icon: ShoppingCart, label: "Cart", href: "/cart" },
  { icon: Info, label: "About the app", href: "/about" },
  { icon: Code, label: "Developers", href: "/developers" },
  { icon: Mail, label: "Contact Us", href: "/contact" },
  { icon: Download, label: "Install App", href: "/install" },
];

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

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
            <div className="flex-1">
              {user ? (
                <>
                  <h3 className="font-semibold text-lg">Welcome!</h3>
                  <p className="text-sm text-sidebar-foreground/70 truncate">{user.email}</p>
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-lg">Guest</h3>
                  <p className="text-sm text-sidebar-foreground/70">Sign in to shop</p>
                </>
              )}
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold" 
                          : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            {user ? (
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate('/auth')}
              >
                <LogIn className="h-5 w-5 mr-3" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
