import {Component} from 'simple-boot-front/decorators/Component';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import template from './quiz-detail.html';
import style from './quiz-detail.css';
import {OnInitRender} from 'dom-render/lifecycle/OnInitRender';
import {OnCreateRender} from 'dom-render/lifecycle/OnCreateRender';

@Sim
@Component({
    template,
    styles: [style]
})
export class QuizDetail implements OnInitRender, OnCreateRender {
    name = 'quiz-detail';
    toggle = true;
    questions: {
        description: string;
        idx: number;
        answers: string[];
        correct: number;
    }[] = [
        {idx: 1,description: '아프리카에서 암호화폐 붐의 원인은 무엇일까요?', answers: ['급격하게 악화되는 지역 물가에 대처', '암호화폐는 아프리카에서 쉽게 채굴됩니다.'], correct: 0},
        {idx: 2,description: '암호화폐 지갑에 대한 다음 설명 중 올바른 것은?', answers: ['지갑을 소유하는 것은 블록체인 프로젝트에서 돈을 버는 첫 단계입니다.', '지갑은 전혀 중요하지 않다.'], correct: 0},
        {idx: 3,description: '다음 글이 알맞은 글인가요? \'NFT는 공급망과 결합할 수도 있습니다. 예를 들어 이탈리아에서 생산된 신발의 경우 생산에서 나온 물류 데이터, 수령까지의 배송은 NFT의 형태로 블록체인에 기록될 수 있습니다. 신발이 구매자에게 배송되면, 구매자는 NFT를 스캔하여 신발 및 물류 세부 정보를 확인할 수 있습니다.', answers: ['정답', '틀림'], correct: 0},
        {idx: 4,description: '2021년 5월 크리스티 경매에서 미국 아티스트 Beeple의 가상 컬렉션(NFT)이 판매되었으며, 경매에서 세계에서 가장 비싼 세 작품 중 하나였습니다.이 작품의 가격은 얼마일까요?', answers: ['$70,000,000', '$70,000'], correct: 0},
        {idx: 5,description: '2021년 말까지 글로벌 암호화폐 전체 시가 총액은 얼마였습니까?', answers: ['1,580억$', '15억 8천만$'], correct: 0},
        {idx: 6,description: '"Smart Contract"이란 무엇입니까?', answers: ['미리 설정된 조건이 충족되면 실행할 수 있는 블록체인상의 프로그램', '이용자가 APP 이용을 위해 서명한 동의서'], correct: 0},
        {idx: 7,description: '다음 글이 알맞은 글인가요? \'프랑스는 암호화폐 규제의 세계적 리더입니다. 프랑스, 암호화폐 서비스를 제공하는 모든 회사는 AMF에 등록되어야 합니다.\'', answers: ['정답', '틀림'], correct: 0},
        {idx: 8,description: '인도네시아의 암호화폐 거래가 합법화된 최초의 시기는 언제였습니까?', answers: ['2018년 9월', '2008년 9월'], correct: 0},
        {idx: 9,description: '"다음 글이 알맞은 글인가요? \'메타버스에서는 모든 사람이 가상의 정체성을 갖고 가상 세계에서 생활하고 일할 수 있으며, 쇼핑, 여행, 친구와의 데이트, 동료와의 만남 등 현실 세계와 마찬가지로 메타버스는 디지털로 볼 수 있으며 가상화된 실제 세계입니다.\'"', answers: ['정답', '틀림'], correct: 0},
        {idx: 10,description: '다음 글이 알맞은 글인가요? \'암호화폐가 많은 주목을 받은 이유는 암호화폐가 새로운 신용 메커니즘을 제공하기 때문입니다. 과거에는 사람들이 은행과 같은 기관을 신뢰했습니다. 이제 사람들은 암호화폐에 대한 블록체인 기술을 신뢰합니다.\'', answers: ['정답', '틀림'], correct: 0},
        {idx: 11,description: 'Web3.0 세상에서 "GMI"라는 단어를 자주 볼 수 있습니다. 이 단어는 무엇을 의미합니까?', answers: ['Gonna Make It', '글로벌 음악 산업 (Global Music Industry)'], correct: 0},
        {idx: 12,description: '니모닉에 대한 설명으로 옳은 것은?', answers: ['니모닉은 본인만 이해할 수 있는 비밀번호 프롬프트와 유사합니다.', '니모닉은 공개 키로 은행 카드 번호와 유사합니다.'], correct: 0},
    ]
    private question?: { description: string; answers: string[]; correct: number };

    constructor() {
        console.log('quiz-detail constructor home')
    }

    onCreateRender(...param: any[]): void {
        this.question = this.randomQuestion();
    }

    onInitRender(...param: any[]): void {
        console.log('quiz-detail--------------')
    }

    randomQuestion() {
        return this.questions[Math.floor(Math.random() * this.questions.length)]
    }
}
