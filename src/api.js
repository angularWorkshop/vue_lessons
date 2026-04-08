const resolvers = [];

export function createDeferredSearch(query) {
  let resolve;
  const promise = new Promise(done => {
    resolve = done;
  });
  resolvers.push({ query, resolve });
  return promise;
}

export function resolveSearch(query, items) {
  const target = resolvers.find(entry => entry.query === query);
  target?.resolve(items);
}
