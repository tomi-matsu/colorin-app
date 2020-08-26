import React from 'react';
import { cfaSignOut } from 'capacitor-firebase-auth';
import { IonButton } from '@ionic/react';

import './AccountInner.scss';


interface AccountInnerProps {
}


export class AccountInner extends React.Component<AccountInnerProps> {
  signOut() {
    cfaSignOut().subscribe()
  }

  render(){
    return (
      <div className="account-container">

        <div className="account-container__account-image">
          <img src="assets/icon/favicon.png" alt="" className="account-container__account-image-pic"/>
        </div>
        <p className="account-container__account-name">松本　ひとみ</p>

        <div className="account-container__info">
          <p className="account-container__registration-num">登録数：288</p>
          <p className="account-container__favorite-num">お気に入り数：15</p>
        </div>

        <IonButton
          className="account-container__btn"
          expand="block"
          color="secondary"
          style={{ margin: 14}}
          onClick={e => {
            this.signOut()
          }}
        >
          ログアウト
        </IonButton>

      </div>
    );
  };
};

export default AccountInner;
