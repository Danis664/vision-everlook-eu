# Vision: Roster und Guides – 11. November 2026

## Status

Die Änderung ist auf Basis der tatsächlich ausgelieferten Website vorbereitet und im isolierten Browser geprüft. Sie ist noch nicht auf `vision-eu.de` eingespielt: SentinelX hat den Schreibversuch als `dry_run` mit `path_not_allowed` abgelehnt. Auch das angeforderte Zurücksetzen des Admin-Kennworts ist noch nicht ausgeführt. Dieses Repository enthält keine Kennwörter oder Kennworthashes.

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

Zum Einspielen fehlt in der bestehenden SentinelX-Konfiguration `file_ops.paths` die Freigabe `access: rw` für die Website-Zieldatei. Für den separat beauftragten Kennwort-Reset fehlt die Freigabe für `/srv/ashen-realms/vision-eu/data/users.json`; das Speichern dieser Datei benötigt zusätzlich die bereits vorhandene sudo-Funktion. Die vorhandenen Freigaben sind zu ergänzen, nicht zu ersetzen.

## Validierung

- Vollständiges Inline-JavaScript syntaktisch geprüft.
- Browserprüfung der kombinierten Frontend-Datei bei 1638 px und 390 px; keine horizontale Seitenüberbreite.
- Anzeige und Pause/Reserve: 11 Spalten; Bearbeitung und Neuanlage: 12 sichtbare Spalten inklusive Bereich/Aktion.
- Namensfeld in der Desktopvorschau 222,6 px breit; „Zuku Vision“ im Bearbeitungsformular geprüft.
- 61 aktive und 50 pausierte Mitglieder in der Vorschau geladen.
- Guides: 9 Klassenkarten, 28 Spezialisierungslinks, korrigierte Dungeon-Werte. Klassenfilter und Suche nach „Heating Up“ funktionieren.
- Die Vorschau lief ausschließlich in einem isolierten Browser; schreibende HTTP-Anfragen waren gesperrt. Es gab keine Änderungen an Live-Mitgliederdaten.

![Roster-Vorschau mit entfernten ST-/A/G-Spalten](review/roster-preview.jpg)
