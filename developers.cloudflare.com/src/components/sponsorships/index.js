import React from "react"

import bootstrapIMG from "./logos/bootstrap.svg"
import cdnjsIMG from "./logos/cdnjs.svg"
import clickhouseIMG from "./logos/clickhouse.svg"
import d3IMG from "./logos/d3.svg"
import expressjsIMG from "./logos/expressjs.svg"
import freecodecampIMG from "./logos/freecodecamp.svg"
import gitIMG from "./logos/git.svg"
import gulpIMG from "./logos/gulp.svg"
import html5boilerplateIMG from "./logos/html5-boilerplate.svg"
import impressjsIMG from "./logos/impressjs.svg"
import jqueryIMG from "./logos/jquery.svg"
import jsdelivrIMG from "./logos/jsdelivr.svg"
import kaliIMG from "./logos/kali.svg"
import momentjsIMG from "./logos/momentjs.svg"
import nodejsIMG from "./logos/nodejs.svg"
import openaiIMG from "./logos/openai.svg"
import phalconIMG from "./logos/phalcon.svg"
import reactIMG from "./logos/react.svg"
import reduxIMG from "./logos/redux.svg"
import revealjsIMG from "./logos/revealjs.svg"
import select2IMG from "./logos/select2.svg"
import threejsIMG from "./logos/threejs.svg"
import unpkgIMG from "./logos/unpkg.svg"
import uppyIMG from "./logos/uppy.svg"
import webpackIMG from "./logos/webpack.svg"
import yarnIMG from "./logos/yarn.svg"

import "../../css/components/sponsorships.css"

