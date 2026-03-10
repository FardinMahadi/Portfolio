'use client';

import { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorPalette } from '@/contexts/ColorPaletteContext';

export function ColorPaletteSwitcher() {
  const { currentPalette, setPalette, availablePalettes } = useColorPalette();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="sm"
        variant="outline"
        className="border-theme-border/70 text-theme-text/70 hover:text-theme-primary hover:border-theme-primary/50 min-h-[44px] min-w-[44px] p-2 transition-all duration-300"
        aria-label="Change color palette"
      >
        <Palette className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-background) 40%, transparent)',
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Palette Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-full z-50 mb-2 min-w-[200px] rounded-lg border shadow-xl backdrop-blur-sm md:top-full md:bottom-auto md:mt-2"
              style={{
                background:
                  'linear-gradient(to bottom right, color-mix(in srgb, var(--color-surface) 95%, transparent), color-mix(in srgb, var(--color-background) 98%, transparent))',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="max-h-[50vh] space-y-1 overflow-y-auto p-2">
                {Object.entries(availablePalettes).map(([key, palette]) => {
                  const isSelected = currentPalette.name === palette.name;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setPalette(key);
                        setIsOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-all duration-200 ${
                        isSelected
                          ? 'text-theme-primary border font-medium'
                          : 'text-theme-text/70 hover:text-theme-primary'
                      }`}
                      style={
                        isSelected
                          ? {
                              backgroundColor:
                                'color-mix(in srgb, var(--color-primary) 15%, transparent)',
                              borderColor:
                                'color-mix(in srgb, var(--color-primary) 50%, transparent)',
                              boxShadow: `0 0 0 1px var(--color-primary), inset 0 0 20px -10px var(--color-primary)`,
                            }
                          : {
                              backgroundColor: 'transparent',
                              borderColor: 'transparent',
                            }
                      }
                      onMouseEnter={e => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor =
                            'color-mix(in srgb, var(--color-surface) 50%, transparent)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div
                        className="h-4 w-4 rounded-full border-2"
                        style={{
                          backgroundColor: palette.primary,
                          borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                          boxShadow: isSelected ? `0 0 8px ${palette.primary}` : undefined,
                        }}
                      />
                      <span className="flex-1">{palette.name}</span>
                      {isSelected && (
                        <span
                          className="ml-auto text-base font-bold"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
