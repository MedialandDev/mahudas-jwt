# @mahudas/jwt


## Dependencies
+ mahudas^0.0.9
+ jsonwebtoken^9.0.0


### As a plugin
如同一般的plugin，透過npm安裝之後，在Application的plugin.env.js裡設定啟用。

```console
npm i @mahudas/jwt -s
```
```js
// config/plugin.deafult.js
module.exports = {
  jwt: {
    enable: true,
    package: '@mahudas/jwt',
  },
}
```

## 設定
```js
// config/config.default.js
module.exports = {
  jwt: {
    sign: {}, 
    verify: {}, 
    decode: {},
  },
}
```
| 參數     | 說明                                                                                                                                    |
|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| sign   | 可直接參考 jsonwebtoken.sign 的 [Options](https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback) 參數 |
| verify | 直接參考 jsonwebtoken.verify 的 [Options](https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback) 參數 |
| decode | 直接參考 jsonwebtoken.decode 的 [Options](https://github.com/auth0/node-jsonwebtoken#jwtdecodetoken--options) 參數                           |

## Example
```js
// controller.js or service.js or middleware.js
const token = await ctx.jwt.sign({foo: 'bar'}, 'secret');
const verify = await ctx.jwt.verify(token, 'secret');
const decode = ctx.jwt.decode(token);
```
其他例子可以參考 https://github.com/auth0/node-jsonwebtoken
