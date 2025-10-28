import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const Developers = () => {
  const techStack = [
    { name: "React", category: "Frontend Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Vite", category: "Build Tool" },
    { name: "React Router", category: "Routing" },
    { name: "Shadcn/ui", category: "Component Library" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Developers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern web technologies
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Code className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground">{tech.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized performance with Vite and modern React
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
                <p className="text-muted-foreground">
                  Responsive UI with Tailwind CSS and Shadcn components
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Type Safe</h3>
                <p className="text-muted-foreground">
                  Built with TypeScript for reliability and maintainability
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Development Info</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                This application was built with modern web development best practices, 
                focusing on performance, accessibility, and user experience. The component-based 
                architecture ensures maintainability and scalability.
              </p>
              <p className="text-lg leading-relaxed">
                The design system uses semantic tokens for colors and spacing, making it easy 
                to maintain consistent branding throughout the application. All components are 
                fully responsive and optimized for both desktop and mobile experiences.
              </p>
              <div className="bg-muted p-4 rounded-lg mt-6">
                <p className="font-mono text-sm">
                  Version: 1.0.0<br />
                  Build: Production<br />
                  Last Updated: 2024
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Developers;
