import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import graphql from '../images/graphql.jpg'
import reactimg from '../images/reactimg.jpg'
import gats from '../images/gats.jpg'

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
          <span className="image main mini">
            <img src={gats} alt="" />
          </span>
          <p>で、す、が！<br />今回はそっちのgatsbyではなくGatsbyJSに関して述べていこうと思います！</p>
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
          <p>
            順に説明していきます。
          </p>

          <hr />
          <h2 className="sectionTitle">1. react製SPAなのでサイトが爆速であること<br /></h2>
          <span className="image main">
            <img src={reactimg} alt="" />
          </span>
          <p>
            Gatsbyはreact製SPA(single Page Applicaion)であるため、ページ遷移がとても速いです。実は皆さんが今見ているこのサイトはGatsbyで作られています。試しにいろいろページをいじってみてください。<br />めちゃめちゃ早いですよね。ページを遷移するときにURLも注目してみてください。URLが一切変化していない事がわかります。このようにSPAとは初期読み込みの際、複数のページをレンダリングすることによってユーザビリティの向上(UXの向上)をする事ができるというメリットがあります。もちろんその都度読み込みをさせることも可能です。VueJSでいうVue Routerみたいなもんですね。<br /><br />
            また、Gatsby側でコードの最適化も行ってくれるので、サイト自体の読み込みスピードも向上しています。<br />
          </p>

          <hr />
          <h2 className="sectionTitle">2. 最悪、reactの知識がそこまでなくても、ある程度は動かすことができること<br /></h2>
          <p>
            React VS Vue VS Angular議論を行っているサイトは星の数あります。もちろん開発規模だったりプラグインの有無だったりでそれぞれの得意不得意があったりします。Vueとreactを比較したとき、よく言われているのは、学習コストはVueが比較的少ないが、できることは狭まれてしまう。reactはその逆で学習コストはそこそこ高いものの、できる幅が広い。などなど....<br />reactの取っ掛かりをしてくれるのにもGatsbyが役立ちます。Gatsbyではjavascriptで書くこともできますし、reactのjsx記法もできます。
            CSSで書くこともできますし、SASS,SCSSも使えます。つまり、自分のレベルに合わせて記法を変更することが可能です。
          <br />なので「フロントはJQueryしかやったことない」みたいな方でも、reactを体系的に学ぶことができます。
          </p>
          <p>
            また、Gatsbyにはスターターテンプレートが豊富にあるので「Reactをとりあえず勉強したけど、create-react-appで１から作るのは.....」みたいな人でも、あっという間にSPAのページを立ち上げることができます。<a href="https://www.gatsbyjs.org/starters/?v=2" target="_blank">公式サイト</a>で見てみたいページをクリックして「Visit demo」からデモが見られます。面白いので是非いじってみてください!!
          </p>


          <hr />
          <h2 className="sectionTitle">3. GraphQLやWebpackなどの面倒な設定を自動で行ってくれること<br /></h2>
          <span className="image main sub">
            <img src={graphql} alt="" />
          </span>
          <p>
            アプリケーションはもちろん、Webサイトを開発するときAPIを使用したい場合、GraphQLをインポートして、いちいちスキーマを定義して、ターミナルでyarn(またはnpm)をたたいて.....みたいな処理を、gatsbyでは自動で行ってくれます。しかもGraphQLを視覚的に実行することができるGraphiQLを使うことができます。
          </p>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            上記のようにgatsbyを立ち上げた時、通常のlocalhostのURLとは別になにやらもう一つURLが発行されています。<br />
            アクセスしてみると....
          </p>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            いかにもAPIを叩けそうな画面が出てきます。これがGraphiQLです。もちろん叩けないはずがなく、しっかりjsonとして返ってきます。
          </p>

          <p>
            また、reactはwebpackやら、babelやら、ESlintやら、なかなか環境構築が面倒であり、初心者がつまずく原因にもなっています。(もちろんこれらは素晴らしいツールであり、disってはいないです。create-react-appによりそこら辺の必要なものを自動で取り入れてくれているので、だいぶ楽になりました)<br />gatsbyで環境構築する際、それら全部取り入れてくれます。素晴らしいですね。
          </p>

          <hr />
          <h2 className="sectionTitle">最後に<br /></h2>
          <p>
            gatsbyにはまだまだ語れることがたくさんあります。もちろんMVCモデルでいうViewの部分を任せることができますし、netlifyCMSなどを用いれば、ご自分のポートフォリオサイトを作ったり、ブログを作ったりもできます。netlifyCMSではデフォルトではadmin権限でmarkdown形式での記事の投稿も可能です。<br />私事ではありますが、アクシスに入る半年ぐらい前までwebデザイナーとして案件を受けてました。webデザイナーが案件を受けるためにはポートフォリオが必須であり、常に改良・更新をしていた記憶があります。作ったポートフォリオはもちろん就職活動でも活躍しました。ポートフォリオは「自分がどんな人間なのか」「どのぐらいの期間でにどれだけ成長したか」を確認できる貴重な資料だと私は思っています。私の大学時代はgatsbyに常にお世話になっていたので記事にしました。
            この記事を見て、gatsbyのことを少しでも知っていただけたらうれしいです。<br />(gatsbyの回し者ではありません笑)
          </p>
          <p>

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
          <h2 className="major">Vuetify</h2>
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
