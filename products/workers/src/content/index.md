---
title: 概要
order: 0
type: overview
pcx-content-type: landing-page
---

<ContentColumn>

# Cloudflare Workers ドキュメント

Cloudflare Workers は，インフラストラクチャの構築や管理なしで，新しいアプリケーションを構築したり既存のアプリケーションを改善したりできる，
[サーバレス](https://www.cloudflare.com/learning/serverless/what-is-serverless/) 実行環境を提供します．

<ButtonGroup>
  <Button type="primary" href="/get-started/guide">開始する</Button>
  <Button type="secondary" href="/tutorials">チュートリアルを見る</Button>
</ButtonGroup>

--------------------------------

## Workers CLI のインストール

[`wrangler`](https://github.com/cloudflare/wrangler) をインストールするには，[`npm`](https://www.npmjs.com/get-npm) がインストールされている必要があります． 
[Volta](https://volta.sh/) や [nvm](https://github.com/nvm-sh/nvm) といった Node.js のバージョン管理ソフトウェアを利用して権限の問題を回避できます．
そして実行します:

```sh
$ npm install -g @cloudflare/wrangler
```
yarn を使ってインストールすることもできます:

```sh
$ yarn global add @cloudflare/wrangler
```

詳しくは [`wrangler` のインストール](/cli-wrangler/install-update) を参照してください．

--------------------------------

## プレイグラウンド

この Hello World の例を Workers プレイグラウンドでご覧ください:

```javascript
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("Hello world")
}
```

<ButtonGroup>
  <Button type="primary" href="https://cloudflareworkers.com/#36ebe026bf3510a2e5acace89c09829f:about:blank">プレイグラウンドを起動</Button>
  <Button type="secondary" href="/learning/playground">詳しく知る</Button>
</ButtonGroup>

--------------------------------

## 人気のページ

- [学ぶ: Workers の仕組み](/learning/how-workers-works) – Cloudflare のグローバルネットワークがどのように Workers を動かしているかを知る
- [料金](/platform/pricing) – 無料プランとバンドルされたプランについて知る
- [リファレンス: HTMLRewriter](/runtime-apis/html-rewriter) – Worker で HTML を読み書きする
- [制限](/platform/limits) – プランの制限について知る (例: フリープランでは 100,000 リクエスト/日)

--------------------------------

## コミュニティ
Cloudflare ユーザによって投稿された Workers で動作する [サードパーティのパッケージを探す](https://workers.cloudflare.com/works) ．

[Discord で Workers コミュニティへ参加](https://discord.gg/cloudflaredev) して他の開発者に質問したり，あなたの作品を披露したり，プラットフォームについて議論したりできます． 

[Twitter で @CloudflareDev をフォロー](https://twitter.com/cloudflaredev) して製品のお知らせや新しいチュートリアル， Cloudflare Workers の新機能を受け取ることができます．

--------------------------------

このドキュメントは [Cloudflare Docs Engine](https://developers.cloudflare.com/docs-engine/) を用いてビルドされました．

</ContentColumn>
