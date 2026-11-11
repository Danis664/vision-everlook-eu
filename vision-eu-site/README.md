# Vision: Roster und Guides – 11. November 2026

## Status

Am 11.11.2026 auf `vision-eu.de` eingespielt und anschließend live geprüft. Nach der gezielten Schreibfreigabe wurde die Website-Datei mit Sicherung und Prüfung des unveränderten Ausgangsstands aktualisiert. Der separat beauftragte Reset für das Admin-Konto Vision ist ausgeführt; die Anmeldung wurde erfolgreich geprüft, bestehende Sitzungen wurden über die Anwendung ungültig gemacht und die Prüfsitzung wurde abgemeldet. Dieses Repository enthält keine Kennwörter oder Kennworthashes.

## Roster

- Die sichtbaren Spalten ST und A/G entfallen in Anzeige, Pause/Reserve, Inline-Bearbeitung und Formularen.
- Die Namensspalte erhält mehr Breite. Lange Namen können umbrechen; Namen mit Leerzeichen sind möglich.
- Die Neuanlage zeigt den Platzhalter „z. B. Zuku Vision“. Bestehende Charakternamen werden nicht umbenannt.
- Vorhandene ST-/AG-Werte werden beim Bearbeiten weiter erhalten; die gespeicherten Mitgliederdaten werden durch dieses Frontend-Update nicht migriert oder gelöscht.

## Guides Forever

- Alle 28 vorhandenen Spezialisierungsguides mit wowtbc.gg abgeglichen; kurze deutsche Zusammenfassungen je Spezialisierung in den vorhandenen aufklappbaren Karten.
- Veraltete Level-30-Beta-Verweise durch Hinweise auf aktuelle Leveling-Builds 1–60 ersetzt.
- Dungeon-Level nach der aktuellen Loot-Übersicht: Ruins of Lordaeron 16–23, Excavation Site: Wetlands 26–32, City of Dalaran 28–34.
- Troll–Hexenmeister ergänzt; verbliebene Abweichungen zwischen Skyborne-/Magier-Quellen benannt.
- Abgleichdatum 11.11.2026. Das von der Newsübersicht ausgewiesene eigene Aktualisierungsdatum bleibt 15.09.2026.
- SOURCES.json enthält die verwendeten URLs. Es wurden eigene Kurzfassungen erstellt, keine vollständigen Fremd-Guides kopiert.

## Dateien und Integration

`index.html` ist die vollständige geänderte Frontend-Datei. `update.patch` zeigt ausschließlich die Änderungen gegenüber der gelesenen Live-Datei. Vor dem Einspielen den aktuellen Serverstand erneut vergleichen und sichern.

Zieldatei: `/srv/ashen-realms/assets/vision-eu-site/index.html`

SHA-256 des geprüften Ausgangsstands: `2016688b2fc80fe597825e5008b1cf2be1d50d5269b433df83b6d1ba5d82dc44`

Die bestehenden `/api/*`-Endpunkte, Backenddateien, lokalen Bilddateien und Roster-Daten bleiben auf dem Server. Dieser Branch ist kein vollständiges neues Vercel-Projekt. Automatische Vercel-Deployments sind nur für diesen Arbeitsbranch deaktiviert.

Die zuvor fehlenden Schreibfreigaben wurden vom Eigentümer gezielt für die Website-Zieldatei und die Benutzerdatei erteilt und vor dem Einspielen geprüft. Sicherungen beider Dateien wurden erstellt; Dateieigentümer und Zugriffsrechte sind erhalten geblieben.

SHA-256 der veröffentlichten Frontend-Datei: `c9af425e4681a36ffa36ffac2802918fa435e0938086e88afee1862e39b6a90f`. Der per HTTPS ausgelieferte Inhalt stimmt bytegenau damit überein.

## Validierung

- Vollständiges Inline-JavaScript syntaktisch geprüft.
- Browserprüfung der kombinierten Frontend-Datei bei 1638 px und 390 px; keine horizontale Seitenüberbreite.
- Anzeige und Pause/Reserve: 11 Spalten; Bearbeitung und Neuanlage: 12 sichtbare Spalten inklusive Bereich/Aktion.
- Namensfeld in der Desktopvorschau 222,6 px breit; „Zuku Vision“ im Bearbeitungsformular geprüft.
- 61 aktive und 50 pausierte Mitglieder in der Vorschau geladen.
- Guides: 9 Klassenkarten, 28 Spezialisierungslinks, korrigierte Dungeon-Werte. Klassenfilter und Suche nach „Heating Up“ funktionieren.
- Die Vorschau lief ausschließlich in einem isolierten Browser; schreibende HTTP-Anfragen waren gesperrt. Es gab keine Änderungen an Live-Mitgliederdaten.
- Nach dem Einspielen live bestätigt: 64 aktive und 50 pausierte Mitglieder, insgesamt 114. Website und Roster-API antworten mit HTTP 200.
- Zusätzliche Live-Browserprüfung bei 1440, 1024 und 390 px: korrekte Spalten, Namensumbruch, keine horizontale Seitenüberbreite und keine beobachteten JavaScript-Fehler.
- Roster-Daten, Backenddatei und die übrigen fünf Benutzerkonten sind anhand von Hashvergleichen unverändert. Die Benutzerdatei behält Modus 0600.
- Admin-Anmeldung mit dem beauftragten Kennwort erfolgreich; Sitzungswiderruf und anschließende erneute Anmeldung sowie Abmeldung geprüft.

![Roster-Vorschau mit entfernten ST-/A/G-Spalten](review/roster-preview.jpg)
