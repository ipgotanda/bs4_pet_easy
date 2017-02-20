// Scroll-spy
 $('body').scrollspy({
   target: '#nav-header', // スクロールスパイ対象ナビゲーション
   offset: 60 //切り替えポイントオフセット(ヘッダーの高さ)
 });

 // .active クラスの取得
 // スクロールが hero 領域の場合はヘッダーを初期化する
 var navToggler = function(){
   // リンクの href の値(ページ内リンクID)を取得
   var _hash = $('#nav-header a.active').attr('href');

   // class付け替え作業
   $('.site-header').toggleClass('is-scrolled', ( _hash != '#sect-hero'));
 };

 // 初期位置取得
 navToggler();

 // スクロールイベント
 // issue: 現状 window でスクロールスパイのイベントが発生する...
 // https://github.com/twbs/bootstrap/issues/20086
 $(window).on('activate.bs.scrollspy', function(){
   navToggler();
 });
