# Notenauswertung

Notenspiegel, Notenliste und Word-Export für Klassenarbeiten. Läuft komplett im Browser.

Seite: https://fmeierupb.github.io/Notenspiegel/

## Daten

Namen, Klassen, Kurse, im Kurs gespeicherte Arbeiten (Punkte und Noten) und die laufenden Eingaben stehen im Browserspeicher des Geräts und werden nirgendwohin übertragen. Eine Arbeit wird mit „Im Kurs speichern“ oder beim Word-Export im Kurs gespeichert und lässt sich dort wieder löschen. Eine Backup-Datei ist eine Kopie aller Kurse, die man selbst erstellt und ablegt. Die Seite verbietet sich per Content Security Policy jede ausgehende Verbindung (`connect-src 'none'`). Der Service Worker lädt nur die Programmdateien dieser Seite für den Offline-Betrieb.

## Enthaltener Fremdcode

pdf.js 3.11.174 der Mozilla Foundation, Apache-Lizenz 2.0, zum Lesen von PDF-Listen.
