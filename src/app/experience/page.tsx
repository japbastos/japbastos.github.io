import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ExperienceTimeline from './experience-timeline';

export default function ExperiencePage() {
  return (
    <section className="container mx-auto py-8">
      <ExperienceTimeline />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Nome do Projeto 1</CardTitle>
            <CardDescription>
              Uma breve descrição do que este projeto faz.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Tecnologias utilizadas: Next.js, TypeScript, Shadcn/UI, etc.</p>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button asChild variant="secondary">
              <Link href="#">GitHub</Link>
            </Button>
            <Button asChild>
              <Link href="#">Ver Demo</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
