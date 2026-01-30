# ポートフォリオサイト

Next.js + React + TypeScript + Tailwind CSS + microCMS を使用したモダンなポートフォリオサイトです。

## 特徴

- **Next.js 14 App Router** - 最新のNext.jsアーキテクチャを使用
- **TypeScript** - 型安全な開発環境
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **microCMS** - ヘッドレスCMSによるブログ機能
- **ISR（Incremental Static Regeneration）** - 高速なコンテンツ配信
- **SEO最適化** - メタタグ、サイトマップ、robots.txt対応
- **レスポンシブデザイン** - モバイル、タブレット、デスクトップ対応

## ページ構成

- **Home** - ヒーローセクション、注目のプロジェクト、最新のブログ記事
- **About** - プロフィール、スキル、使用技術、経歴
- **Projects** - プロジェクト一覧
- **Blog** - ブログ記事一覧、記事詳細ページ（microCMS連携）
- **Contact** - お問い合わせフォーム

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd portfolio
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、環境変数を設定します。

```bash
cp .env.example .env.local
```

`.env.local` を編集して、microCMSの設定を追加します:

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. microCMSの設定

1. [microCMS](https://microcms.io/)でアカウントを作成
2. 新しいサービスを作成
3. 「blogs」というAPIを作成し、以下のフィールドを設定:

   - **title**: テキスト（必須）
   - **content**: リッチエディタ（必須）
   - **description**: テキスト（任意）
   - **thumbnail**: 画像（任意）
   - **category**: テキスト（任意）
   - **publishedAt**: 日時（必須）

4. APIキーを取得し、`.env.local`に設定

### 5. 画像の配置

`public/images/` ディレクトリに以下の画像ファイルを配置してください:

- `profile.jpg` - プロフィール画像（500x500px推奨）
- `project1.jpg` - `project6.jpg` - プロジェクト画像（1200x630px推奨）

### 6. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## ビルドとデプロイ

### 本番ビルド

```bash
npm run build
npm start
```

### Vercelへのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com/)でプロジェクトをインポート
3. 環境変数を設定:
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. デプロイを実行

## カスタマイズ

### プロフィール情報の変更

- `src/app/about/page.tsx` - 自己紹介、スキル、経歴
- `src/components/Hero.tsx` - ヒーローセクションのテキスト
- `src/components/Footer.tsx` - SNSリンク

### プロジェクト情報の変更

- `src/app/page.tsx` - ホームページの注目プロジェクト
- `src/app/projects/page.tsx` - プロジェクト一覧

### スタイルの変更

- `src/app/globals.css` - グローバルスタイル
- `tailwind.config.ts` - Tailwind CSSの設定

## 技術スタック

- **フレームワーク**: [Next.js 14](https://nextjs.org/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [microCMS](https://microcms.io/)
- **デプロイ**: [Vercel](https://vercel.com/)

## ライセンス

MIT

## 作者

あなたの名前 - [@yourusername](https://twitter.com/yourusername)
