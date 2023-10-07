require('dotenv').config(); //.envファイルを使えるようにする
const fetch = require('node-fetch'); //fetch を使えるようにする
const {token} = process.env; // DiscordのBotのトークンを .env ファイルから受け取る
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});

//起動確認用
client.once('ready', () => {
    console.log(`${client.user.tag} Ready`);
    client.user.setPresence({ activities: [{ name:'.help' }] }); // 「...をプレイ中」のステータスメッセージの表示
});

//応答

//コマンドに応答する処理はここにまとめる
const prefix = '.' //コマンドの頭文字に使う記号の宣言

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) {
        return;
    }

    if (message.author.bot) { //Botのメッセージには反応しないようにする
        return;
    }
   
    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)// .address コマンドが来た時の処理 
    if (command === 'address') {
        const [zip] = args;
        const url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="+zip;
        let address; // 住所を保存するための変数
        const response = await fetch(url); // URL から情報を受け取る
        const json = await response.json();

        console.log(json);
        
        //判定処理
        if (json.results == null) {
            address = "存在しない郵便番号です。"; // エラー用メッセージ
        }
        else {
            const result = json.results[0];
            address = result.address1 + result.address2 + result.address3; // 全ての情報を連結
        }

        //addressを表示するプログラム
        message.channel.send(address);
        console.log(address);
    }
    else if(command === 'help'){ // .help コマンドが来た時の処理
        message.channel.send({
            embeds: [{
                title: '⇩今このBotに実装されているコマンドはこちらです。⇩',
                fields: [{ name: '.help', value: 'コマンドの詳細について見ることができます。' },
                         { name: '.address <郵便番号> ', value: '指定された郵便番号に対して、県・市町村名を返します。' },
                         { name: 'hi', value: '「hi」と打つと、「hi!」とお返しします。' }],
                color: 0xffffff,
            }]
          })
    }
    else{ // 存在しないコマンドが入力された時の処理
        message.channel.send("そのようなコマンドはありません！`.help`コマンドでご確認ください！");
    }
});

//文章に応答する処理はこちらにまとめる
client.on('messageCreate', message => {  
    if (message.author.bot) { //Botのメッセージには反応しないようにする
        return;
    }

    if (message.content === 'hi') {
        message.reply('hi!'); //メンションをして返信する
    }
});

//Discordへの接続
client.login(token);