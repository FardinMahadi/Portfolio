import type { ResumeImageProps } from '@/archive/v1/components/types/resume';

import { Image, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 9999,
    overflow: 'hidden',
    border: '1pt solid #e5e7eb',
  },
});

export function ResumeImage({ src, size = 80, borderRadius = 9999 }: ResumeImageProps) {
  if (!src) return null;
  return (
    <View style={[styles.wrapper, { width: size, height: size, borderRadius }]}>
      {/* React PDF Image component does not support alt attributes */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Image src={src} style={{ width: size, height: size, objectFit: 'cover' } as any} />
    </View>
  );
}
