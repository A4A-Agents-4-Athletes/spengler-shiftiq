import React from 'react';
import { ExternalLink, Play, Activity, Zap, Dna, Radio, X, Smartphone, CheckCircle2 } from 'lucide-react';
import { Language } from '../../lib/i18n';

export const LIVE_DEMO_URL = 'https://a4a-agents-4-athletes.github.io/spengler-shiftiq/';
export const PUBLIC_REPO_URL = 'https://github.com/A4A-Agents-4-Athletes/spengler-shiftiq';

// Exact ISO-18004 Error-Correction-M 37x37 QR matrix path encoding:
// https://a4a-agents-4-athletes.github.io/spengler-shiftiq/
const QR_SVG_PATH =
  'M2,2h1v1h-1zM3,2h1v1h-1zM4,2h1v1h-1zM5,2h1v1h-1zM6,2h1v1h-1zM7,2h1v1h-1zM8,2h1v1h-1zM14,2h1v1h-1zM20,2h1v1h-1zM21,2h1v1h-1zM22,2h1v1h-1zM23,2h1v1h-1zM25,2h1v1h-1zM28,2h1v1h-1zM29,2h1v1h-1zM30,2h1v1h-1zM31,2h1v1h-1zM32,2h1v1h-1zM33,2h1v1h-1zM34,2h1v1h-1z' +
  'M2,3h1v1h-1zM8,3h1v1h-1zM11,3h1v1h-1zM17,3h1v1h-1zM18,3h1v1h-1zM19,3h1v1h-1zM22,3h1v1h-1zM24,3h1v1h-1zM28,3h1v1h-1zM34,3h1v1h-1z' +
  'M2,4h1v1h-1zM4,4h1v1h-1zM5,4h1v1h-1zM6,4h1v1h-1zM8,4h1v1h-1zM10,4h1v1h-1zM11,4h1v1h-1zM12,4h1v1h-1zM14,4h1v1h-1zM16,4h1v1h-1zM20,4h1v1h-1zM22,4h1v1h-1zM23,4h1v1h-1zM24,4h1v1h-1zM26,4h1v1h-1zM28,4h1v1h-1zM30,4h1v1h-1zM31,4h1v1h-1zM32,4h1v1h-1zM34,4h1v1h-1z' +
  'M2,5h1v1h-1zM4,5h1v1h-1zM5,5h1v1h-1zM6,5h1v1h-1zM8,5h1v1h-1zM10,5h1v1h-1zM12,5h1v1h-1zM17,5h1v1h-1zM19,5h1v1h-1zM21,5h1v1h-1zM24,5h1v1h-1zM26,5h1v1h-1zM28,5h1v1h-1zM30,5h1v1h-1zM31,5h1v1h-1zM32,5h1v1h-1zM34,5h1v1h-1z' +
  'M2,6h1v1h-1zM4,6h1v1h-1zM5,6h1v1h-1zM6,6h1v1h-1zM8,6h1v1h-1zM10,6h1v1h-1zM11,6h1v1h-1zM12,6h1v1h-1zM14,6h1v1h-1zM15,6h1v1h-1zM16,6h1v1h-1zM17,6h1v1h-1zM18,6h1v1h-1zM21,6h1v1h-1zM22,6h1v1h-1zM23,6h1v1h-1zM25,6h1v1h-1zM28,6h1v1h-1zM30,6h1v1h-1zM31,6h1v1h-1zM32,6h1v1h-1zM34,6h1v1h-1z' +
  'M2,7h1v1h-1zM8,7h1v1h-1zM10,7h1v1h-1zM12,7h1v1h-1zM13,7h1v1h-1zM14,7h1v1h-1zM15,7h1v1h-1zM16,7h1v1h-1zM20,7h1v1h-1zM22,7h1v1h-1zM24,7h1v1h-1zM26,7h1v1h-1zM28,7h1v1h-1zM34,7h1v1h-1z' +
  'M2,8h1v1h-1zM3,8h1v1h-1zM4,8h1v1h-1zM5,8h1v1h-1zM6,8h1v1h-1zM7,8h1v1h-1zM8,8h1v1h-1zM10,8h1v1h-1zM12,8h1v1h-1zM14,8h1v1h-1zM16,8h1v1h-1zM18,8h1v1h-1zM20,8h1v1h-1zM22,8h1v1h-1zM24,8h1v1h-1zM26,8h1v1h-1zM28,8h1v1h-1zM29,8h1v1h-1zM30,8h1v1h-1zM31,8h1v1h-1zM32,8h1v1h-1zM33,8h1v1h-1zM34,8h1v1h-1z' +
  'M10,9h1v1h-1zM12,9h1v1h-1zM18,9h1v1h-1zM23,9h1v1h-1zM24,9h1v1h-1zM25,9h1v1h-1z' +
  'M2,10h1v1h-1zM4,10h1v1h-1zM5,10h1v1h-1zM6,10h1v1h-1zM7,10h1v1h-1zM8,10h1v1h-1zM11,10h1v1h-1zM13,10h1v1h-1zM14,10h1v1h-1zM15,10h1v1h-1zM16,10h1v1h-1zM18,10h1v1h-1zM19,10h1v1h-1zM21,10h1v1h-1zM24,10h1v1h-1zM25,10h1v1h-1zM26,10h1v1h-1zM28,10h1v1h-1zM29,10h1v1h-1zM30,10h1v1h-1zM31,10h1v1h-1zM32,10h1v1h-1z' +
  'M2,11h1v1h-1zM3,11h1v1h-1zM4,11h1v1h-1zM5,11h1v1h-1zM6,11h1v1h-1zM7,11h1v1h-1zM15,11h1v1h-1zM18,11h1v1h-1zM21,11h1v1h-1zM25,11h1v1h-1zM28,11h1v1h-1zM29,11h1v1h-1zM31,11h1v1h-1zM32,11h1v1h-1zM34,11h1v1h-1z' +
  'M4,12h1v1h-1zM5,12h1v1h-1zM7,12h1v1h-1zM8,12h1v1h-1zM9,12h1v1h-1zM12,12h1v1h-1zM15,12h1v1h-1zM16,12h1v1h-1zM17,12h1v1h-1zM18,12h1v1h-1zM23,12h1v1h-1zM24,12h1v1h-1zM27,12h1v1h-1zM28,12h1v1h-1zM30,12h1v1h-1zM32,12h1v1h-1zM33,12h1v1h-1z' +
  'M3,13h1v1h-1zM5,13h1v1h-1zM7,13h1v1h-1zM9,13h1v1h-1zM10,13h1v1h-1zM11,13h1v1h-1zM15,13h1v1h-1zM17,13h1v1h-1zM18,13h1v1h-1zM20,13h1v1h-1zM22,13h1v1h-1zM23,13h1v1h-1zM27,13h1v1h-1zM28,13h1v1h-1zM30,13h1v1h-1zM31,13h1v1h-1zM32,13h1v1h-1z' +
  'M8,14h1v1h-1zM9,14h1v1h-1zM10,14h1v1h-1zM12,14h1v1h-1zM13,14h1v1h-1zM14,14h1v1h-1zM16,14h1v1h-1zM17,14h1v1h-1zM18,14h1v1h-1zM19,14h1v1h-1zM24,14h1v1h-1zM25,14h1v1h-1zM26,14h1v1h-1zM29,14h1v1h-1zM30,14h1v1h-1zM31,14h1v1h-1zM33,14h1v1h-1z' +
  'M5,15h1v1h-1zM6,15h1v1h-1zM9,15h1v1h-1zM12,15h1v1h-1zM13,15h1v1h-1zM14,15h1v1h-1zM17,15h1v1h-1zM20,15h1v1h-1zM21,15h1v1h-1zM22,15h1v1h-1zM23,15h1v1h-1zM25,15h1v1h-1zM28,15h1v1h-1zM33,15h1v1h-1zM34,15h1v1h-1z' +
  'M3,16h1v1h-1zM5,16h1v1h-1zM7,16h1v1h-1zM8,16h1v1h-1zM10,16h1v1h-1zM13,16h1v1h-1zM15,16h1v1h-1zM17,16h1v1h-1zM18,16h1v1h-1zM23,16h1v1h-1zM24,16h1v1h-1zM27,16h1v1h-1zM28,16h1v1h-1zM32,16h1v1h-1zM33,16h1v1h-1z' +
  'M10,17h1v1h-1zM16,17h1v1h-1zM17,17h1v1h-1zM20,17h1v1h-1zM23,17h1v1h-1zM24,17h1v1h-1zM27,17h1v1h-1zM28,17h1v1h-1zM29,17h1v1h-1zM30,17h1v1h-1zM31,17h1v1h-1zM32,17h1v1h-1z' +
  'M3,18h1v1h-1zM4,18h1v1h-1zM6,18h1v1h-1zM7,18h1v1h-1zM8,18h1v1h-1zM9,18h1v1h-1zM12,18h1v1h-1zM13,18h1v1h-1zM14,18h1v1h-1zM15,18h1v1h-1zM17,18h1v1h-1zM19,18h1v1h-1zM21,18h1v1h-1zM22,18h1v1h-1zM24,18h1v1h-1zM26,18h1v1h-1zM27,18h1v1h-1zM29,18h1v1h-1zM30,18h1v1h-1zM31,18h1v1h-1zM34,18h1v1h-1z' +
  'M2,19h1v1h-1zM4,19h1v1h-1zM5,19h1v1h-1zM6,19h1v1h-1zM7,19h1v1h-1zM14,19h1v1h-1zM18,19h1v1h-1zM19,19h1v1h-1zM20,19h1v1h-1zM21,19h1v1h-1zM23,19h1v1h-1zM25,19h1v1h-1zM26,19h1v1h-1zM28,19h1v1h-1zM29,19h1v1h-1zM31,19h1v1h-1zM32,19h1v1h-1zM33,19h1v1h-1zM34,19h1v1h-1z' +
  'M5,20h1v1h-1zM7,20h1v1h-1zM8,20h1v1h-1zM12,20h1v1h-1zM13,20h1v1h-1zM14,20h1v1h-1zM15,20h1v1h-1zM17,20h1v1h-1zM20,20h1v1h-1zM22,20h1v1h-1zM23,20h1v1h-1zM24,20h1v1h-1zM27,20h1v1h-1zM28,20h1v1h-1zM29,20h1v1h-1zM30,20h1v1h-1zM32,20h1v1h-1zM33,20h1v1h-1z' +
  'M4,21h1v1h-1zM7,21h1v1h-1zM12,21h1v1h-1zM13,21h1v1h-1zM14,21h1v1h-1zM16,21h1v1h-1zM17,21h1v1h-1zM18,21h1v1h-1zM22,21h1v1h-1zM23,21h1v1h-1zM24,21h1v1h-1zM26,21h1v1h-1zM27,21h1v1h-1zM28,21h1v1h-1zM29,21h1v1h-1zM30,21h1v1h-1zM31,21h1v1h-1zM32,21h1v1h-1zM33,21h1v1h-1z' +
  'M5,22h1v1h-1zM7,22h1v1h-1zM8,22h1v1h-1zM10,22h1v1h-1zM12,22h1v1h-1zM13,22h1v1h-1zM14,22h1v1h-1zM15,22h1v1h-1zM16,22h1v1h-1zM17,22h1v1h-1zM19,22h1v1h-1zM21,22h1v1h-1zM24,22h1v1h-1zM26,22h1v1h-1zM27,22h1v1h-1zM29,22h1v1h-1zM30,22h1v1h-1zM31,22h1v1h-1zM34,22h1v1h-1z' +
  'M2,23h1v1h-1zM7,23h1v1h-1zM9,23h1v1h-1zM11,23h1v1h-1zM12,23h1v1h-1zM13,23h1v1h-1zM14,23h1v1h-1zM15,23h1v1h-1zM17,23h1v1h-1zM18,23h1v1h-1zM19,23h1v1h-1zM21,23h1v1h-1zM22,23h1v1h-1zM24,23h1v1h-1zM25,23h1v1h-1zM27,23h1v1h-1zM28,23h1v1h-1zM31,23h1v1h-1zM32,23h1v1h-1zM34,23h1v1h-1z' +
  'M2,24h1v1h-1zM5,24h1v1h-1zM7,24h1v1h-1zM8,24h1v1h-1zM10,24h1v1h-1zM11,24h1v1h-1zM13,24h1v1h-1zM15,24h1v1h-1zM20,24h1v1h-1zM22,24h1v1h-1zM24,24h1v1h-1zM26,24h1v1h-1zM29,24h1v1h-1zM30,24h1v1h-1zM31,24h1v1h-1zM32,24h1v1h-1zM33,24h1v1h-1z' +
  'M2,25h1v1h-1zM4,25h1v1h-1zM5,25h1v1h-1zM11,25h1v1h-1zM12,25h1v1h-1zM13,25h1v1h-1zM15,25h1v1h-1zM18,25h1v1h-1zM20,25h1v1h-1zM21,25h1v1h-1zM23,25h1v1h-1zM26,25h1v1h-1zM27,25h1v1h-1zM30,25h1v1h-1zM31,25h1v1h-1zM32,25h1v1h-1zM33,25h1v1h-1z' +
  'M2,26h1v1h-1zM5,26h1v1h-1zM6,26h1v1h-1zM8,26h1v1h-1zM9,26h1v1h-1zM10,26h1v1h-1zM12,26h1v1h-1zM14,26h1v1h-1zM15,26h1v1h-1zM16,26h1v1h-1zM18,26h1v1h-1zM19,26h1v1h-1zM24,26h1v1h-1zM26,26h1v1h-1zM27,26h1v1h-1zM28,26h1v1h-1zM29,26h1v1h-1zM30,26h1v1h-1zM34,26h1v1h-1z' +
  'M10,27h1v1h-1zM11,27h1v1h-1zM12,27h1v1h-1zM13,27h1v1h-1zM14,27h1v1h-1zM15,27h1v1h-1zM16,27h1v1h-1zM18,27h1v1h-1zM20,27h1v1h-1zM21,27h1v1h-1zM23,27h1v1h-1zM24,27h1v1h-1zM26,27h1v1h-1zM30,27h1v1h-1zM32,27h1v1h-1zM34,27h1v1h-1z' +
  'M2,28h1v1h-1zM3,28h1v1h-1zM4,28h1v1h-1zM5,28h1v1h-1zM6,28h1v1h-1zM7,28h1v1h-1zM8,28h1v1h-1zM11,28h1v1h-1zM13,28h1v1h-1zM15,28h1v1h-1zM17,28h1v1h-1zM18,28h1v1h-1zM20,28h1v1h-1zM22,28h1v1h-1zM25,28h1v1h-1zM26,28h1v1h-1zM28,28h1v1h-1zM30,28h1v1h-1zM32,28h1v1h-1zM33,28h1v1h-1z' +
  'M2,29h1v1h-1zM8,29h1v1h-1zM10,29h1v1h-1zM12,29h1v1h-1zM14,29h1v1h-1zM17,29h1v1h-1zM18,29h1v1h-1zM21,29h1v1h-1zM23,29h1v1h-1zM25,29h1v1h-1zM26,29h1v1h-1zM30,29h1v1h-1zM31,29h1v1h-1zM32,29h1v1h-1zM33,29h1v1h-1zM34,29h1v1h-1z' +
  'M2,30h1v1h-1zM4,30h1v1h-1zM5,30h1v1h-1zM6,30h1v1h-1zM8,30h1v1h-1zM10,30h1v1h-1zM12,30h1v1h-1zM13,30h1v1h-1zM17,30h1v1h-1zM19,30h1v1h-1zM20,30h1v1h-1zM22,30h1v1h-1zM26,30h1v1h-1zM27,30h1v1h-1zM28,30h1v1h-1zM29,30h1v1h-1zM30,30h1v1h-1zM31,30h1v1h-1zM33,30h1v1h-1z' +
  'M2,31h1v1h-1zM4,31h1v1h-1zM5,31h1v1h-1zM6,31h1v1h-1zM8,31h1v1h-1zM10,31h1v1h-1zM12,31h1v1h-1zM13,31h1v1h-1zM14,31h1v1h-1zM15,31h1v1h-1zM17,31h1v1h-1zM19,31h1v1h-1zM20,31h1v1h-1zM21,31h1v1h-1zM22,31h1v1h-1zM23,31h1v1h-1zM26,31h1v1h-1zM30,31h1v1h-1zM32,31h1v1h-1zM33,31h1v1h-1zM34,31h1v1h-1z' +
  'M2,32h1v1h-1zM4,32h1v1h-1zM5,32h1v1h-1zM6,32h1v1h-1zM8,32h1v1h-1zM10,32h1v1h-1zM11,32h1v1h-1zM12,32h1v1h-1zM15,32h1v1h-1zM17,32h1v1h-1zM18,32h1v1h-1zM22,32h1v1h-1zM23,32h1v1h-1zM24,32h1v1h-1zM25,32h1v1h-1zM26,32h1v1h-1zM27,32h1v1h-1zM28,32h1v1h-1zM29,32h1v1h-1z' +
  'M2,33h1v1h-1zM8,33h1v1h-1zM11,33h1v1h-1zM12,33h1v1h-1zM13,33h1v1h-1zM18,33h1v1h-1zM20,33h1v1h-1zM22,33h1v1h-1zM23,33h1v1h-1zM25,33h1v1h-1zM30,33h1v1h-1zM32,33h1v1h-1z' +
  'M2,34h1v1h-1zM3,34h1v1h-1zM4,34h1v1h-1zM5,34h1v1h-1zM6,34h1v1h-1zM7,34h1v1h-1zM8,34h1v1h-1zM10,34h1v1h-1zM11,34h1v1h-1zM12,34h1v1h-1zM13,34h1v1h-1zM14,34h1v1h-1zM16,34h1v1h-1zM19,34h1v1h-1zM21,34h1v1h-1zM22,34h1v1h-1zM24,34h1v1h-1zM25,34h1v1h-1zM26,34h1v1h-1zM27,34h1v1h-1zM28,34h1v1h-1zM29,34h1v1h-1zM33,34h1v1h-1z';

