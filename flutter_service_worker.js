'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "20f990719458d7c9f4d475cb7edc58d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e145e4d382c4b23b35254e3f36a279e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b551abcf6c11729e0593e78faf71b97",
".git/logs/refs/heads/main": "d85706b0003c743912e8dd0889f7394d",
".git/logs/refs/remotes/origin/main": "b6d7f38fe3dbddad15443585fb7cc4e3",
".git/objects/00/52b356c666ba738c6e5b8af0dd7bea4095793d": "cb567db492bea2a68d26aa3bbfafb1d1",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/19/cba5d33e7b7455f85a29b333914f45ddd641cf": "77271233ec5412874531bb9a20cc070b",
".git/objects/1b/e1bc1d3dd2d65a126ef55da2b815af632a6253": "46d247f35ec605f8fd0aaa3e86ab6566",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/6296f864c3a931f74f684a74252648b46a3e66": "35c27de9a2ad5e8dad6c186b14567979",
".git/objects/29/11ac4990bbda05daf4b3866af5aa78c0e59fe7": "97ad9fcce89500b200cc6d4b2df06ec6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/e3d933214550fae4aeb01c339c6e30b4f2df8d": "01a936ad3ac6b86178ca311517d14108",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/5c5bd62706a85342e5436a5dca5bab5410b171": "cb56a282325803c7678caece7136d329",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/63/77889ed61a022f1750340668e8938ee3f3e0b8": "28b715e9e44356dab9f29d8dd25a483e",
".git/objects/69/610656f50495848dcb2b913120bae3b5464e5c": "ee4813daf33898010db0ce3de8fd8aec",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/704d4b8207e03e306df47f7ffa9b09a0859292": "f67de4539a477be92d31021714b429a6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5236e88ffe2f3cf6a8f4b6fc50afd834ec958b": "0d696ada5fefaefa2e175af3b797dea6",
".git/objects/8a/26fd07397c6515e6fda11881551b548b47742f": "5e0e854b295473767c627c07969c41bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/98067172298d01f3b5d43cf13c5790fdaec2f2": "fe9f7444c04aab02921a8b4580b74378",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/e48924947b82c971236af5634548f35b263a31": "e8d9babc364f502a93fad09151897159",
".git/objects/93/8e78cdd89d83cd31750ee8bf21b5accf82bd93": "ab262f5489ffa5dae40d191b9f48d942",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/ac/5e934d43f2976302bcf90c043db63bba02ad9f": "3a849982d0d82116932fcc4fb410f978",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/c01220132ce3e16b46da7846bd146c63ec074b": "9a013360bfd57c910014f85b140bb9b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/c6695f3d2b9374f7ac1c73c79baf17656f9b9e": "b73e1c03d503dcb6abc0a8c6e33f94a5",
".git/objects/bf/6a6a8e9a7b57198e9a4c274689cf441e212adf": "c68d937975f28f70726513ec6ca1195d",
".git/objects/c3/f9be6b958428d5197586a02fb1f274f2c9fe53": "232327eb1653a0a4a0498adaeda15760",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/faf7d35882c3981f39cfdb7a41555f71eda842": "9bbc4716b89a2ad884bf719718860938",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e5/872b63b6f8c2fa595f3ad651c70c9459db1c39": "83765f36a7a91093a01a3f07c12b3acb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f8f174444736aa3b0a1292f97fa523640749c0": "6b366f3799bcaba7fee74034cad73503",
".git/objects/f0/9a021e11d0fa2e40473b1c2c2fb6b915940dc0": "d8b7049e6528145db3d5f5ae8400beb3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/63e41f09d863d027e614a8b197b5542692a5de": "92de0f62723e4a2ca9c5dafcd6c85777",
".git/objects/fd/f548ed5e7ed8107da5da84f8cc162f3c7ccc0c": "4c4368cde4a812cfe118d26d29427fef",
".git/refs/heads/main": "ced005629c234e5d7f3f683268c438b2",
".git/refs/remotes/origin/main": "ced005629c234e5d7f3f683268c438b2",
"assets/AssetManifest.bin": "036527f6337b3034e3240f8e61abad38",
"assets/AssetManifest.bin.json": "ac2c87746e897849eb45469be949643b",
"assets/AssetManifest.json": "63b1e530db1595d8839ff8c9129496c7",
"assets/assets/imagens_exemplos/apartamento_central.png": "7982088ab60935fd88bd340ae55833ce",
"assets/assets/imagens_exemplos/casa_campo.jpeg": "ce270acd805a96711dc135e71bafb114",
"assets/assets/imagens_exemplos/escritorio_comercial.jpg": "ca69854bbdb7333e1c627d6bd9a6a72e",
"assets/assets/imagens_exemplos/placeholder_imovel.png": "022341209215bf7dba9484f94eb44a67",
"assets/assets/imagens_exemplos/sitio_rural.png": "3e651cb122f72002a4414bef4b78bf55",
"assets/assets/imoveis.json": "7b796bf3678e1aaf94955500faa9ca64",
"assets/assets/LAUDO%2520DE%2520AVALIA%25C3%2587%25C3%2583O%2520SIMPLIFICADO.pdf": "c8480d5d1a09f1a2f32f6d1164407d11",
"assets/assets/logo.png": "5900fa2b2e81c8c17f160e3139dc2fd9",
"assets/assets/teste.pdf": "e02f76a68173cf18515ff01bd21f67fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7b2fae7c8dbd6c9bf3cd7b239e33461d",
"assets/NOTICES": "c25cb51ad14522994a0e46672f6db04d",
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
"flutter_bootstrap.js": "482665083fdc92ffe376d81f7306b4eb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd09ad8b9506a2f0cafd5d2cf70c255c",
"/": "fd09ad8b9506a2f0cafd5d2cf70c255c",
"main.dart.js": "9b19ca90c11228d8ce4323c8155c17c5",
"manifest.json": "8412625938eed9c2853e710329705be1",
"version.json": "3c6d3792495d49e19ae163bb10811ee7"};
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
