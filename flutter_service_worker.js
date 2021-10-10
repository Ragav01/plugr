'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bca5613f731248b46fa4981fec9e62dd",
"assets/assets/avatar/avatar-1.jpg": "f28219213160572ce24cde357de72929",
"assets/assets/avatar/avatar-2.jpg": "e3da3f3494af22d29f76e9cfc10b4a08",
"assets/assets/avatar/avatar-3.jpg": "2b2235f5ed1f12106b55a5b3baf9ec72",
"assets/assets/avatar/avatar-4.jpg": "0a0cee92c368cb8cf7a01dd462b53da7",
"assets/assets/avatar/avatar-5.jpg": "8cd21f06efbe9fceb141d11d00c08c56",
"assets/assets/avatar/user.png": "f67bf956a7b8ce7297dcbf0bb4aaf9c8",
"assets/assets/control_img/curtain_1.svg": "f6a4417f782cec80d9f77c3d24177809",
"assets/assets/control_img/curtain_2.svg": "d3ca23196901a81e24506c73d5f14240",
"assets/assets/control_img/curtain_3.svg": "1206efb17bcb53ec0a851cb38c90a74f",
"assets/assets/control_img/curtain_4.svg": "38dea1ca09d53dbbbfb7a075a7381ba6",
"assets/assets/control_img/curtain_5.svg": "02925fa2feb2f3eba517d88d4c53c870",
"assets/assets/control_img/curtain_6.svg": "a43ef6c114f294cc933b3ef7a29e9f8a",
"assets/assets/font/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/font/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/font/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/font/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/icons/ac.svg": "2f70a95ff65d45fa0c41751fa0854321",
"assets/assets/icons/air-circle.svg": "70a23daeeb2bbfcb5f5fbe0484f72284",
"assets/assets/icons/air-con.svg": "d3ddb697e90e33765ece4b403b068f57",
"assets/assets/icons/blidns-down.svg": "3a9f0c59e2d15fac56910d407a516aca",
"assets/assets/icons/blidns-up.svg": "6b751c9434ae39a79daede36dff1082a",
"assets/assets/icons/Blight-ceiling-inactive.svg": "34d0fb3e3d6697f473165e5eca7805f9",
"assets/assets/icons/blind.svg": "32d04a6fbdff1b650547a696f5cda0af",
"assets/assets/icons/ceiling-light.svg": "175cf45813fb2963239feda73c9d9119",
"assets/assets/icons/curtain.svg": "b3e6e99ccc387b0192264110fb2e0804",
"assets/assets/icons/device.svg": "15e1ad978b09bacdd246cf663373d6d5",
"assets/assets/icons/down.svg": "0191880b01ac26097126106a6306a25f",
"assets/assets/icons/emoji.svg": "de73482de75474c4ea2a9bff627f0620",
"assets/assets/icons/expense-green.svg": "30a60acdd3dc1f7e748726dd870adf40",
"assets/assets/icons/expense-red.svg": "71d9c1e4829d741cb73dd2ff66863907",
"assets/assets/icons/fan.svg": "1f8e2f9f1c3d66c44d18e167f882f3e4",
"assets/assets/icons/flash-home.svg": "ae03bda7a1c7c24665ad7ce095615844",
"assets/assets/icons/flash.svg": "df3876ac97790a095b0c17ed63c0d27d",
"assets/assets/icons/home.svg": "bd6a2fe7ce21ba3cf2e15e412f49e256",
"assets/assets/icons/keyboard.svg": "58e0e053105f1a31d1e2207cb4deac41",
"assets/assets/icons/led.svg": "1b9eb50052c76229e0b56858a03e83a6",
"assets/assets/icons/light.svg": "b9e7ad22d321fbd7d1c692957263d81a",
"assets/assets/icons/Logo.svg": "9c9849eaf5dcba9e6ee04f7e7e395b6d",
"assets/assets/icons/notification-bing.svg": "a8fe8e5ae9cfb60221638d41f0908788",
"assets/assets/icons/plus.svg": "3cd612905ed7432637bf18667bd9e310",
"assets/assets/icons/record.svg": "94458d84e72fe5da8a7abcfe0f1ba0b1",
"assets/assets/icons/refrigerator.svg": "d5115106f2c33114c876ae57c72a5156",
"assets/assets/icons/rooms.svg": "799aa886e67f4fcdd03ec6283f2ec6bd",
"assets/assets/icons/setting.svg": "9c4584ea860099f2c56f1ea1b6295750",
"assets/assets/icons/statistic.svg": "9bb146d9e966a03371fa8d0e5f9b3107",
"assets/assets/icons/sun.svg": "e859c2d6e0d9dbd5ccbbdd6053c548db",
"assets/assets/icons/tv.svg": "9955250ae9804af4a92917cf4efb9cea",
"assets/assets/icons/up.svg": "71d9c1e4829d741cb73dd2ff66863907",
"assets/assets/icons/volume-slash.svg": "719c34acdd3fe5a9316f9366334810e7",
"assets/assets/icons/washer.svg": "e997885d7bd0b1a1c59e3352142957bd",
"assets/assets/icons/wind.svg": "1a811a113f15ba08228871424400ea64",
"assets/assets/images/bedroom.png": "f70bd31e40a4161597b4219424512037",
"assets/assets/images/bgpicture.png": "42d3126044dce27fb231a95e033b7de8",
"assets/assets/images/dinning.png": "694802d5ee491a8c1b50ccef97434e3a",
"assets/assets/images/dysonFan.png": "5a5f3a03fc1a0e93befd6c04394eae1d",
"assets/assets/images/emoji.png": "31bfac5697f39bb7f0207584a1e52ada",
"assets/assets/images/kitchen.png": "90b0334276276bd2c520a0dd12ad56d2",
"assets/assets/images/livingroom.png": "2453720076d3a6f7fbcb956611ccd616",
"assets/assets/images/logo.png": "9f93bd4844894abfa50a25f7d0964d4a",
"assets/assets/images/logo2x.png": "2604fbd17532b7f2c90e66dedd257703",
"assets/assets/images/outdoor.png": "d88b0eeaca2349ee07588fafbdd4d3d9",
"assets/assets/images/plug_icon.svg": "469d8822e18b25664b60265b466334a2",
"assets/assets/images/qrscan.svg": "2410aa3aa9cec2bfb3ab6ac063680f66",
"assets/assets/images/splash-connect.png": "f190de50c174400cf8ec1feda78582c9",
"assets/assets/images/splash-control.png": "c5d913e8815cf4cbb35db1f53ee5c4e5",
"assets/assets/images/splash-save.png": "90969c2407ac52809c2dfa1c900944a1",
"assets/assets/images/usb_c.svg": "6d27306236635343118b8b77b9e03a20",
"assets/assets/images/wifi.svg": "b3303d6814714c8f21099f70b8f1350b",
"assets/FontManifest.json": "4da229373dbb6982bbd79ac198e28581",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cc0b02c0a4f19aa3f3ee5caf35df9b7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7dfc69ef6ff215d7fb122d93c0f5f675",
"/": "7dfc69ef6ff215d7fb122d93c0f5f675",
"main.dart.js": "269f3bcd8a75d92942720ab3e26df586",
"manifest.json": "3480dbc95251405e11bbc47613727f0a",
"version.json": "80d4edf0e7603557948ab91f17e6f852"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
