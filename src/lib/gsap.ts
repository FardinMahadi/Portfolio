import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isRegistered = false;

export function ensureGsapPlugins() {
  if (isRegistered) return;

  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}
