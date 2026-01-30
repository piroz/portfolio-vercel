# ポートフォリオサイト セットアップガイド

このガイドでは、ポートフォリオサイトのセットアップと設定方法を説明します。

## 必須: microCMSのセットアップ

このポートフォリオサイトはmicroCMSをブログのバックエンドとして使用しています。
以下の手順でmicroCMSを設定してください。

### 1. microCMSアカウントの作成

1. [microCMS](https://microcms.io/)にアクセス
2. 無料アカウントを作成
3. 新しいサービスを作成

### 2. ブログAPIの作成

1. 左サイドバーの「API」から「新規作成」をクリック
2. APIの設定:
   - **エンドポイント**: `blogs`
   - **APIの型**: リスト形式

3. 以下のフィールドを追加:

#### title（記事タイトル）
- **フィールドID**: `title`
- **表示名**: タイトル
- **種類**: テキストフィールド
- **必須**: はい

#### content（記事本文）
- **フィールドID**: `content`
- **表示名**: 本文
- **種類**: リッチエディタ
- **必須**: はい

#### description（概要）
- **フィールドID**: `description`
- **表示名**: 概要
- **種類**: テキストフィールド
- **必須**: いいえ
- **説明**: メタディスクリプションとして使用されます

#### thumbnail（サムネイル画像）
- **フィールドID**: `thumbnail`
- **表示名**: サムネイル
- **種類**: 画像
- **必須**: いいえ

#### category（カテゴリー）
- **フィールドID**: `category`
- **表示名**: カテゴリー
- **種類**: テキストフィールド
- **必須**: いいえ

#### publishedAt（公開日時）
- **フィールドID**: `publishedAt`
- **表示名**: 公開日時
- **種類**: 日時
- **必須**: はい

### 3. APIキーの取得

1. 左サイドバーの「APIキー」をクリック
2. 「新規発行」をクリック
3. 名前を入力（例: ポートフォリオサイト）
4. 権限を「GET」のみに設定（セキュリティのため）
5. 発行されたAPIキーをコピー

### 4. サービスドメインの確認

microCMSのダッシュボード上部のURLから、サービスドメインを確認します。
例: `https://your-service.microcms.io/` の場合、`your-service`がサービスドメインです。

### 5. 環境変数の設定

プロジェクトルートの `.env.local` ファイルを編集:

```env
MICROCMS_SERVICE_DOMAIN=your-service
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 6. テスト記事の作成

1. microCMSの管理画面で「blogs」APIを選択
2. 「追加」をクリック
3. 記事を作成:
   - タイトル: テスト記事
   - 本文: 記事の内容
   - 概要: 記事の概要
   - サムネイル: 任意の画像
   - カテゴリー: Technology
   - 公開日時: 現在の日時
4. 「公開」をクリック

## プロフィール画像とプロジェクト画像の設定

### 必要な画像

`public/images/` ディレクトリに以下の画像を配置してください:

1. **profile.jpg** - プロフィール画像
   - 推奨サイズ: 500x500px（正方形）
   - 形式: JPG, PNG, WebP

2. **project1.jpg ~ project6.jpg** - プロジェクト画像
   - 推奨サイズ: 1200x630px（16:9のアスペクト比）
   - 形式: JPG, PNG, WebP

### 画像の準備方法

画像がない場合は、以下のサービスでプレースホルダー画像を生成できます:

- [Unsplash](https://unsplash.com/) - フリー画像
- [Pexels](https://www.pexels.com/) - フリー画像
- [Placeholder.com](https://placeholder.com/) - プレースホルダー画像生成

## カスタマイズ

### 個人情報の変更

以下のファイルを編集して、個人情報を更新してください:

#### 1. `src/components/Hero.tsx`
- ヒーローセクションのテキスト
- 名前とキャッチコピー

#### 2. `src/components/Footer.tsx`
- SNSリンク（GitHub, Twitter, LinkedIn）
- 実際のURLに変更してください

#### 3. `src/app/about/page.tsx`
- 自己紹介文
- スキル情報
- 使用技術
- 経歴情報

#### 4. `src/app/page.tsx`
- ホームページの注目プロジェクト情報
- プロジェクト名、説明、技術スタック、リンク

#### 5. `src/app/projects/page.tsx`
- プロジェクト一覧の詳細情報

#### 6. `src/app/contact/page.tsx`
- 連絡先情報（メール、GitHub、Twitter）

### カラーテーマの変更

`src/app/globals.css` でカラーテーマをカスタマイズできます。

### Tailwind CSSの設定

`tailwind.config.ts` でTailwindのカスタマイズが可能です。

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## ビルドとデプロイ

### 本番ビルドのテスト

```bash
npm run build
npm start
```

### Vercelへのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com/)でアカウント作成
3. 「New Project」をクリック
4. GitHubリポジトリをインポート
5. 環境変数を設定:
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (本番URL)
6. 「Deploy」をクリック

## トラブルシューティング

### ブログ記事が表示されない

1. `.env.local` のAPIキーが正しいか確認
2. microCMSで記事が「公開」状態になっているか確認
3. ブラウザのコンソールでエラーメッセージを確認

### 画像が表示されない

1. `public/images/` ディレクトリに画像ファイルがあるか確認
2. ファイル名が正しいか確認（大文字小文字も区別されます）
3. 画像形式がサポートされているか確認（JPG, PNG, WebP）

### ビルドエラー

```bash
# node_modulesとキャッシュをクリア
rm -rf node_modules .next
npm install
npm run build
```

## サポート

問題が解決しない場合は、以下を確認してください:

- [Next.js ドキュメント](https://nextjs.org/docs)
- [microCMS ドキュメント](https://document.microcms.io/)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)

## 次のステップ

基本的なセットアップが完了したら、以下の機能を追加できます:

- お問い合わせフォームのメール送信機能（Resend, SendGrid等）
- Google Analytics統合
- ダークモード実装
- ブログのカテゴリーフィルタリング
- コメント機能（Giscus等）
- 検索機能
