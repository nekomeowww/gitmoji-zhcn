import React from 'react'
import Link from 'next/link'

import '../styles/style.scss'
import Layout from '../components/Layout'
import Button from '../components/Button'
import SEO from '../components/SEO'

const About = () => (
  <>
    <SEO pageTitle="About" pageUrl="/about" />
    <Layout headerWithSocialButtons>
      <section>
        <h1>About</h1>

        <p>
          <strong>Gitmoji 是一个提交信息的 Emoji 速查表指南</strong>. 旨在成为在
          GitHub 的提交消息上使用 <a href="https://emoji.muan.co">emojis</a>{' '}
          的标准化速查表{' '}
        </p>

        <p>
          在<strong>提交信息</strong>中<strong>使用 emojis</strong> 提供了一个
          <strong>十分简单</strong> 的方法来
          <strong>确定一个提交的目的和原意</strong>
          只要简单的查看 Emoji 的类型，就能快速知道意思。
          由于存在许多不同的表情符号，我发现有必要创建一个指南，以帮助更轻松地使用
          Emoji。
        </p>

        <p>
          这个项目是开源的，这意味着每个人都可以参与，建议，讨论和添加新的表情符号。你可以查阅{' '}
          <Link href="#contributing-gitmoji">
            <a>贡献者列表</a>
          </Link>{' '}
          以及{' '}
          <a href="https://github.com/nekomeowww/gitmoji-zhcn/blob/master/.github/CONTRIBUTING.md">
            贡献指南
          </a>
          .
        </p>

        <div>
          <Button
            icon="star"
            link="https://github.com/nekomeowww/gitmoji-zhcn"
            text="GitHub"
          />

          <Button
            icon="twitter"
            link={
              'https://twitter.com/intent/tweet?text=gitmoji' +
              '%20%E2%80%93%20一个提交%20commit%20信息的%20%23emoji%20指南' +
              '%20by%20%40crloscuesta%20中文本地化由%20@ayakaneko%20完成%20%F0%9F%98%8D%F0%9F%98%9C' +
              '&url=https://neko.ayaka.moe/gitmoji'
            }
            target="_blank"
            text="Tweet"
          />
        </div>
      </section>

      <section>
        <h1>
          在 npm 中使用 gitmoji{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
        </h1>

        <p>
          从命令行使用 gitmoji 的一个简单解决方案是安装{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>.
          gitmoji 交互式客户端，用于在提交消息上使用 Emoji。
        </p>

        <pre>
          <code>$ npm i -g gitmoji-cli</code>
        </pre>
      </section>

      <section>
        <h1 id="contributing-gitmoji">参与贡献 gitmoji</h1>

        <p>
          为 gitmoji 贡献一份 🍰！ 该项目是一个静态网站，使用 <i>Next.js</i>{' '}
          构建。 显示的所有 gitmojis 都是从 JSON 文件呈现的。
          在提交任何拉取请求之前，请遵循以下步骤:
        </p>

        <ol>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/issues/new">
              创建一个 Issue
            </a>{' '}
            填写我们提供的模版。
          </li>
          <li>
            讨论想法，功能或建议后，{' '}
            <a href="https://github.com/carloscuesta/gitmoji/fork">
              fork gitmoji
            </a>
          </li>
          <li>
            为你的新特性创建一个新的分支。 (比如: add-emoji-deploy,
            fix-website-header)
          </li>
          <li>
            把你的更改提交到{' '}
            <a href="https://help.github.com/articles/creating-a-pull-request/">
              来创建 Pull Request{' '}
            </a>
            。
          </li>
        </ol>
      </section>
    </Layout>
  </>
)

export default About