export const LiveDemoQrSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 37 37"
    shapeRendering="crispEdges"
    className={className}
    aria-label="Scan QR Code to open Spengler ShiftIQ Live Web App"
  >
    <rect width="37" height="37" fill="#ffffff" rx="2" />
    <path d={QR_SVG_PATH} fill="#050b17" />
  </svg>
);

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectScenario: (tab: string, proLens: boolean) => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectScenario,
}) => {
  if (!isOpen) return null;
  const isDe = language === 'DE';

  const scenarios = [
    {
      step: '01',
      title: isDe
        ? 'Story-Lens & Ambühl #10 Experten-Kommentar'
        : 'Story Lens & Legend’s Eye · Ambühl #10',
      subtitle: isDe
        ? '100.1 km/h Tambellini-Tor + Unsichtbarer Spielmacher (#77 Gross / #66 Nussbaumer)'
        : '100.1 km/h Tambellini Goal + Invisible Playmaker Catalyst Spotlight',
      tab: 'replay',
      proLens: false,
      icon: Play,
      badge: 'Criterion #1: Relevancy',
    },
    {
      step: '02',
      title: isDe
        ? '10-Spieler Pro-Lens & Coach-Standbilder (0.0s..7.2s)'
        : '10-Skater Pro Video-Room Lens & Keyframes',
      subtitle: isDe
        ? 'Alle 10 Feldspieler (StartPlayer1..12), Royal-Road-Achse & Slot-House'
        : 'All 10 on-ice skaters (StartPlayer1..12), Royal-Road Seam & Slot House',
      tab: 'replay',
      proLens: true,
      icon: Activity,
      badge: 'Criterion #4: Technical',
    },
    {
      step: '03',
      title: isDe
        ? '18-Minuten Drittelpausen-Micro-Fantasy (3er-Triade)'
        : '18-Minute Intermission Shift Micro-Fantasy',
      subtitle: isDe
        ? 'Wähle Rocket, Sniper & Anchor aus allen 40 echten Final-Spielern'
        : 'Draft 1 Rocket, 1 Sniper & 1 Anchor from all 40 official Final skaters',
      tab: 'fantasy',
      proLens: false,
      icon: Zap,
      badge: 'Criterion #2: Creativity',
    },
    {
      step: '04',
      title: isDe
        ? '3D-Spieler-DNA & ETH-Shift-Physiologie (m/Min TOI)'
        : '3D Foil Player DNA & Shift Physiology Load',
      subtitle: isDe
        ? '6-Achsen-Radar, Arbeitsrate (m/Min TOI) & Erschöpfungs-Index (48s vs 62s)'
        : '6-axis radar, Anaerobic Work Rate (m/min TOI) & Fatigue Index (48s vs 62s)',
      tab: 'dna',
      proLens: true,
      icon: Dna,
      badge: 'Criterion #2 & #4',
    },
    {
      step: '05',
      title: isDe
        ? 'SRF Broadcast QR-Sync & Sponsoren-ROI-Simulator'
        : 'SRF Broadcast QR Sync & Sponsor ROI Simulator',
      subtitle: isDe
        ? '87’800 Second-Screen-Sessions & 12’200 Sponsoren-Conversions bei 8% Scan-Rate'
        : '87,800 active sessions & 12,200 sponsor conversions at 8% target scan rate',
      tab: 'activation',
      proLens: false,
      icon: Radio,
      badge: 'Criterion #3: Impact & ROI',
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#081124] border-2 border-cyan-400/50 rounded-2xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl space-y-6 my-auto">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-black text-cyan-400 uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              <span>
                {isDe
                  ? 'LIVE STAGE DEMO & JURY-VERIFIKATION (GITHUB PAGES)'
                  : 'LIVE STAGE DEMO & JURY VERIFICATION (GITHUB PAGES)'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              {isDe
                ? 'Spengler ShiftIQ · Interaktive Live-Demo & 5-Schritte-Jury-Tour'
                : 'Spengler ShiftIQ · Interactive Live Demo & 5-Step Jury Tour'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Close Live Demo Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Grid: Scannable QR on Left, 5 Interactive Scenarios on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: Scannable Mobile Sync Card */}
          <div className="md:col-span-5 bg-slate-950 border border-cyan-400/30 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 shadow-xl">
            <div className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-black uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isDe ? 'ECHTER SCANBARER QR-CODE' : 'REAL SCANNABLE QR CODE'}</span>
            </div>

            <div className="p-3 bg-white rounded-xl shadow-2xl border-4 border-cyan-400">
              <LiveDemoQrSvg className="w-44 h-44 sm:w-48 sm:h-48" />
            </div>

            <div className="space-y-1.5">
              <div className="text-sm font-black text-white">
                {isDe ? 'Mit Smartphone-Kamera scannen' : 'Scan with Your Phone Camera'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isDe
                  ? 'Öffnet die Live-Web-App sofort auf iOS & Android (ohne App-Store-Installation).'
                  : 'Opens the live GitHub Pages web app immediately on iOS & Android with zero install.'}
              </p>
            </div>

            <div className="w-full pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-black flex items-center justify-center gap-1.5 transition-all"
              >
                <span>a4a-agents-4-athletes.github.io/spengler-shiftiq</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
              <a
                href={PUBLIC_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>GitHub: A4A-Agents-4-Athletes/spengler-shiftiq</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: 5 1-Click Live Pitch Scenarios */}
          <div className="md:col-span-7 space-y-2.5">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
              {isDe
                ? 'Klicke ein Szenario für den direkten Sprung in der Live-Präsentation:'
                : 'Click any scenario to jump directly during the live pitch:'}
            </div>

            {scenarios.map((sc) => {
              const Icon = sc.icon;
              return (
                <button
                  key={sc.step}
                  type="button"
                  onClick={() => {
                    onSelectScenario(sc.tab, sc.proLens);
                    onClose();
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-900/90 hover:bg-blue-950/70 border border-white/10 hover:border-cyan-400 transition-all flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-mono font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                    {sc.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-black text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        {sc.title}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-emerald-500/30">
                        {sc.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">{sc.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
