import PropTypes from 'prop-types'
import React from 'react'
import gatsbyjs from '../images/gatsbyjs.jpg'
import design from '../images/design.jpg'
import performance from '../images/performance.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import graphql from '../images/graphql.jpg'
import reactimg from '../images/reactimg.jpg'
import gats from '../images/gats.jpg'
import vue from '../images/vue.jpg'
import vuetify from '../images/vuetify.jpg'
import vuescreen from '../images/vuescreen.png'
import vueTyper from '../images/vueTyper.jpg'
import userInyerface from '../images/userInyerface.jpg'


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
            <img src={gatsbyjs} alt="" />
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
          <p> <a href="https://www.staticgen.com/">こちら</a>から人気のSSGが見られるのでぜひ見てみてください。</p>
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
            Gatsbyはreact製SPA(single Page Applicaion)であるため、ページ遷移がとても速いです。実は皆さんが今見ているこのサイトはGatsbyで作られています。試しにいろいろページをいじってみてください。<br />ネイティブアプリのようにめちゃめちゃ早いですよね。例えば<a href="https://gatsby-starter-hero-blog.greglobinski.com/" target="_blank" rel="noreferrer noopener">このページ</a>でシングルページへ画面遷移するときにファビコン部分に注目してみてください。一切ロードしていないことがわかります。このようにSPAとは初期読み込みの際、複数のページをレンダリングすることによってユーザビリティの向上(UXの向上)をする事ができるというメリットがあります。もちろんその都度読み込みをさせることも可能です。<br /><br />
            また、Gatsby側でコードの最適化も行ってくれるので、サイト自体の読み込みスピードも向上しています。<br />
          </p>
          <span className="image main">
            <img src={performance} alt="" />
          </span>
          <p>
            このサイトも比較的パフォーマンスが良いことがわかります。SPAの欠点として、最初に複数のページをレンダリングするということでファーストビューが遅くなってしまうということです。そのため用途によって使い分ける必要が出てきます。
          </p>

          <hr />
          <h2 className="sectionTitle">2. 最悪、reactの知識がそこまでなくても、ある程度は動かすことができること<br /></h2>
          <p>
            React VS Vue VS Angular議論を行っているサイトは星の数あります。もちろん開発規模だったりプラグインの有無だったりでそれぞれの得意不得意があったりします。Vueとreactを比較したとき、よく言われているのは、Vueと比較したときにreactは自由度は増すものの、学習コストが若干高いことです。<br />reactの取っ掛かりをしてくれるのにもGatsbyが役立ちます。GatsbyではJavaScriptやTypeScriptで書くこともできますし、reactのjsx記法もできます。
            CSSで書くこともできますし、SASS,SCSSも使えます。CMSであるため、一般ユーザー向けにWordPressのようにMarkdownで書くこともできます。つまり、自分のレベルに合わせて記法を変更することが可能です。
          <br />なので「フロントはJQueryしかやったことない」みたいな方でも、reactを体系的に学ぶことができます。
          </p>
          <p>
            また、Gatsbyにはスターターテンプレートが豊富にあるので「Reactをとりあえず勉強したけど、create-react-appで１から作るのは.....」みたいな人でも、あっという間にSPAのページを立ち上げることができます。<a href="https://www.gatsbyjs.org/starters/?v=2" target="_blank" rel="noreferrer noopener">公式サイト</a>で見てみたいページをクリックして「Visit demo」からデモが見られます。面白いので是非いじってみてください!!
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
            また、reactはwebpackやら、babelやら、ESlintやら、なかなか環境構築が面倒であり初心者を詰ませる原因にもなっています。(もちろんこれらは素晴らしいツールであり、disってはいないです。create-react-appによりそこら辺の必要なものを自動で取り入れてくれているので、だいぶ楽になりました)<br />gatsbyで環境構築する際、それら全部取り入れてくれます。素晴らしいですね。
          </p>

          <hr />
          <h2 className="sectionTitle">最後に<br /></h2>
          <p>
            gatsbyにはまだまだ語れることがたくさんあります。もちろんLaravelなどを用いてアプリケーションとしての使用もできますし、netlifyCMSなどを用いれば、ご自分のポートフォリオサイトを作ったり、ブログを作ったりもできます。netlifyCMSではデフォルトでmarkdown形式での記事の投稿も可能です。<br /><br />私事ではありますが、アクシスに入る半年ぐらい前までwebデザイナーとして案件を受けてました。webデザイナーが案件を受けるためにはポートフォリオが必須であり、常に改良・更新をしていた記憶があります。作ったポートフォリオはもちろん就職活動でも大変活躍しました。ポートフォリオは「自分がどんな人間なのか」「どのぐらいの期間にどれだけ成長したか」を確認できる貴重な資料だと私は思っています。私の大学時代はgatsbyに常にお世話になっていたので記事にしました。
            この記事を見て、gatsbyのことを少しでも知っていただけたらうれしいです。<br />(※gatsbyの回し者ではありません笑)
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
          <h2 className="major">Vue.js</h2>
          <p>
            Vue.jsっていいですよね (*'ω'*)
          </p>
          <span className="image main">
            <img src={vue} alt="" />
          </span>
          <p>
            Vue.jsは「親しみやすい」「融通が効く」「高機能」が特徴のプログレッシブフレームワークです。(公式より)<br />
            vueはHTML,CSS,JavaScriptを勉強した上で、はじめてSPAを立ち上げたいって方にとてもおすすめです。<br />
            (※SPAに関してはGatsbyJSの項参照)
          </p>
          <p>
            Vueの特徴としては、「.vue」という独自の拡張子を用いて開発していくことができ、一番主流です。なんとこのvueファイルは、HTML,CSS,JavaScriptをまとめてコンポーネント単位で管理することができるんです!!!
              <br /><br />
            どういうことでしょうか....?<br />
            実際のファイルを見てみましょう～
          </p>
          <span className="image main">
            <img src={vuescreen} alt="" />
          </span>
          <p>
            この画像を見ていただくとある程度察しがつくと思います。vueファイルの中にHTML部,CSS部,JS部があり、これらまとめて1つのファイルになっているんです!!<br /><br />さらにこの最上位の「App.vue」ではJS部には「Welcome.vue」「Card.vue」「Contents.vue」「Copylight.vue」(拡張子省略)をインポートして、HTML部でタグとして呼び出しています。つまり、vueファイルにvueファイルが入れ子になっている状態です。<br />これによってファイル管理がとても楽になり、わざわざ共通CSSを後からcommonに外出しなどする必要もなくなり、外部のCSS,js専用のsrcフォルダなども不要になります。<br />また、UIのコンポーネント(部品・成分)単位で管理しているので、UI/UXデザイナーと開発者が異なる人物であっても視覚的に議論できますし、あとから誰でも触りやすいですよね。
          </p>
          <p>
            また、画像では空白になっていますが、JS部のdataのところから、子コンポーネントから親コンポーネントへ値を渡すことも可能ですし、子コンポーネントはpropsで親コンポーネントの値を受け取ることが可能です。
          </p>
          <p>
            以上がvueの大雑把な特徴です。vueにはv-bindやVueRouterなど便利な機能がたくさんあるので、気になった方は調べてみてください。これより下はvueの個人的におすすめのライブラリについて書いていきます。
          </p>
          <hr />
          <h2 className="sectionTitle">vuetify<br /></h2>
          <span className="image main">
            <img src={vuetify} alt="" />
          </span>
          <p>
            VuetifyとはVue.jsのライブラリの1つです。綺麗なマテリアルデザインが特徴なのですが、残念ながら天下のbootstrapのVue対応バージョンであるbootstrapVueよりは人気がないです。ただ個人的にはbootstrapVueより好きです。笑<br />
            使い方もとても簡単で、コンポーネントをサイトから持ってきて、インポートして、タグを追加するだけでDOMが出現します。bootstrapなどのライブラリと似ていますね。
            <a href="https://demos.creative-tim.com/vuetify-material-dashboard-pro/#/" target="_blank" rel="noreferrer noopener">公式デモサイト</a>でいろいろ遊んでみてください<br />
          </p>
          <hr />

          <h2 className="sectionTitle">vueTyper<br /></h2>
          <span className="image main">
            <img src={vueTyper} alt="" />
          </span>
          <p>
            タイピングしている風に表現できるvue.js専用のライブラリーです。業務ツールなどでは実用性はなさそうですが、デザイナーとしてはとても嬉しいライブラリーです。<br />
            <a href="https://cngu.github.io/vue-typer/" target="_blank" rel="noreferrer noopener">VueTyper</a>
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
          <h2 className="major">design/UI</h2>
          <span className="image main">
            <img src={design} alt="" />
          </span>
          <p>
            フロントエンドからは少しずれてしまうのですが、デザインやUIに関して述べていきたいと思います。
            突然ですが、みなさんの中でデザインやUIはどのぐらい重要だと考えていますか?<br />
            人によっては「デザインなんて適当でいい」「UI/UXなんて知らん」なんて考えている人もいると思います。
          </p>
          <p>
            ここで1つのサイトをご紹介します。5ページからなる簡単な入力フォームサイトですが、是非最後までやっていただきたいです。<br />(安全なサイトですのでご安心ください 笑)
          </p>
          <span className="inyerface">
            <a href="https://userinyerface.com/" target="_blank" rel="noreferrer noopener" >
              <span className="image main">
                <img src={userInyerface} alt="" />
                <p>UserInyerface</p>
              </span>
            </a>
          </span>

          <p>
            どうでしょう、そもそも入力フォームにすらたどりつけない方もいるのではないでしょうか。このUserInyerfaceは人間の慣習に逆うような作りになっており「最悪のUI体験」ができると話題になったものです。
            いかに人間が、色やアイコン、そして日々の慣習から「勝手にUIを補完」していることがわかります。例えば、今あなたが見ているこのページもTOPに戻りたい場合、右上に×ボタンがありますが、経験的にモーダルの外側を押すと戻りそうですよね。
            <br />何が言いたいのかといいますと、デザインやUIというものは人間の脳とインターネットをつなぐ重要な役割を持っているということです。

            <br /><br />(ちなみに最初の答えは、Please click HERE to GO to the next pageの「HERE」を押下するとフォームに飛ぶことができます。最後まで行くと踊ったおっさんが「YOU ARE AWESOME! A true interface legend.(最高です!あなたはインターフェイスレジェンドです!)と賞賛してくれます」)
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
