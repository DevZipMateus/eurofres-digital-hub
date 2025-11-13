import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from "lucide-react";
import logoEurofres from "@/assets/logo-eurofres.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src={logoEurofres} 
              alt="Logo Eurofres" 
              className="h-12 sm:h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Soluções de corte com ferramentas e serviços técnicos especializados desde 2000.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511976258954" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-medium">Comercial</p>
                  <p>(11) 97625-8954</p>
                </div>
              </a>
              <a 
                href="https://wa.me/5511992284045" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-medium">Financeiro</p>
                  <p>(11) 99228-4045</p>
                </div>
              </a>
              <a 
                href="mailto:mbrigide@eurofres.com.br"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                <span>mbrigide@eurofres.com.br</span>
              </a>
            </div>
          </div>

          {/* Endereço e Horário */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua José D'Ângelo 364<br />Santo André, SP</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Segunda a Quinta: 7h às 17h</p>
                  <p>Sexta: 7h às 16h</p>
                  <p className="text-xs mt-1 text-primary-foreground/60">Pausa para almoço: 12h às 13h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/eurofres"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn Eurofres"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/eurofres/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram Eurofres"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-xs text-primary-foreground/60">
                Coleta e entrega disponíveis na Grande São Paulo e Interior
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Eurofres Industria e Afiação de Ferramentas LTDA. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 01.888.846/0001-72
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
