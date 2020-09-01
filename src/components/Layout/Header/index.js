// @flow
import React from 'react'

import Button from '../../Button'
import Logo from '../Logo'

type Props = { withHeadline: boolean, withSocialButtons: boolean }

const Header = (props: Props) => (
  <header className="header">
    <Logo />
    {props.withHeadline && <h2>提交 commit 信息的 Emoji 指南</h2>}
    {props.withSocialButtons && (
      <div className="header-buttons">
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
          text="发推 Tweet"
        />
      </div>
    )}
  </header>
)

export default Header
