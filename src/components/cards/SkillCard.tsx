'use client';

import type { SkillItem } from '@/lib/data/skills';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type SkillCardProps = {
  skill: SkillItem;
  className?: string;
};

export function SkillCard({ skill, className }: SkillCardProps) {
  const monogram = skill.name.slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        'border-n200 bg-canvas hover:border-mag-200 hover:bg-canvas-raised flex items-center gap-3 rounded-sm border px-3 py-2 transition-all duration-200',
        className
      )}
    >
      {/* Logo or monogram */}
      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        {skill.logo ? (
          <Image
            src={skill.logo}
            alt={skill.name}
            width={24}
            height={24}
            className="object-contain"
          />
        ) : (
          <span className="text-mag-500 font-mono text-[0.55rem] font-bold">{monogram}</span>
        )}
      </div>

      {/* Name */}
      <span className="text-n700 flex-1 text-xs font-medium">{skill.name}</span>

      {/* Proficiency dots */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn('h-1 w-1 rounded-full', i < skill.level ? 'bg-mag-500' : 'bg-n200')}
          />
        ))}
      </div>
    </div>
  );
}