const sponsorships = [{
    title:"Yarn",
    description:"ロックファイルを作成し将来のプロジェクトに向けてパッケージをキャッシュする Node のためのパッケージマネージャ．",
    logo: yarnIMG,
    siteURL:"https://yarnpkg.com/en/",
    sourceURL:"https://github.com/yarnpkg/yarn"
  },
  {
    title:"Moment.js",
    description:"JavaScript で日時をパース，検証，操作，表示するためのライブラリ．",
    logo: momentjsIMG,
    siteURL:"https://momentjs.com/",
    sourceURL:"https://github.com/moment/moment/"
  },
  {
    title:"D3",
    description:"DOM へデータをバインドし，ドキュメントをデータ駆動で変換する．",
    logo: d3IMG,
    siteURL:"https://d3js.org/",
    sourceURL:"https://github.com/d3/d3"
  },
  {
    title:"OpenAI",
    description:"安全な Artificial General Intelligence (AGI) をつくり， AGI の良さを広く平らに伝える非営利の研究組織．",
    logo: openaiIMG,
    siteURL:"https://openai.com/",
    sourceURL:"https://github.com/openai"
  },
  {
    title:"UNPKG",
    description:"NPM 上のすべてのための高速でグローバルなコンテンツデリバリーネットワーク．",
    logo: unpkgIMG,
    siteURL:"https://unpkg.com/",
    sourceURL:"https://github.com/unpkg/unpkg"
  },
  {
    title:"HTML5 Boilerplate",
    description:"Web アプリやサイトを作るための高速，堅牢で順応な方法．",
    logo: html5boilerplateIMG,
    siteURL:"https://html5boilerplate.com/",
    sourceURL:"https://github.com/h5bp/html5-boilerplate"
  },
  {
    title:"cdnjs",
    description:"人気ライブラリのための無料の共有コンテンツデリバリーネットワーク．",
    logo:cdnjsIMG,
    siteURL:"https://cdnjs.com/",
    sourceURL:"https://github.com/cdnjs/cdnjs"
  },
  {
    title:"Webpack",
    description:"JavaScript ファイルを結合するモジュールバンドラ．",
    logo:webpackIMG,
    siteURL:"https://webpack.js.org/",
    sourceURL:"https://github.com/webpack/webpack"
  },
  {
    title:"Node.js",
    description:"Chrome の V8 JavaScript エンジンで作られた JavaScript ランタイム．",
    logo:nodejsIMG,
    siteURL:"https://nodejs.org/",
    sourceURL:"https://github.com/nodejs/node"
  },
  {
    title:"React",
    description:"ユーザインターフェースを作るための Facebook 製 JavaScript ライブラリ．",
    logo:reactIMG,
    siteURL:"https://reactjs.org/",
    sourceURL:"https://github.com/facebook/react/"
  },
  {
    title:"git",
    description:"世界中の人々がプロジェクトのコーディングに携わることのできるバージョン管理システム．",
    logo:gitIMG,
    siteURL:"https://git-scm.com/",
    sourceURL:"https://github.com/git/git"
  },
  {
    title:"Kali Linux",
    description:"Kali Linux はペネトレーションテストのための高度な Linux ディストリビューションです．",
    logo:kaliIMG,
    siteURL:"https://www.kali.org/",
    sourceURL:"https://github.com/offensive-security"
  },
  {
    title:"ClickHouse",
    description:"ClickHouse はビッグデータのための無料アナリティクス DBMS です．",
    logo:clickhouseIMG,
    siteURL:"https://clickhouse.tech/",
    sourceURL:"https://github.com/ClickHouse/ClickHouse"
  },
  {
    title:"Phalcon",
    description:"Phalcon は C 拡張のフルスタック PHP フレームワークです．",
    logo:phalconIMG,
    siteURL:"https://phalcon.io/",
    sourceURL:"https://github.com/phalcon/cphalcon/"
  },
  {
    title:"JsDelivr",
    description:"JsDelivr は，パフォーマンス・信頼性・セキュリティを重視し ProspectOne によって開発された，無料の共有 CDN (コンテンツデリバリーネットワーク) です．",
    logo:jsdelivrIMG,
    siteURL:"https://www.jsdelivr.com/",
    sourceURL:"https://github.com/jsdelivr/jsdelivr"
  },
  {
    title:"freeCodeCamp",
    description:"無料でコーディングについて教えるオンラインのブートキャンプ．",
    logo:freecodecampIMG,
    siteURL:"https://freecodecamp.org/",
    sourceURL:"https://github.com/freeCodeCamp/freeCodeCamp"
  },
  {
    title:"Uppy",
    description:"様々なアプリケーションと連携する，柔軟でモジュラなファイルアップローダ．",
    logo:uppyIMG,
    siteURL:"https://uppy.io/",
    sourceURL:"https://github.com/transloadit/uppy"
  },
  {
    title:"Redux",
    description:"JavaScript アプリ用の状態コンテナ．ステート管理をシンプルにするために React とともに広く使用されています．",
    logo:reduxIMG,
    siteURL:"https://redux.js.org/",
    sourceURL:"https://github.com/reactjs/redux/"
  },
  {
    title:"jQuery",
    description:"少しのコードで，いろいろできる，JavaScript ライブラリ．",
    logo:jqueryIMG,
    siteURL:"https://jquery.com",
    sourceURL:"https://github.com/jquery/jquery"
  },
  {
    title:"Select2",
    description:"jQuery ベースの，セレクトボックスの代替．検索，リモートデータセット，無限スクロールをサポートします．",
    logo:select2IMG,
    siteURL:"https://select2.org/",
    sourceURL:"https://github.com/select2/select2"
  },
  {
    title:"Gulp",
    description:"開発ワークフロー上の苦痛・手間なタスクを自動化するツールキットで，周りを汚さずにビルドできます．",
    logo:gulpIMG,
    siteURL:"https://gulpjs.com/",
    sourceURL:"https://github.com/gulpjs/gulp"
  },
  {
    title:"impress.js",
    description:"CSS3 トランスフォームとトランジションの力を活かしたプレゼンテーションツール．",
    logo:impressjsIMG,
    siteURL:"https://impress.js.org/",
    sourceURL:"https://github.com/impress/impress.js"
  },
  {
    title:"Express",
    description:"高速で最小の Node.js 向け Web フレームワーク．",
    logo:expressjsIMG,
    siteURL:"https://expressjs.com/",
    sourceURL:"https://github.com/expressjs/express"
  },
  {
    title:"REVEAL.JS",
    description:"HTML, CSS と JS で PowerPoint ライクなプレゼンテーションを作成するフレームワーク．",
    logo:revealjsIMG,
    siteURL:"https://revealjs.com/#/",
    sourceURL:"https://github.com/hakimel/reveal.js"
  },
  {
    title:"three.js",
    description:"3D コンピュータグラフィックアニメーションを Web ブラウザで作成・表示する JavaScript ライブラリ．",
    logo:threejsIMG,
    siteURL:"https://threejs.org/",
    sourceURL:"https://github.com/mrdoob/three.js/"
  },
  {
    title: "Bootstrap",
    description: "レスポンシブでモバイルファーストな HTML, CSS と JS のスタイリングライブラリ．",
    logo: bootstrapIMG,
    siteURL: "https://getbootstrap.com/",
    sourceURL: "https://github.com/twbs/bootstrap"
  }
]

export default () => (
  <div className="sponsorship-grid">
    {sponsorships.map((item, i) => {
      return (<div key={i} className="sponsorship">
      <a className="sponsorship-icon" target="_blank" rel="noopener noreferrer" href={item.siteURL}>
        <img src={item.logo} alt={item.title} />
      </a>
      <a className="sponsorship-title" target="_blank" rel="noopener noreferrer" href={item.siteURL}>
        <h3>{item.title}</h3>
      </a>
      <div className="sponsorship-description">
        <p>{item.description}</p>
      </div>
      <div className="sponsorship-links">
        <a className="sponsorship-link-site more" target="_blank" rel="noopener noreferrer" href={item.siteURL}>サイトを訪問する</a>
        <a className="sponsorship-link-github more" target="_blank" rel="noopener noreferrer" href={item.sourceURL}>コードを GitHub で見る</a>
      </div>
    </div>)
    })}
  </div>
)
