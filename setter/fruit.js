import fetch from 'node-fetch';

const fruit = new Proxy({}, asyncHandler({
    async get (target, key, receiver) {
      return target[key];
    },
    async set (target, key, val, receiver) {
      target[key] = await new Promise((resolve, reject) => {
        fetch(val)
            .then(res => resolve(res.arrayBuffer()))
            .catch(err => reject(err));
      })
    }
}))
  
await fruit.avatar("https://picsum.photos/480")
console.log(await fruit.avatar)

function asyncHandler (h={}) {
    const getter = h.get;
    const setter = h.set;
    let handler = Object.assign({}, h);
    handler.set = () => false;
    handler.get = (...args) => {
        let promise
        return new Proxy(()=>{}, {
            apply: (target, self, argv) => {
                return setter(args[0], args[1], argv[0], args[2])
            },
            get: (target, key, receiver) => {
                if (key == 'then' || key == 'catch') {
                    return callback => {
                        if (!promise) promise = getter(...args)
                        return promise[key](callback)
                    }
                }
            }
        })
    }
    return handler
}