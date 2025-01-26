'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e3d5ef8b42bfe192645e3f63fd61a92",
".git/config": "8cd9d07e137a4ddd8cb7cc899bf0fad5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "b1217afe19abc61814f0877d94ae72d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a3877660fcd511ecdf37f39dfff2ad6",
".git/logs/refs/heads/master": "9a3877660fcd511ecdf37f39dfff2ad6",
".git/logs/refs/remotes/origin/master": "025c4a2b7084183dabed5b0f2734093f",
".git/objects/07/43987a4c48e4805ff4bf173b756eca3f11b047": "c2ee846591f93019cfbe352c6f5d1a52",
".git/objects/07/6693f1a33e0dd1508affb2edcbae397a10da1d": "eb7218002467181099d652acb34b72dc",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/118341ccd0738e5b017d48ad5f4c5989dd698d": "3ea9831254bbed45f549743d9e96f4bc",
".git/objects/0b/e81e8fb5840d43c73601a412ab7ac373bb02e2": "af8603cfb82fbecc422cbf01a5bd0c15",
".git/objects/0f/fe7d775594602c7755fba2ce1562975c8e6e7a": "141859c570de4b3c07ca23c921df5232",
".git/objects/10/4fe351a13e2b459a72683dad18c4cac896eae9": "ab030efd01f0eb5e9e8add889b798fae",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/1b/17e731856acf1213ea9e402d54cb7c4503d544": "8d9348e36e3b04d7af4e866dfd3d8534",
".git/objects/1c/2b1fe3087565bf0f0b44eaf0f924f83a10e2f4": "92cbb2628ad71cddce6127a1124f1a6d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/ddb8b17dc06a657fc1b75fad8da9c3876909a7": "777d22a19ff9edc4b733a96da7cb194b",
".git/objects/21/5042b74ee71faf7ba75239e9444a9ba26895cf": "efb6b9a40b8b64676908b969dd287a24",
".git/objects/21/963db643c1669f9e9c4e7a75d09910a0c05517": "6082dd985a2b17d8c4f760c090949fd2",
".git/objects/24/00f2e992b29c1693912e8f7051e16c070980c7": "32f1f8b4daed7ae5579a81e0d8b38348",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2b/3f6d63ed4dce365f00e16de1dd2f8954042f9e": "86c478951e3a91f4eba6ffdc6bd9bf52",
".git/objects/31/e1ebce6f2b58fc88c498dd5f8aeaeb3e69139c": "c349acc3136eda0b85f2e4b38ae97f85",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/e8a6a961a6fba4b50b7da5da42dda47e82111b": "ae73fd8331f44a3d12ecad4e7d04df88",
".git/objects/37/62dd4a920aef1f84c969b328134bbf89e0385d": "2682cd59f8de2932cd1c2d9b8c6aa8a4",
".git/objects/3a/3e8d4f1ef1f77db16e5114eef5ecfb39f4d25b": "b222ebb0c09409ca41e8965daee7224f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/3c4759be1e5561dfd4206fc040384fb9775ba1": "de765643add48e4e600b0d96ca48f499",
".git/objects/3f/ccbd167880492c91152541fc6891db097658e2": "0d65bc6bcc94c42c7fb8cb3533e47b2c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/43e5617dcb544cdc4ff9792fe5906e6ceea60d": "ccf0f54e25a6da0d5692f3f90adad980",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e9d6e92b7c1dd2e6789a5c990b5c4686789a87": "ca5eb63d231dd06891d5c1e4dc3fbc5b",
".git/objects/48/7294a5d59b60aaa06f67557af7f3d62f16b9e4": "440d9c800edf51dd6092cf76bdd8c1bb",
".git/objects/51/b62178313387c990c8eaae7be2db2c21baa3f7": "cbe0529407f6af623187f7e8878398d0",
".git/objects/57/295fb62466efea2ed1d54f82f1187d5754478f": "572d0b572e704d6ab6b408de0cc824e4",
".git/objects/57/8562e8d59861946403497053821019ae66856d": "f76c8aa42af27feecd12743dacb26566",
".git/objects/58/56856146c451f876f6f561fadc82bfc7567c15": "e264ad43fabd6c158af1f3bef2f25738",
".git/objects/59/ab1119f82cf2259c64700e3812b007fb0c53f7": "259a3e55c428488d0bfcfaca4bb1d5e8",
".git/objects/5a/34cd3641bc30c83e1c2cf4c266f879e7def1ed": "82e6adb3b4ba02c7d8564801e2d00f0e",
".git/objects/5c/9325b407bf27a7753d6b6048fefc0fbc0ff726": "e4dd16b32e31b8a049b870a34c39b601",
".git/objects/6b/d5cdadc8938fbd9e4b75b2e9d017d7c02ff43c": "f2e6d1117f4ed394040e0af440595755",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/65ed28c03c254e724f070f0aaa846a29474fcf": "28431283b41d49d0233fae0424f0fe3e",
".git/objects/6f/2f18f012d60f43c7c3e3eb982d3bc03070c930": "61a0bea3957fcc44832405182e887b4e",
".git/objects/6f/61ba31999b4bf58c57550eab10deff6b7bfd01": "66d6beb2a3c3ed6563c91e53829607d6",
".git/objects/6f/666015ed71a22b757d9442b6be84244f36db29": "969012fe5b69e021092efaf90d33c262",
".git/objects/73/94d38934489ae8b4860c5272f3b71555c2769a": "49dac7200f28539da88d67150c1cec7c",
".git/objects/73/a55b30a45c14ec65098be5c0569172b2486a35": "87ad07a7597d25e3916945d14df1045b",
".git/objects/82/6059a7b3e2cc7a5f910c10b5f695b648a25a07": "7f8f40597db680cb18c5814b716f3b1c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3de224c4f7089a0cb440eaec1fdab873cf4c13": "f082f652d057f76832344797f26eafef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1a779204e52a90656a3f49482bcb20b4909e42": "c295ffd059de6725efc2fd4904835efe",
".git/objects/8e/c42c4279e657deb2020d92e992323e0db1a21e": "ac00a7a1a640fa25d8228dca4b50449a",
".git/objects/8f/f0797c487abc58ed0037d96abad06556c2084d": "ab12e4b44d3802774d7fa606fbbb3d34",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/497d2b929bc3d86d261d9c548bb495f2901e77": "86782c9c9227adefe0dfd419765de098",
".git/objects/9b/ff56abe49288f9623da264c3e5e00bed657199": "02cbd96345bdc06b8b40239c2a039153",
".git/objects/a3/619c8744d1d797a281503acee9e81114a79fa5": "d7bf96e7a04f3eb1c4d6c4e0e7db60cf",
".git/objects/a3/b18cc21a6b98c0e5156b1b36a31c27ffda6b7f": "34c3bade0a4d4290632b40ec9ff1f574",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1700b50f5a0bb46fbccdd90dcde6960d7d46d6": "db735063ce89c877851f4ed1c6eb1a16",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c9abf6c35a2bb7aede7b79744fbb0faa1ffc84": "59d01eb49d86f6bb40fa743700c88fa7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/750a74392d88670ed0e8fceb72ef22d94155cc": "d4e73c921369fa0ebbab10225579fc70",
".git/objects/bd/60f122c5a7a77233e51fe7bdfabf3df8ecd0d4": "60e423d20e715edc8ab20b9ee6a4e3b0",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c2/72167d47cf32d1b646ab222be2af1b6e6a16dc": "104d64c8474b7997cee79c1dc972812f",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/c9/7dde020a3ee549d026d4ce6ee6b695d1845be3": "60f53bf7ad39bf17e533134b344511f3",
".git/objects/cd/f70afbf910257ab68d7168e7db6a03872a2cad": "11d0b73590a1018cc95daab446efaf52",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/c7947726e8e166e069a50de75c1dd8122f90a3": "439666f6c63722b5f891d08dbe99ceae",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/6ca795e346e6e56b562bfb7202f686f706242e": "ed3d6e90c556fac5f26d0e07fe2c14a4",
".git/objects/d7/97ba2c68bd723d36febcb914d5f1224834eb3a": "019dcafeff7ccd8b19c478d4d813e2b3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/6556cb8b9c72f1a9d7374241f92fe90663f90c": "851b8d59e3aa12ea7e5d9131aef43868",
".git/objects/df/fd7f905c674d40e01a2e35bedd7721bfb3eba2": "3e286db3bb264e02323e019b84883691",
".git/objects/e0/0cd738002cdc1ffee08cedf8ad520d68c1a4c4": "304ada64597a43ed2ba003eee1bdad42",
".git/objects/e3/b309dd9a32dfbb4f3b7ee814e4e07cc201d62f": "ae45bf98b5c6a6e3cb7b28b8743704e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c52b49670676bf575663a332c07b6c56e18f92": "f245dcc4edd68ad754bbcf4ac529619e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5354ef2e838903fb2b43eec7d06d7b91bfa3aa": "189d9caf619a4c3ed8f6e284d0d26d3b",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/f0c0ba683b0a0a0cfb273046dc1def5e716643": "cc67cfad3888cea5c352faee55164918",
".git/objects/fa/c8ff1911f0776a73e2afe621ccfe4c4ae14077": "a474dc93d9ead0c630d36162ef551408",
".git/objects/fd/d856c6ff20d3cdad64cc883c82f295898ea9e2": "ee69d04c016e6995f9bb9a952d96628f",
".git/refs/heads/master": "4182dee345887457bbbe620f6bf75201",
".git/refs/remotes/origin/master": "4182dee345887457bbbe620f6bf75201",
".idea/caches/deviceStreaming.xml": "b34e26be4aa3a7ae99b7f943fe60a0b0",
".idea/misc.xml": "f05f476c2d0ba7d4c6c07a23ea018e9f",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "32cf570fa0a764c0dfaca16b78b70007",
"assets/AssetManifest.bin": "11e72b43ed7556cff7c06882f53822aa",
"assets/AssetManifest.bin.json": "4d0670253249c4b8784871af95cc1307",
"assets/AssetManifest.json": "c3656504cd21e72167c398b0ade2e21f",
"assets/assets/android.png": "b0e36c3f8bb05f39073125774e1941ab",
"assets/assets/appsData/flappy1.jpeg": "ec35aebfdec36eb4e4bdc3cd01b61693",
"assets/assets/appsData/flappy2.jpeg": "1917e75821fb5610a844940c6e168910",
"assets/assets/appsData/flappy3.jpeg": "df6a4fafa1fde2e93f094d61c5625b33",
"assets/assets/appsData/flappy4.jpeg": "44c988058a43fb408b2ecfc579e99d66",
"assets/assets/appsData/flappybirdicon.png": "07c2f5aad079c1c2b1f20773e13163cd",
"assets/assets/appsData/flappyvideo.mp4": "5e3485044d65639aa49f1d296fbdc779",
"assets/assets/appsData/googlecloneicon.jpg": "75f65bda5a7b40c0702d1c17e4e573cd",
"assets/assets/appsData/jarvisappicon.jpg": "a6484ce94d368405af311914b7789be6",
"assets/assets/appsData/pokemon1.jpg": "4e4409bbdcc1a1601c968dd64c809be3",
"assets/assets/appsData/pokemon2.jpg": "58a1f584749a30a98cca3ee11c581009",
"assets/assets/appsData/pokemon3.jpg": "6874036b4d546ecfb12c875281405c54",
"assets/assets/appsData/pokemon4.jpg": "a808065ee7a8341c4268c2b80fda5baa",
"assets/assets/appsData/pokemon5.jpg": "dfb3061e2b65b740a3e6dc4033b4487f",
"assets/assets/appsData/pokemonicon.jpg": "4fac56089e98fbe9125cf309c8cb5cb1",
"assets/assets/appsData/shopping1.jpeg": "861483366be9026fb3bf5623e8f0e25e",
"assets/assets/appsData/shopping2.jpeg": "5f7c1dc6ef17626695326c25e2e97940",
"assets/assets/appsData/shopping3.jpeg": "c5a1b8fa2c043e48ad532b9ea6dcbf58",
"assets/assets/appsData/shopping4.jpeg": "518069723c55edc5c2e45b454fe1a322",
"assets/assets/appsData/shoppingicon.jpg": "3c9950622d774aa28bb789600501568c",
"assets/assets/appsData/shoppingvideo.mp4": "f583c974337303e1d47d0d3a83816b02",
"assets/assets/appsData/weatherappicon.jpg": "dcc1e7186317d4c6f85d7210955cfdfe",
"assets/assets/appsData/weatherimg1.jpeg": "597fc68a43db212b98855cf9c32925b0",
"assets/assets/appsData/weatherimg2.jpeg": "7ce7d6749f1db1688035f3ca58e49044",
"assets/assets/appsData/weatherimg3.jpeg": "97d63f28dd8dd0f2e7870ef58ccd3f22",
"assets/assets/appsData/weathervideo.mp4": "841a52e9a1555039e1837a1e18bf915e",
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
"assets/NOTICES": "cdabec3943491cbc2c9eb7d1c0f95a3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d20a5c33bc3f8d34569b1282b386fff3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c246f310c388e9e10c9c9c12531d2112",
"/": "c246f310c388e9e10c9c9c12531d2112",
"main.dart.js": "4e298523fc4e1f5e5f683a57333feb11",
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
