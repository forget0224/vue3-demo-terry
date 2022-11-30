/**
 * customize by https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 * @param { Promise } promise
 * @return { Promise }
 */

export default function to(promise) {
  return promise
    .then((data) => {
      return [null, data]
    })
    .catch((err) => {
      return [err, undefined]
    })
}
