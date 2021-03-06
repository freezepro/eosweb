/*
  App configuration example created by eoswebnetbp1 (31.08.18)
*/
const path = require('path');
let config = {};

// production mod
config.PROD = false;

// mongo uri and options
config.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/EOSweb';
config.MONGO_OPTIONS = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};

// cron processes (aggregation of main stat - actions, transactions, accounts, analytics)
config.CRON = false;
config.CRON_API = 'http://bp.cryptolions.io';

config.TPS_ENABLE = true;
config.MAX_TPS_TIME_UPDATE = 5000;

config.eosInfoConfigs = {
      mainNet: {
        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        httpEndpoint: "http://bp.cryptolions.io",
        name: "Main Net",
        key: "mainNet"
      },
};

// telegram alert bot
config.telegram = {
  ON: false,
  TOKEN: '',
  TIME_UPDATE: 5000
};

// reserve nodes
config.endpoints = ['https://eos.greymass.com', 'http://bp.cryptolions.io', 'http://eosbp-0.atticlab.net'];

// eosjs
config.eosConfig = {
  chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca",
  keyProvider: "",
  httpEndpoint: config.endpoints[0],
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true,
  logger: {
    log: console.log,
    error: console.error
  }
};

// scatter wallet
config.walletAPI = {
        host: 'nodes.get-scatter.com',
        port: '',
        protocol: 'https'
};

// api url for producers list
config.customChain = 'https://nodes.get-scatter.com';

// api url for history
config.historyChain = 'https://eos.greymass.com';

// tokens api
config.tokensAPI = 'http://tokenapi.eoswatch.info/api/account/b1';

config.apiV = 'v1'; // api version
config.RAM_UPDATE = 5 * 60 * 1000; // time for ram update - /api/api.*.socket
config.HISTORY_UPDATE = 5 * 60 * 1000; // time for stats update - /api/api.*.socket 
config.MAX_BUFFER = 500000; // max buffer size for child processes (kb) - /crons
config.blockUpdateTime = 900; // mainpage upades frequency  - /api/api.*.socket in ml sec
config.offsetElementsOnMainpage = 10; // blocks on mainpage
config.limitAsync = 30; // max threads for async.js module  
config.updateTPS = 1000;

// log4js
config.logger = {
    appenders: {
      out:  {
            type: 'stdout'
      },
      server: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/server.log'),
      },
      socket_io: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/socket_io.log'),
      },      
      accounts_daemon: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/accounts_daemon.log'),
      },
      accounts_analytics: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/accounts_analytics.log'),
      },
      global_stat: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/global_stat.log'),
      },
      ram_bot: {
        type: 'file',
        filename: path.join(__dirname, './server/logs/ram_bot.log'),
      }
    },
    categories: {
        default:       {
          appenders: ['out'],
          level:     'trace'
        },
        server:  {
          appenders: ['out', 'server'],
          level:     'trace'
        },
        socket_io:  {
          appenders: ['out', 'socket_io'],
          level:     'trace'
        },
        accounts_daemon:  {
          appenders: ['out', 'accounts_daemon'],
          level:     'trace'
        },
        accounts_analytics:  {
          appenders: ['out', 'accounts_analytics'],
          level:     'trace'
        },
        global_stat:  {
          appenders: ['out', 'global_stat'],
          level:     'trace'
        },
        ram_bot:  {
          appenders: ['out', 'ram_bot'],
          level:     'trace'
        }
    }
};

// slack notifications
config.loggerSlack = {
      alerts: {
        type: '',
        token: '',
        channel_id: '',
        username: '',
      }
};

module.exports = config;

