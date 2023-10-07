# Discord_JP_Address-Search

### Discord_JP_Address-Search English Version! → [https://github.com/rainbow0210/Discord_JP_Address-Search-en](https://github.com/rainbow0210/Discord_JP_Address-Search-en)
<!--このプログラムは自分が所属している大学のプログラミングコンテストで作った作品です。!-->

## 使用言語
JavaScript

## 動作環境
npm

Node.js v16

discord.js

## 概要

Discord上で郵便番号を元にして県・市町村を調べてくれるプログラムです。特定の決まったコマンドを打つことで実行することができます。

## 動作方法
1. Discordのアカウントが必要なため、アカウントを作成してください。
また、Botを動かすのにトークン等が必要なため、下記URLを参照にBotの作成、取得をしてください。

* [https://dot-blog.jp/news/discord-bot-token/](https://dot-blog.jp/news/discord-bot-token/)

2. 展開されたZipファイルから出てくる「Discord_JP_Adress-Search-main」というファイルの中に「.env」というファイルがあるため、テキストエディタで開いて、「your_discord_bot_token」という部分を取得したBotのトークンを入れてください。

3. 動作させるのにNode.js v16が必要なため下記URLより「他のバージョン」という部分からv16をインストールします。

* [https://nodejs.org/ja/](https://nodejs.org/ja/)

4. 展開されたZipファイルの中の「Discord_JP_Adress-Search-main」にターミナル（Mac,Linux）やコマンドプロンプトで（Windows）移動し、「npm install」を打った後に、「Node src/index.js」と打つとプログラムが起動し、Discord上でBotが立ち上がります。

## コマンドリスト
以下のコマンドをDiscordのメッセージを入力する所で使用することで機能を使用することができます。

* .help　→　コマンドの詳細について見ることができます。

* .address <郵便番号>　→　指定された郵便番号に対して、県・市町村名を返します。

* hi　→　「hi」と打つと、「hi!」とお返しします。

## 利用したもの、参考にしたサイト

* Node.js：[https://nodejs.org/ja/](https://nodejs.org/ja/)

* discord.js：[https://discord.js.org/](https://discord.js.org/)

* node-fetch v2：[https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)

* Dotenv：[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

* 郵便データ配信サービス Zipcloud：[http://zipcloud.ibsnet.co.jp/doc/api](http://zipcloud.ibsnet.co.jp/doc/api)

* Discord.js Japan User Group：[https://scrapbox.io/discordjs-japan/](https://scrapbox.io/discordjs-japan/)
