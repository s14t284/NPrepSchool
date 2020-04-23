# MEMO

## 3

- `node --prof **.js` でプロファイルを出力して，`node --prof-process isolate-***-v8.log`でプロファイルを読み取って，実行にかかった時間などを確認することができる

## 23

- postgresql の実行

```shellscript
docker-compose up -d
psql -U postgres -h localhost
(passwordはdocker-compose.ymlを参照)
```
