# Pellazgo Shop — iOS App

**Albanian Premium E-Commerce** | React + Vite + Capacitor 5 + Base44 BaaS

---

## App Info

| Field | Value |
|-------|-------|
| **Bundle ID** | com.pellazgo.app |
| **Team ID** | H4QUDPK7S3 |
| **iOS Target** | 13.0+ |
| **Category** | Shopping |
| **Languages** | Albanian (sq), English (en) |

## Stack

- **Frontend:** React 19 + Vite 8 + Tailwind CSS
- **Mobile:** Capacitor 5 (WKWebView shell)
- **Backend:** Base44 BaaS (Auth, Database, Storage, AI)
- **CI/CD:** Codemagic — auto TestFlight on push to main

## Development

```bash
npm ci               # Install dependencies
npm run build        # Build web assets (dist/)
npm run cap:sync     # Sync dist/ to iOS native project
npm run cap:open     # Open ios/App/App.xcworkspace in Xcode
```

## CI/CD Pipeline

Push to `main` branch triggers Codemagic automatically:
1. Web build (Vite)
2. Capacitor sync
3. Privacy Manifest injection
4. CocoaPods install
5. Archive (Automatic signing)
6. Export IPA
7. Upload to TestFlight

## Social

- Instagram: [@pellazgo.official](https://www.instagram.com/pellazgo.official)
- Facebook: [Pellazgo Official](https://www.facebook.com/p/Pellazgo-Offici-61590856476746/)
- TikTok: [@pellazgo.official](https://www.tiktok.com/@pellazgo.official)

## Contact

info@pellazgo.com | https://pellazgo.com
