import type { I18N } from './i18n';

export const JP: I18N = {
  biography: [
    { text: '慶應義塾大学 環境情報学部2年' },
    { text: '中村研究室 Arch研究グループ', url: 'https://arch.sfc.wide.ad.jp/' },
    { text: 'blog.kota-yata.com', url: 'https://blog.kota-yata.com' },
  ],
  qualifications: [
    { text: '基本情報技術者' },
    { text: 'EPSON HackTrek 2021 優勝', url: 'https://openinnovation.epson.com/topics/20210331_1/' },
    { text: 'EFC Award プロダクト開発部門 / GMOペパボ賞', url: 'https://efc.fukuoka.jp/edd2022/award' }
  ],
  communication: [
    { text: 'Email: kota@yatagai.com' },
    { text: '日本語、英語対応可' },
  ],
  interests: `
  主にP2P通信，ネットワークプロトコル，ライブストリーミングに興味を持ち，研究や趣味で開発を行っています．
  業務では新興メディアプロトコルMedia over QUIC Transport（MoQT）とWebRTCの性能評価や<a href="https://tech.plaid.co.jp/mongo-atlas-to-bigquery">データベースのリアルタイムマイグレーション</a>など，インフラからバックエンドまで幅広い領域に興味ベースで関わっています．
  個人開発ではMoQTのライブ配信デモやQUICでのP2P接続実装，WebRTCを用いたアプリ開発など，ネットワーク技術を利用した開発を多く行っています．現時点で個人開発はWebアプリが主ですが，最近はサーバーやプロトコルの実装に力を入れています．
  `,
  works: {
    featured: [
      { text: 'Media over QUIC Transportライブ配信デモ', url: 'https://github.com/kota-yata/media-over-quic-experiment' },
      { text: 'QUIC上でのP2P接続実装', url: 'https://github.com/kota-yata/2023f-wip' },
      { text: 'WebRTCを用いたファイル転送アプリ (Instant Drop)', url: 'https://github.com/kota-yata/instant-drop' },
      { text: 'TCP Simultaneous Open実装', url: 'https://github.com/kota-yata/tcp-simultaneous-open' },
      { text: 'STUNサーバーのフルスクラッチRust実装', url: 'https://github.com/kota-yata/organic-stun' },
    ],
    algorithmImplementations: [
      { text: 'SHA-256', url: 'https://github.com/kota-yata/organic-sha256' },
      { text: 'ハフマン符号', url: 'https://github.com/kota-yata/deno-huffman' },
      { text: 'Base64', url: 'https://github.com/kota-yata/ky_base64' },
      { text: 'RSA', url: 'https://github.com/kota-yata/rsa' },
    ],
    others: [
      { text: 'WebRTCシグナリングサーバー', url: 'https://github.com/kota-yata/instant-drop-server' },
      { text: 'Webページのmetaタグを取得するサーバー', url: 'https://github.com/kota-yata/meta-getter' },
      { text: '笑顔の点数をつけるアプリ', url: 'https://github.com/kota-yata/SmileScore' },
    ]
  },
  news: [
    {
      date: '2022/03/27',
      thumbnail: '/news/badgerbots.webp',
      url: 'https://www.code4japan.org/news/nhkhackathon2022',
      title: 'NHK防災ハッカソンに出場しました',
      text: '所属するロボットクラブTeam1306がFRC Wisconsin Regionalにて予選、Draft Pick、Quarter Finalsを通過して準決勝に進出しました。'
    },
    {
      date: '2022/03/27',
      thumbnail: '/news/badgerbots.webp',
      url: 'https://www.team1306.com/2022/03/27/wisconsin-regional-2/',
      title: 'FRC Wisconsin Regional準決勝進出',
      text: '所属するロボットクラブTeam1306がFRC Wisconsin Regionalにて予選、Draft Pick、Quarter Finalsを通過して準決勝に進出しました。'
    },
    {
      date: '2021/02/27',
      thumbnail: '/news/catenary.webp',
      url: 'https://openinnovation.epson.com/topics/20210826_2/',
      title: 'HackTrek 2021にて大賞を受賞',
      text: 'EPSONが主催するハッカソン「HackTrek 2021」にて、Canvas、WebRTC、CRDTを組み合わせたアプリケーション「Catenary」が大賞を受賞しました。'
    }
  ]
};
