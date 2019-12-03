import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">gatsby JS</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            「Gatsby」と聞くと、全身銀色のメイクを施した松田翔太の「ヘアジャム」「ヘアジャムじゃない」「ヘアジャム」....以下略<br />を思い出す方がほとんどなのではないかと思います 笑
          </p>
          <p>が、今回はそっちのgatsbyではなくGatsbyJSに関して述べていこうと思います！</p>
          <p>
            まずGatsbyJSとはreact製のSSG(Static Site Generator)であり、CMS(Contents Management System)の一種です。
            似たようなものに、テーマが豊富な「Hugo」や、rubyを用いた最近流行りの「jekyll」などがあります。
            あとは、なじみ深いものだと「WordPress」や「MovableType」なども挙げられます。<br />
          </p>
          <p> <a href="https://www.staticgen.com/">こちら</a>から人気のCMSが見られるのでぜひ見てみてください。</p>
          <p className="indent">
            GatsbyJSの最大の特徴は、<br />
            1. react製SPAなのでサイトが爆速であること<br />
            2. 最悪reactの知識がそこまでなくても、ある程度は動かすことができること<br />
            3. GraphQLやWebpackなどの面倒な設定を自動で行ってくれること<br />
          </p>



          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">フロントエンド2</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            本文
          </p>
          <p>
            本文
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">フロントエンド3</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            本文
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
