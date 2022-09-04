import './textbookPage.css';
import { TxtBkWord } from '../../shared/types';
import BaseComponent from '../baseComponent/baseComponent';
import Card from '../card/card';

// TODO: show 7th group for known user
class TextbookPage extends BaseComponent {
  inner = `
        <div class="container textbook">
        <a class="textbook__button button_level btn" href="/#/game/sprint/1/1">play sprint</a>
        <a class="textbook__button button_level btn" href="/#/game/audiocall/1/1">play audiocall</a>
        <div class="textbook__english-lvl">
            <h2>Уровень</h2>
            <a class="textbook__button button_level btn" href="/#/textbook/1">1</a>
            <a class="textbook__button button_level btn" href="/#/textbook/2">2</a>
            <a class="textbook__button button_level btn" href="/#/textbook/3">3</a>
            <a class="textbook__button button_level btn" href="/#/textbook/4">4</a>
            <a class="textbook__button button_level btn" href="/#/textbook/5">5</a>
            <a class="textbook__button button_level btn" href="/#/textbook/6">6</a>
            <a class="textbook__button button_level btn hide btn_seven" href="/#/textbook/7">7</a>
            </div>
          <div class="textbook__cards"></div>
          <div class="textbook__pagination-buttons">
            <a class="textbook__button button_transparent button_start" href="/#/textbook/1/1">&lt;&lt;</a>
            <a class="textbook__button button_transparent button_prev" href="/#/textbook/1/1">&lt;</a>
            <a class="textbook__button button_number" onclick="return false;">1</a>
            <a class="textbook__button button_transparent button_next" href="/#/textbook/1/2">&gt;</a>
            <a class="textbook__button button_transparent button_end" href="/#/textbook/1/30">&gt;&gt;</a>
          </div>
        </div>`;

  constructor() {
    super('main', ['main'], 'textbook');
  }

  drawCards(data: TxtBkWord[], userState: boolean): void {
    console.log(data);
    const cards: HTMLElement | null = document.querySelector('.textbook__cards');
    const btnSeven: HTMLElement | null = document.querySelector('.btn_seven');
    if (userState) {
      btnSeven?.classList.remove('hide');
    }
    if (cards) {
      const _ = data.map((item) => new Card(cards, item, userState));
    }
  }

  setPagination(grp: number, pg: number): void {
    // in DB group and page start from 0
    const group = grp + 1;
    const page = pg + 1;
    // for elements created from html template
    const btnStart = <HTMLLinkElement>document.querySelector('.button_start');
    const btnPrev = <HTMLLinkElement>document.querySelector('.button_prev');
    const btnPgNum = <HTMLLinkElement>document.querySelector('.button_number');
    const btnNext = <HTMLLinkElement>document.querySelector('.button_next');
    const btnEnd = <HTMLLinkElement>document.querySelector('.button_end');

    btnPgNum.textContent = `${page}`;
    if (page === 1) {
      btnStart.classList.add('btn_disabled');
      btnPrev.classList.add('btn_disabled');
    }
    if (page === 30) {
      btnNext.classList.add('btn_disabled');
      btnEnd.classList.add('btn_disabled');
    }
    btnStart.href = `/#/textbook/${group}/1`;
    btnPrev.href = `/#/textbook/${group}/${page - 1}`;
    btnNext.href = `/#/textbook/${group}/${page + 1}`;
    btnEnd.href = `/#/textbook/${group}/30`;
  }
}

export default TextbookPage;
