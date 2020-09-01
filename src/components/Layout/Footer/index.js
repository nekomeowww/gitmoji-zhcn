// @flow
import React from 'react'
import Link from 'next/link'

import Icon from '../../Icon'

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="row middle-xs">
        <div className="col-sm-6 made-with-love">
          <h3>
            由<a href="https://carloscuesta.me"> Carlos Cuesta </a>制作 由
            <a href="https://github.com/nekomeowww"> Ayaka Neko </a>
            完成中文本地化
          </h3>
        </div>
        <div className="col-sm-6 footer-nav">
          <nav>
            <Link href="/about">
              <a>关于</a>
            </Link>
            <Link href="/contributors">
              <a>贡献者</a>
            </Link>
            <a href="https://github.com/nekomeowww/gitmoji-zhcn">GitHub</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
