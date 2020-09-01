// @flow
import React from 'react'
import Head from 'next/head'

type Props = { pageTitle?: string, pageUrl: string }

const SEO = (props: Props) => (
  <Head>
    <title>
      {`gitmoji ${
        props.pageTitle ? '| ' + props.pageTitle + ' |' : '|'
      } 提交 commit 信息的 Emoji 指南`}
    </title>
    <link
      rel="canonical"
      href={`https://neko.ayaka.moe/gitmoji/${props.pageUrl || ''}`}
    />
    <meta name="author" content="Ayaka Neko" />
    <meta
      name="description"
      content="提交 commit 信息的 Emoji 指南。旨在成为在 GitHub 的提交消息上使用 Emoji 的标准化速查表。"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="gitmoji" />
    <meta name="twitter:description" content="提交 commit 信息的 Emoji 指南" />
    <meta
      name="twitter:image"
      content="https://neko.ayaka.moe/gitmoji/static/gitmoji.gif"
    />
    <meta name="twitter:creator" content="@ayakaneko" />
    <meta name="twitter:url" content="https://neko.ayaka.moe/gitmoji" />
    <meta property="og:title" content="gitmoji" />
    <meta name="og:description" content="提交 commit 信息的 Emoji 指南" />
    <meta
      property="og:image"
      content="https://neko.ayaka.moe/gitmoji/static/gitmoji.gif"
    />
    <meta name="og:url" content="https://neko.ayaka.moe/gitmoji" />
    <meta name="robots" content="index, follow" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/static/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/static/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/static/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/static/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/static/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/static/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/static/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/static/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/static/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="msapplication-TileColor" content="#FFDD67" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#FFDD67" />
  </Head>
)

export default SEO
