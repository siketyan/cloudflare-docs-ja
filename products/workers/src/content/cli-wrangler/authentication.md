---
order: 1
pcx-content-type: how-to
---

# 認証

## 背景

Cloudflare のシステムでは，ユーザは複数のアカウントとゾーンを持つことができます．
したがって，あなたのユーザは一つの Cloudflare トークンによってマシン上でグローバルに構成されます．
あなたのアカウントとゾーンはプロジェクトごとに設定されますが， API コールのための認証には Cloudflare トークンが使われます．
設定ファイルはコンピュータのホームディレクトリにある `.wrangler` ディレクトリに作成されます．

--------------------------------

### コマンドを使う

`wrangler` をあなたの Cloudflare ユーザで使うには，これらのコマンドを使います:

- `login`: ログインページを開いて Wrangler を認可するコマンド．
- `config`: `login` の代替としてあなたの `email` と `api` キーを入力するコマンド．
- `whoami`: 設定が正しくされているか確かめるコマンド．成功すると，プロジェクトの `wrangler.toml` ファイルに必要な，あなたのアカウントの E メールアドレスと `account_id` を出力します．

### 環境変数を使う

グローバルユーザを環境変数で設定することもできます．
Wrangler を CI (continuous integration) 環境で用いる場合に優先されるべき方法です．

Wrangler が利用する認証トークンを変更するために，何らかの `wrangler` コマンドを使うときに `CF_ACCOUNT_ID` および `CF_API_TOKEN` 環境変数を設定できます．
アカウント ID は Cloudflare ダッシュボードの **Overview** から得られるほか， [トークンを生成](#generate-tokens) することもできます．

```sh
$ CF_ACCOUNT_ID=accountID CF_API_TOKEN=veryLongAPIToken wrangler publish
```

代わりとして `CF_EMAIL` と `CF_API_KEY` 環境変数の組み合わせを使うこともできます:

```sh
$ CF_EMAIL=cloudflareEmail CF_API_KEY=veryLongAPI wrangler publish
```

ターゲットとなるゾーン ID を `CF_ZONE_ID` 環境変数で指定したり上書きしたりすることもできます．

環境変数をインラインで定義すると， `wrangler config` や `wrangler.toml` ファイルでの設定は上書きされます．

--------------------------------

## トークンの生成

### API トークン

1. **Overview** で [**Get your API token**](https://developers.cloudflare.com/api/tokens/create) を選択します．
2. **Profile** ページへ遷移後， **Create token** を選択します．
3. **API token templates** セクション下の **Edit Cloudflare Workers** テンプレートを探し **Use template** を選択します．
4. フィールドの残りを埋めて **Continue to summary**　を選択し， **Create Token** を選択して使用するトークンを取得します．

### グローバル API キー

1. **Overview** で **Get your API token** を選択します．
2. **Profile** ページへ遷移後， **API Keys** までスクロールします．
3. **View** を選択して **Global API Key** をコピーします．

<Aside type="warning" header="注意">

グローバル API キーはパスワードのように扱ってください．これはコードやバージョン管理システムに補完されるべきではありません．可能であれば環境変数を用いてください．

</Aside>

--------------------------------

## トークンを使う

トークンかキーを取得後，マシン上で既定の資格情報を `wrangler config` で設定できます:

```bash
$ wrangler config
Enter API token:
superlongapitoken
```

`--api-key` フラグを使用して， E メールアドレスおよびグローバル API キーの代わりに使用できます:

```bash
$ wrangler config --api-key
Enter email:
testuser@example.com
Enter global API key:
superlongapikey
```
