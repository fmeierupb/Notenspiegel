# Notenauswertung

Notenspiegel, Notenliste und Word-Export für Klassenarbeiten, dazu Tests, Mappe und Mitarbeit pro Stunde und eine Übersicht mit Endnote nach eigenem Schlüssel und Statistik für frei wählbare Zeiträume. Läuft komplett im Browser.

Seite: https://fmeierupb.github.io/Notenspiegel/

## Daten

Namen, Klassen, Kurse, im Kurs gespeicherte Arbeiten (Punkte und Noten), Tests, Mappe, Mitarbeit, Zeiträume, Noten der Übersicht und die laufenden Eingaben stehen im Browserspeicher des Geräts und werden nirgendwohin übertragen. Eine Arbeit wird mit „Im Kurs speichern“ oder beim Word-Export im Kurs gespeichert und lässt sich dort wieder löschen. Eine Backup-Datei ist eine mit Passwort verschlüsselte Kopie aller Kurse (AES-256-GCM, Schlüssel per PBKDF2-SHA256), die man selbst erstellt und ablegt. Auf Wunsch öffnet sich das Tool nur nach Fingerabdruck, Face ID oder Gerätecode, über einen Passkey für diese Seite. Die Seite verbietet sich per Content Security Policy jede ausgehende Verbindung (`connect-src 'none'`). Der Service Worker lädt nur die Programmdateien dieser Seite für den Offline-Betrieb.

## Enthaltener Fremdcode

pdf.js 3.11.174 der Mozilla Foundation, Apache-Lizenz 2.0, zum Lesen von PDF-Listen.
