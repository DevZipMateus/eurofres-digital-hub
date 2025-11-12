import { Button } from "@/components/ui/button";
import { Phone, Mail, Wrench, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight">
              Eurofres
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-6 sm:mb-8 font-light px-4">
              Soluções de corte com ferramentas e serviços técnicos especializados
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Combinando produtos de alta qualidade e afiação precisa para estender a vida útil das ferramentas e garantir processos produtivos eficientes
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 animate-fade-in px-4">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Solicitar orçamento
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              Nossos serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-up px-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
              <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-3 sm:mb-4 mx-auto" />
              <h3 className="text-primary-foreground font-semibold text-base sm:text-lg mb-2">
                Afiação de precisão
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Tecnologia CNC de 5 eixos para resultados perfeitos
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-3 sm:mb-4 mx-auto" />
              <h3 className="text-primary-foreground font-semibold text-base sm:text-lg mb-2">
                Desde 2000
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Mais de 24 anos de experiência e excelência
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors sm:col-span-2 lg:col-span-1">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-3 sm:mb-4 mx-auto" />
              <h3 className="text-primary-foreground font-semibold text-base sm:text-lg mb-2">
                Atendimento regional
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Grande São Paulo e Interior com coleta e entrega
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
