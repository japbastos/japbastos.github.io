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
    <section className="h-full overflow-auto container mx-auto py-8">
      <ExperienceTimeline />
    </section>
  );
}
