import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Check } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Install SipStream
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the full mobile app experience
          </p>
        </header>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Install as Mobile App</CardTitle>
                  <CardDescription>
                    Access SipStream like a native app on your phone
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isInstalled ? (
                <div className="flex items-center gap-2 p-4 bg-secondary/10 rounded-lg text-secondary">
                  <Check className="h-5 w-5" />
                  <span className="font-semibold">App is already installed!</span>
                </div>
              ) : isInstallable ? (
                <Button onClick={handleInstall} size="lg" className="w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Install Now
                </Button>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    To install this app on your device:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold">On iPhone</h3>
                        <p className="text-sm text-muted-foreground">
                          Tap the Share button (square with arrow), then scroll and tap "Add to Home Screen"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold">On Android</h3>
                        <p className="text-sm text-muted-foreground">
                          Tap the menu button (three dots), then tap "Install app" or "Add to Home screen"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Works offline
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Faster load times
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Home screen icon
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    Full screen experience
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Install;