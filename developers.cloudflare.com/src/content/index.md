---
title: Cloudflare Developers
type: developers-site
---

import { TwitterTimelineEmbed } from "react-twitter-embed"

import Themed from "../components/themed.js"
import Stripe from "../components/stripe.js"
import ProductGrid from "../components/product-grid.js"
import HeroBlockGrid from "../components/hero-block-grid.js"
import HeroBlock from "../components/hero-block.js"

<Stripe>

# あなたの創造， Cloudflare のインフラストラクチャ

100 か国以上のおよそ 200 都市にも及ぶ Cloudflare の API とエッジネットワークを利用して超高速で超堅牢なアプリケーションを構築しましょう．

</Stripe>

<ProductGrid/>

<br/>
<br/>

<HeroBlockGrid>
  <div>
    <HeroBlock>
      <h2>Serverlist ニュース</h2>
      <p>Serverlist は Cloudflare によるサーバレスについてのニュースレターです．サーバレスの世界の最新情報を手に入れ，新しい開発者向けチュートリアルで汗を流し，他のサーバレス開発者とつながり，出席できるミートアップやカンファレンスを探しましょう．</p>
      <p><a class="Button Button-is-docs-secondary" href="https://blog.cloudflare.com/serverlist/">購読する</a></p>
    </HeroBlock>
    <br/>
    <br/>
    <br/>
    <HeroBlock>
      <h2>コミュニティ</h2>
      <p>Cloudflare コミュニティは Cloudflare ユーザがアイデアを共有し，質問に答え，コードを書き，意見を交換するための場所です．</p>
      <ul>
        <li><p><a href="https://twitter.com/CloudflareDev" rel="noopener noreferrer" target="_blank">Twitter</a></p></li>
        <li><p><a href="https://blog.cloudflare.com/">ブログ</a></p></li>
        <li><p><a href="https://community.cloudflare.com/">コミュニティフォーラム</a></p></li>
        <li><p><a href="https://stackoverflow.com/questions/tagged/cloudflare?sort=votes&amp;pageSize=15/" rel="noopener noreferrer" target="_blank">Stack Overflow</a></p></li>
        <li><p><a href="https://cloudflare.github.io/" rel="noopener noreferrer" target="_blank">Cloudflare オープンソース</a></p></li>
      </ul>
    </HeroBlock>
    <br/>
    <br/>
    <br/>
    <HeroBlock>
      <h2>ミートアップグループ</h2>
      <p>世界中にあるサーバレスのミートアップグループに参加しましょう．</p>
      <ul>
        <li><a href="https://www.meetup.com/Real-World-Serverless-London/">ロンドン</a></li>
        <li><a href="https://developers.cloudflare.com/events/">過去のイベントを見る</a></li>
      </ul>
    </HeroBlock>
  </div>

  <div>
    <HeroBlock>
      {/* `key` set below fix re-render issue https://git.io/JkMlf */}
      <Themed>
        {(theme) => (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CloudflareDev"
            key={theme}
            theme={theme}
            options={{
              height: 1000
            }}
          />
        )}
      </Themed>
    </HeroBlock>
  </div>
</HeroBlockGrid>
