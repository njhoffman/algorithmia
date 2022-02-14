## With flamebearer
https://betterprogramming.pub/create-a-flame-graph-for-your-node-app-profiling-nodejs-app-e0a91e5ed585

```bash
npm install -g flamebearer
node --prof app.js
node --perf-basic-prof-only-functions app.js
ab -c10 -t10 http://localhost:8080/
node --prof-process --preprocess -j isolate*.log | flamebearer
```

## With 0x
https://www.alxolr.com/articles/squeeze-node-js-performance-with-flame-graphs#flame-graphs

```bash
sudo apt install apache2-utils
npm install -g 0x

node load.js
# run concurrently
0x server.js
ab -c10 -t10 http://localhost:8080/carts/3
# Ctrl+C
```
```bash
# example run
# https://github.com/davidmarkclements/0x
# Clone this repo, run npm i -g and from the repo root run: 0x examples/rest-api
# In another tab run: npm run stress-rest-example
```
