'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a92a1ae59b43bb011b5a84d3da348518",
"assets/AssetManifest.bin.json": "08ad187ffa6f92303ea55dd331afcc73",
"assets/AssetManifest.json": "546f4bfa0ee27f1cbf1c5810c01a3b35",
"assets/assets/android.png": "b0e36c3f8bb05f39073125774e1941ab",
"assets/assets/dart.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/flappy1.jpeg": "ec35aebfdec36eb4e4bdc3cd01b61693",
"assets/assets/flappy2.jpeg": "1917e75821fb5610a844940c6e168910",
"assets/assets/flappy3.jpeg": "df6a4fafa1fde2e93f094d61c5625b33",
"assets/assets/flappy4.jpeg": "44c988058a43fb408b2ecfc579e99d66",
"assets/assets/flappyvideo.mp4": "5e3485044d65639aa49f1d296fbdc779",
"assets/assets/flutterimg.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/github.png": "a17150d90465d2bb381781ab5baf0147",
"assets/assets/google-play.png": "fb3f50af5e98fa60446b185970137a12",
"assets/assets/guyworking.jpg": "742ea35ddb1e5e49605154e9ac773492",
"assets/assets/hacker.png": "dc1bcece73dedab8467fc1a6e272ec35",
"assets/assets/image.png": "9d37502b11ee71ee30057a553c7e6a4c",
"assets/assets/linkedin.png": "7fb99744eaccae943d5adf537b5b3a93",
"assets/assets/mail.png": "db3921367084308347fcbd09111c7ef3",
"assets/assets/mysql.png": "69db6e0d5319a0fb747ff959313794a3",
"assets/assets/netflix.mp4": "c03966844e87300e8652ce616965fe08",
"assets/assets/play.png": "fa8ca8718baab27bb28bb2ac334163d9",
"assets/assets/pokedex.mp4": "23924e9914e8eb6e90f1df7841fc4b9d",
"assets/assets/profileimage.png": "f549c8243131d2500ea699255510de1a",
"assets/assets/profileimg.jpg": "3faf910a9a570d554096ada1d81e88bb",
"assets/assets/profileimg.png": "ee7e9906db5a5e4b8e5567ba4cb01138",
"assets/assets/screenshots.jpeg": "1b4337b9172bcf170dfb7f12337bc6c5",
"assets/assets/shopping1.jpeg": "861483366be9026fb3bf5623e8f0e25e",
"assets/assets/shopping2.jpeg": "5f7c1dc6ef17626695326c25e2e97940",
"assets/assets/shopping3.jpeg": "c5a1b8fa2c043e48ad532b9ea6dcbf58",
"assets/assets/shopping4.jpeg": "518069723c55edc5c2e45b454fe1a322",
"assets/assets/shoppingvideo.mp4": "f583c974337303e1d47d0d3a83816b02",
"assets/assets/twitter.png": "b0e34da845c0b106a91a330c028538f2",
"assets/assets/weatherimg1.jpeg": "597fc68a43db212b98855cf9c32925b0",
"assets/assets/weatherimg2.jpeg": "7ce7d6749f1db1688035f3ca58e49044",
"assets/assets/weatherimg3.jpeg": "97d63f28dd8dd0f2e7870ef58ccd3f22",
"assets/assets/weathervideo.mp4": "841a52e9a1555039e1837a1e18bf915e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
"assets/NOTICES": "492a32babc82a9dc58ae7028d174d76f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "de483071ec25184f471e105ed71bbfcc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9601caa70078258af4e0d74c22bb87a3",
"/": "9601caa70078258af4e0d74c22bb87a3",
"main.dart.js": "28e9cd5901c96ccc8fc2a64e316254f2",
"manifest.json": "f1abded986531fc3cef908608d1699ed",
"version.json": "fb5b4dc834e34ded976e2030413e989f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
