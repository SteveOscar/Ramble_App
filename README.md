# Ramble App
## IOS mobile app for exploring international currency and expense trend data.

Author: Steven Olson


### App Demo
![RambleApp](http://g.recordit.co/G5v3UwbVzx.gif)

### Overview

This IOS app, built with React Native and a Rails API, is designed to allow users to explore year-over-year currency exchange trends and relative expenses between countries. It's the data-side companion app to [RambleMap](http://ramblemap.com/), which provides the API for Ramble App.

On the Rails API side, performance is increased through low and high-level caching, and a background rake task to fill the most popular API call caches nightly.

### Dependencies

This application can be run locally for now, as the RambleMap API is open.

### Setup

If you wish to download the project and set it up locally, run the following commands:

1. `git clone https://github.com/SteveOscar/Ramble_App.git`
2. `npm install`
3.  Open the project in Xcode at: Ramble_app/ios/RambleApp.xcodeproj
4. If there are errors open the AppDelegate.m file and make sure line 34 is NOT commented out, and line 44 IS commented out.
