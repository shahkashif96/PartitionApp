# Partition — PDF Splitter APK (Capacitor + Android)

A complete, self-contained Capacitor project that builds into a native Android APK using GitHub Actions.

## What's inside
- **www/** — the complete PDF splitter web app (HTML + JavaScript)
- **android/** — full Android Gradle project (ready to build)
- **.github/workflows/build.yml** — automated APK builds via GitHub Actions

## How to build

### Option 1: GitHub Actions (easiest, on your phone)
1. All files are in this repository
2. GitHub automatically builds the APK when files are pushed
3. Download the `.apk` from the Actions tab

### Option 2: Android Studio (on desktop)
1. Clone this repo
2. Open `android/` folder in Android Studio
3. Click **Build → Build Bundle(s) / APK(s) → Build APK(s)**
4. Find the APK in `android/app/build/outputs/apk/debug/app-debug.apk`

## Features
- Split PDF into N equal parts
- Split into N pages per part
- Custom page ranges (1-100, 101-200, etc.)
- Split by target file size (MB)
- Live size estimates before splitting
- Works offline — no data leaves your device

## Download APK
1. Go to **Actions** (top menu)
2. Click **Build APK**
3. Download **Partition-APK** artifact
4. Extract and install on your phone
