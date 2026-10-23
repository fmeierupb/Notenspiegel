// Hält die Seite für den Offline-Betrieb vor. Lädt nur die Programmdateien, nie Daten.
const CACHE = "notenauswertung-2efb3eb761";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  // Nur eigene alte Speicher löschen. Andere Werkzeuge unter derselben Adresse (etwa gleichungen/) behalten ihre
  e.waitUntil(caches.keys().then((namen) => Promise.all(namen.filter((n) => n.startsWith("notenauswertung-") && n !== CACHE).map((n) => caches.delete(n)))).then(() => self.clients.claim()));
});
// Erst das Netz, damit neue Fassungen ankommen. Ohne Netz (oder nach 4 Sekunden) aus dem Speicher.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  // Unterordner gehören anderen Werkzeugen mit eigenem Service Worker
  if (new URL(e.request.url).pathname.slice(new URL("./", self.location).pathname.length).includes("/")) return;
  const ausSpeicher = () => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match("./index.html"));
  const netz = fetch(e.request, { cache: "no-cache" }).then((r) => {
    if (r.ok) { const kopie = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, kopie)); }
    return r;
  });
  const zeit = new Promise((ok, nein) => setTimeout(nein, 4000));
  e.respondWith(Promise.race([netz, zeit]).catch(() => ausSpeicher().then((r) => r || netz)));
});
