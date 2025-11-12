import { Cog, Package, Wrench, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Afiação especializada",
      description: "Serviços de afiação e manutenção de ferramentas com foco em melhorar o corte e aumentar a vida útil",
      features: [
        "Afiação CNC de 5 eixos",
        "Serras circulares",
        "Fresas de diversos tipos",
        "Brocas de precisão"
      ]
    },
    {
      icon: Cog,
      title: "Ferramentas especiais",
      description: "Fabricação de ferramentas customizadas para necessidades específicas do setor metalúrgico",
      features: [
        "Desenvolvimento sob medida",
        "Ferramentas CNC",
        "Soluções personalizadas",
        "Consultoria técnica"
      ]
    },
    {
      icon: Sparkles,
      title: "Manutenção preventiva",
      description: "Programas de manutenção para garantir o melhor desempenho contínuo das suas ferramentas",
      features: [
        "Inspeção periódica",
        "Ajustes de precisão",
        "Revestimentos especiais",
        "Relatórios técnicos"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Nossos serviços
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções completas em afiação e ferramentas para indústrias moveleiras e metalúrgicas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg mb-3 sm:mb-4">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-6 sm:p-8 lg:p-12 text-center animate-fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4 px-4">
              Atendimento regional com coleta e entrega
            </h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
              Atendemos toda a Grande São Paulo e Interior com serviço de coleta e entrega disponível para sua comodidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
