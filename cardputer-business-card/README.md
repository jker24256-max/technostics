# TTG Digital Business Card — Cardputer-Adv

Standalone digital business card firmware for the M5Stack Cardputer-Adv.

Identity:
- Abdul Muhaymin Nawaz — Founder & CTO
- The Technostic Group
- https://technosticsgroup.com
- abdul@technosticsgroup.com
- +91 74390 08165
- LinkedIn: https://www.linkedin.com/in/technostics-group
- Company Instagram: @the_technostic
- Founder Instagram: @jker24256
- Tagline: Praemonitus, Praemunitus

The UI uses the supplied TTG crest, midnight navy, gold accents, fine circuit-style geometry, and keyboard-first navigation.

Controls:
ENTER = continue/select
Q = website QR
V = vCard QR
C = contact
W = website
L = LinkedIn
I = Instagram
A = about
X = back/home

Build with PlatformIO:
pio run
pio run -t upload

M5Stack currently documents the Cardputer-Adv as a 240x135 ST7789V2 display, ESP32-S3, and supports the M5Cardputer Arduino library. The project targets the official M5Cardputer board/library stack.

The QR generator is vendored and renamed under lib/TTGQRCode to avoid the ESP32 core's qrcode.h name collision.
