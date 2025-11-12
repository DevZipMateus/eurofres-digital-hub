import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        { label: "Comercial", value: "(11) 97625-8954", link: "https://wa.me/5511976258954" },
        { label: "Financeiro", value: "(11) 99228-4045", link: "https://wa.me/5511992284045" }
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { label: "", value: "mbrigide@eurofres.com.br", link: "mailto:mbrigide@eurofres.com.br" }
      ]
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        { label: "", value: "Rua José D'Ângelo, 364", link: "" },
        { label: "", value: "Santo André - SP", link: "" }
      ]
    },
    {
      icon: Clock,
      title: "Horário",
      details: [
        { label: "", value: "Segunda à Quinta: 7h às 17h", link: "" },
        { label: "", value: "Sexta: 7h às 16h", link: "" },
        { label: "", value: "Pausa: 12h às 13h", link: "" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Entre em contato
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Estamos prontos para atender sua necessidade com excelência técnica e compromisso
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {detail.label && (
                            <span className="text-xs sm:text-sm text-muted-foreground block">
                              {detail.label}
                            </span>
                          )}
                          {detail.link ? (
                            <a
                              href={detail.link}
                              className="text-foreground hover:text-accent transition-colors font-medium text-sm sm:text-base break-words"
                              target={detail.link.startsWith('http') ? '_blank' : undefined}
                              rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-foreground text-sm sm:text-base">{detail.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 sm:p-8 lg:p-12 text-center animate-fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4 px-4">
              Solicite seu orçamento
            </h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Entre em contato conosco via WhatsApp ou email para receber um orçamento personalizado e orientação técnica especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <a href="https://wa.me/5511976258954" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="truncate">WhatsApp Comercial</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <a href="mailto:mbrigide@eurofres.com.br">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar email
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center animate-fade-up">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">Siga-nos nas redes sociais</p>
            <div className="flex justify-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/company/eurofres"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                aria-label="LinkedIn Eurofres"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.instagram.com/eurofres/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                aria-label="Instagram Eurofres"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
