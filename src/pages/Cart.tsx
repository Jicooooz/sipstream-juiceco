import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
  // Mock cart data - in a real app this would come from state management
  const cartItems = [
    { id: 1, name: "Orange Sunrise", price: 4.99, quantity: 2 },
    { id: 2, name: "Berry Blast", price: 5.49, quantity: 1 },
    { id: 3, name: "Green Energy", price: 5.99, quantity: 3 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Shopping Cart
          </h1>
          <p className="text-xl text-muted-foreground">
            Review your selection
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some delicious juices to get started!</p>
              <Button size="lg" onClick={() => window.location.href = '/'}>
                Browse Products
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-muted-foreground">${item.price.toFixed(2)} each</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button variant="outline" size="icon">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="w-24 text-right font-bold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Tax (8%):</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-2xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-4" size="lg">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
