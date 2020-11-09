import React from 'react';
import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { heartSharp } from 'ionicons/icons';

import './RegistrationPage.scss';

interface RegistrationProps {
}

export class Registration extends React.Component<RegistrationProps> {
  render() {
    return (
      <IonPage>
        <IonContent>
          <div className="regist-page">
            <div className="regist-page__top">
              <label className="regist-page__top-date">2020/8/31</label>
              <IonIcon icon={ heartSharp } className="regist-page__fav-icon" color="primary" />
            </div>

            <img src="assets/icon/favicon.png" alt="" className="regist-page__img"/>

            <div className="regist-page__colors">
              <div className="regist-page__color">
                <p className="regist-page__color-label">#000000</p>
              </div>
              <div className="regist-page__color">
                <p className="regist-page__color-label">#99ff44</p>
              </div>
              <div className="regist-page__color">
                <p className="regist-page__color-label">#707070</p>
              </div>
            </div>

            <div>
              <label className="regist-page__pallet-label">パレット<small>最大3つまで選択可能</small></label>
              <div className="regist-page__pallets">
                <input type="checkbox" />
                <label className="regist-page__pallet">赤</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">黄</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">緑</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">青</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">茶</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">黒</label>
                <input type="checkbox" />
                <label className="regist-page__pallet">白</label>
              </div>
            </div>

            <div className="regist-page_memo">
              <label className="regist-page_memo-label">メモ</label>
              <input type="textarea"/>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  }
};

export default Registration;
