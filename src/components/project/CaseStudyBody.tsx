import type { Project } from '@/lib/types/project';
import { cn } from '@/lib/utils';

type CaseStudyBodyProps = {
  project: Pick<Project, 'problem' | 'decision' | 'result'>;
  className?: string;
};

const BLOCKS = [
  {
    key: 'problem' as const,
    label: '01 · Problem',
    heading: 'What needed solving',
    color: 'var(--mag-500)',
  },
  {
    key: 'decision' as const,
    label: '02 · Decision',
    heading: 'How I approached it',
    color: 'var(--teal-500)',
  },
  {
    key: 'result' as const,
    label: '03 · Result',
    heading: 'What shipped',
    color: 'var(--mag-400)',
  },
] as const;

export function CaseStudyBody({ project, className }: CaseStudyBodyProps) {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      <div>
        <span className="text-n400 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
          {'// process'}
        </span>
        <h2 className="font-display text-n900 mt-2 text-2xl font-bold md:text-3xl">
          The thinking behind it.
        </h2>
        <p className="text-n500 mt-3 text-base leading-relaxed">
          Engineering is a series of trade-offs. Here&apos;s the narrative arc of this project.
        </p>
      </div>

      {BLOCKS.map(({ key, label, heading, color }) => (
        <div
          key={key}
          className="border-n200 bg-canvas-raised relative rounded-sm border p-6"
          style={{ borderLeftColor: color, borderLeftWidth: 3 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span
              className="font-mono text-[0.62rem] font-semibold tracking-[0.18em] uppercase"
              style={{ color }}
            >
              {label}
            </span>
          </div>
          <h3 className="font-display text-n800 mb-3 text-lg font-bold">{heading}</h3>
          <p className="text-n600 text-base leading-relaxed">{project[key]}</p>
        </div>
      ))}
    </div>
  );
}
