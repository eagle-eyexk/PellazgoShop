# Signing Files — Pellazgo Shop

## IMPORTANT: No signing credentials are stored here.

All signing credentials are stored securely in:
- **Codemagic:** Automatic signing via App Store Connect API (pellazgo_asc integration)
- **Xcode:** Automatic signing in Xcode with Team ID H4QUDPK7S3

## Required for Manual Signing (local Xcode archive only)

If you need to archive locally, you need:

1. **Apple Distribution Certificate** — export from Keychain Access as .p12
2. **Provisioning Profile** — download from developer.apple.com
3. **App Store Connect API Key** — generate at appstoreconnect.apple.com

These are NEVER committed to this repository.

## App Details

| Field | Value |
|-------|-------|
| Bundle ID | com.pellazgo.app |
| Team ID | H4QUDPK7S3 |
| App Store Connect | https://appstoreconnect.apple.com |

## Codemagic Setup

The `pellazgo_asc` App Store Connect integration in Codemagic handles all signing automatically.
No manual certificate management required for CI/CD.
