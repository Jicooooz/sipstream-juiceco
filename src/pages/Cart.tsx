import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingBag, Trash2, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const Cart = () => {
  const { cartItems, loading, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [processingPayment, setProcessingPayment] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setProcessingPayment(true);

    try {
      // Create PayPal order
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-paypal-order`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`
          },
          body: JSON.stringify({ cartItems })
        }
      );

      const order = await response.json();

      if (order.id) {
        // Redirect to PayPal
        const approveLink = order.links.find((link: any) => link.rel === 'approve');
        if (approveLink) {
          window.location.href = approveLink.href;
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Payment failed",
        description: "Unable to process payment. Please try again."
      });
    } finally {
      setProcessingPayment(false);
    }
  };

  const tax = total * 0.08;
  const grandTotal = total + tax;

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12 mt-8">
            <h1 className="text-5xl font-bold mb-4 text-primary">
              Shopping Cart
            </h1>
            <p className="text-xl text-muted-foreground">
              Sign in to view your cart
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Sign in required</h2>
              <p className="text-muted-foreground mb-6">Please sign in to access your cart</p>
              <Button size="lg" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            </Card>
          </div>
        </main>
      </div>
    );
  }

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
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some delicious juices to get started!</p>
              <Button size="lg" onClick={() => navigate('/')}>
                Browse Products
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.product.image_url || '/placeholder.svg'}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{item.product.name}</h3>
                          <p className="text-muted-foreground">${Number(item.product.price).toFixed(2)} each</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="w-24 text-right font-bold text-lg">
                            ${(Number(item.product.price) * item.quantity).toFixed(2)}
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
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
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Tax (8%):</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-2xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${grandTotal.toFixed(2)}</span>
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    size="lg"
                    onClick={handleCheckout}
                    disabled={processingPayment}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    {processingPayment ? "Processing..." : "Pay with PayPal"}
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