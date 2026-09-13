# Vision Forever – Designänderung

Dieser separate Branch enthält ausschließlich die Präsentationsänderung für das Forever-Projekt. `main` und das Everlook-Produktionsprojekt bleiben unverändert. Automatische Vercel-Deployments dieses Theme-Branches sind deaktiviert: Er enthält nicht den vollständigen Anwendungsquellcode und darf das bestehende Everlook-Projekt nicht ersetzen.

## Enthaltene Änderung

- Unverändertes, vom Nutzer freigegebenes Vision-Forever-Logo.
- Dunkles Papier, tiefblaue Oberflächen und elfenbeinfarbene Schrift nach der Blizzard-Forever-Referenz.
- Originale Camelot-Rahmen, Trennlinien und Papiertextur der Referenzseite.
- Einheitliche Darstellung von Header, Navigation, Roster, Seitenleisten, Detailansichten und Admin-Fenstern.
- Klassen-, Rang- und Fehlerfarben bleiben semantisch erhalten.
- Keine Änderungen an Charakteren, Klassenregeln, Backend, Zugangsdaten oder Datenbank.

## Integration in den vorhandenen Forever-Quellstand

Die zwei Dateien nach `src/` kopieren und am Ende der bestehenden `src/main.tsx` beziehungsweise `src/main.jsx` importieren:

```tsx
import './forever-theme.css';
import './forever-branding.js';
```

Der Branding-Adapter aktiviert sich nur bei einer erkannten Forever-Seite. Das Logo wird in bestehenden und nachgerenderten Wappen ersetzt. Es wird nicht neu generiert oder nachgezeichnet.

## Quellen

Logo: https://chatgpt.com/s/m_6aa675b84100819187beb1290611f0b1

Design: https://worldofwarcraft.blizzard.com/de-de/forever

## Status

Design-Code erstellt. Dieser Branch ist kein Nachweis eines aktualisierten Vercel-Deployments. Bestehende Backend-Probleme werden durch ein Theme nicht behoben.
