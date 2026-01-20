import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <section className="centred container">
      <h1 className="text-4xl font-bold">Contato</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Entre em contato comigo através do formulário abaixo.
      </p>

      <form className="mt-8 w-lg space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nome
          </label>
          <Input id="name" placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Seu email" />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Mensagem
          </label>
          <Textarea id="message" placeholder="Sua mensagem" />
        </div>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </section>
  );
}
