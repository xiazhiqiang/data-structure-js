// @ts-nocheck
import * as Chain from "../../linkedList/taskChain";

let abc = {};
new Chain.TaskChain([
  function (chain, opts) {
    console.log("jinlaile1", opts);
    opts.a = 1;
    if (true) {
      chain.next(opts);
    }
  },
  async function (chain, opts) {
    console.log("jinlaile2");
    await new Promise((resolve) => {
      setTimeout(() => {
        opts.b = 2;
        resolve(opts);
      }, 2000);
    });
    chain.next(opts);
  },
  function (chain, opts) {
    console.log("jinlaile3");
    if (true) {
      opts.c = 3;
      chain.next(opts);
    }
  },
  function (chain, opts) {
    console.log("jinlaile4", opts);
    chain.next(opts);
  },
])
  .then((chain, opts) => {
    chain.next();
    console.log("end", opts);
  })
  .run(abc);
