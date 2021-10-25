# small_mall
NodeJS기반으로 만드는 소형 개인 프로젝트 

JS와 nodeJS, Pug를 기반으로 만들 예정

구현 예정 기능
===============
- 로그인 (expreess session)
- 화면 fixed Button으로 채팅 시스템
- 채팅 → 화상으로 도움주는 시스템
- 결재 연계 하나 땡겨옵시다. (카카오페이는 작년에 했으니깐 네이버페이정도 ?)
- 휴대폰 인증 땡겨올수있으면 땡겨옵시다.

기술 스택
===============
- mongoDB
- nodeJS
- JS

scss(webpack)은 보류

페이지 구성
===============
- 메인 페이지 (main.pug)
- 상품 페이지 (한개) (items.pug)
- 상품 상세 페이지 (동일 패턴) (itemdetail.pug)
- 결제페이지 (payment.pug)
- 결제 성공, 실패 페이지 (success.pug, failed.pug)

REST API같은건 안쓸건데 연계쓸때 사용할 수 있음


URL
===============
- / → main.pug (메인화면)
- /items → items.pug (상품 보여주는 화면)
- /itemdetail/{id} → itemdetail.pug (items에서 상품 클릭하면 상세페이지 보여주는 화면)
- /payment → payment.pug (결제 화면)
- /success → success.pug (결제 성공화면)
- /failed → failed.pug (결제 실패화면)

제작기간 4주 (시작 10월 24일)



추가 고려해볼만한 기능
===============
- 장바구니 ?