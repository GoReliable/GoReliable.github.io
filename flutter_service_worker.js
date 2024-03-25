'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9aae029ae41c97233b7044cd5ef0836",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/21/2dd8f26f3eaa46a8db886603e78fb7f2bb4f1d": "50183383e635a2b8b40c9c5d412b6f87",
".git/objects/22/6e6af136e0a1149d76c01e73d80a65f0f33715": "f0a016f43978ac0e5dfb35506c75bede",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/31/c05051868463ecdf0d4324abb1e48c6a38a5fa": "703089978784547ebd20ae5b3937dda2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/41/d36f14ab3f4ae0d3d6ebbbee93d5391b936bc5": "82e227bf6cc6f9cfdc80a2736468baea",
".git/objects/42/bb7f811e3fa83f3e87e1f0bfde1b5a0e52a4e7": "8f83381c325563ed6745888914434298",
".git/objects/44/ce46222b97f33d51e5d42b413fad378100ec61": "b17f93547b2b35b968ca3bb293eea818",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/431a2cce3333c69edb9360449b67f97c332381": "04a85fd740e81d9fcd8ff0b310ca0450",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/14f15486f3a95893452d4fbc5d2a7e73eb4333": "432e373060813a97fa562c918c0ea536",
".git/objects/66/c7d5fa5712833f7ef443d45a693163fcde7df4": "00e36fae3a536f91de50312cf8dee6d9",
".git/objects/69/f50886fa87ff7b590b7c3bc13eefe350a5518f": "346d96fa3816bd7a4507feb01ce2f605",
".git/objects/7a/413c7cc1eb2d0832120b913f2fb6032a72d55d": "00b88c3691b2fdf0e7e60c7414b219e8",
".git/objects/85/dfb935019cd7f8eccdcfdd9af10013b20fdb8f": "b9d783fde450fa7fbfbcbc65c29acc21",
".git/objects/87/17d12ad9ea225f6327adb780dfd6179dd5e18c": "adc4f8f5ceace64330e818d25af216f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/b9be6fc9468f9af13ff02f4117909a2369ad75": "b858279a0c95fa25378702757d32f78b",
".git/objects/9c/fe12ae65e18db887d780ced75fe4c0d5ada620": "4f07c78edccc9d4c687755c166d1af92",
".git/objects/9d/53b0624d24f117b02b2f3e0ccbd8fba17b7713": "c9d4c8b8ec88246001f523db7a6b4e7b",
".git/objects/a3/4f5dcf0842d470d0d9de0211c8800067859522": "f096ea144cf70e23b76279d7f9963956",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/27898403d750984f2f1bf87b148d2b3fc844f8": "58d49c89799e7743f1a25750dfe0e159",
".git/objects/c0/3b8c7b57cca1c8a3e40504b4588a2c77fdc2fa": "95b97bc66cd34e14fd1b21cfa023bcd8",
".git/objects/c0/61dfb7a7d40506e0f07e2f760d766e27f1ffb4": "0bf5e7b6527b99b07dd9f92da97a5e3f",
".git/objects/c8/266f1b5a9deeee4f9e1f941890aaacb9e4c318": "d8e22fbcfdbc418b46145fad737122c2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/1087d6c004b627be964f3719351dcbdf1dab89": "06663316e4aeedd65abeb2280de96218",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6c5885be1343f38d2ba73c236b67e80bb4c165": "ac6c6b20a73e92abb5d2e2c57e83f282",
".git/objects/f7/d420973918ddc088e6fd53ea472d9743330f08": "c94345965a5a0af3457f7f86a2b2290b",
"assets/AssetManifest.bin": "4bb302c4cd182aacd9cbe43491b0e505",
"assets/AssetManifest.json": "4927eb45985cd90f4033db4bb522cc77",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "ea0146f504d7f307e280628a7be1c4dd",
"assets/images/1.jpg": "298aca2ea37c4b69eba7a95c8e3d50f4",
"assets/images/2.jpg": "d70f99cf30782047445fd08c042cede8",
"assets/images/3.jpg": "406be27ab9d11d3786246533ba546db1",
"assets/images/4.jpg": "33a356f198c3322bcd51e7708732f131",
"assets/images/adminlogo.png": "7a9f0918aa9c3a72cafd316e52fb9ef6",
"assets/images/login_art.png": "f35216e6b11350039c3a5d09ad8a3456",
"assets/images/order.png": "d55784f3f689edba7c3fe74e77f13061",
"assets/images/Order_confirmed.png": "b241e9ff59531bbb8149657adc963e84",
"assets/images/Order_delivered.png": "b975ef833dc34cf0aefa967288fab91c",
"assets/images/reliable_icon.png": "f5618437f9f70ee99fd298117304abcd",
"assets/images/reliable_logo.png": "af3fd0094e07b4088323d54752d5fcbe",
"assets/images/undraw_access_account_re_8spm.svg": "be3fcd2737b422d41160f638e30c50b3",
"assets/images/undraw_logistics_x-4-dc.svg": "d86498d806ca144489e7026661024be1",
"assets/images/undraw_logistics_x4dc.png": "32477c03c378c496fd1dfc521860bb6b",
"assets/images/undraw_shopping_app_flsj.svg": "a4b309cf55fc70476c043f18d7486edc",
"assets/NOTICES": "be41d816d211ee18ec96989aeb2fa82c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "867e250ea61698852beaeeea03b15af2",
"/": "867e250ea61698852beaeeea03b15af2",
"main.dart.js": "52c14a5ce71a9879a6a72e9ab20a1e5b",
"manifest.json": "94de27bee237a7f0f89fc7b8aa647ef6",
"version.json": "4a6e0ea2f169580311caf78d58dbe450"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
