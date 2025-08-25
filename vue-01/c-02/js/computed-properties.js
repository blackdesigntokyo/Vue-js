Vue.createApp({
  data: function() {
    return {
      email: 'MailAddress@example.com'
    }
  },
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
      //既存のデータ（this.email）に基づいて新しいデータを計算し、localEmailというプロパティとして利用できるようにする
      // this.email.split('@'): Vueインスタンスの data にある email プロパティの文字列を、@ の文字で分割。ユーザー名とドメイン名が格納された配列が返されます。
      // // [0]: 分割された配列の最初の要素（インデックス0）、ユーザー名部分を取得
      // // .toLowerCase(): 取得した文字列（ユーザー名）をすべて小文字に変換
    }
  }
}).mount('#app');