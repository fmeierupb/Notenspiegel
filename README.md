# Notenauswertung

Notenspiegel, Notenliste und Word-Export für Klassenarbeiten. Läuft komplett im Browser.

Seite: https://fmeierupb.github.io/Notenspiegel/

## Daten

Namen, Klassen, Kurse und gesicherte Arbeiten (Punkte und Noten) liegen nur im Browserspeicher des Geräts. Eine Arbeit wird beim Word-Export gesichert und lässt sich im Tool wieder löschen. Die Seite verbietet sich per Content Security Policy jede ausgehende Verbindung (`connect-src 'none'`). Der Service Worker lädt nur die Programmdateien dieser Seite für den Offline-Betrieb.

## Enthaltener Fremdcode

pdf.js 3.11.174 der Mozilla Foundation, Apache-Lizenz 2.0, zum Lesen von PDF-Listen.
