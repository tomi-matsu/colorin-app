import React from 'react';
import { cfaSignOut } from 'capacitor-firebase-auth';
import { IonButton } from '@ionic/react';

import './AccountInner.scss';


interface AccountInnerProps {
  googleUser: {
    displayName: string,
    email: string,
    photoURL: string,
    refreshToken: string,
    uid: string
  }
}


export class AccountInner extends React.Component<AccountInnerProps> {
  signOut() {
    cfaSignOut().subscribe()
  }

  public static defaultProps: AccountInnerProps = {
    googleUser: {
      displayName: "",
      email: "",
      photoURL: "",
      refreshToken: "",
      uid: ""
    }
  };

  render(){
    let img = this.props.googleUser.photoURL

    return (
      <div className="account-container">

        <div className="account-container__account-image">
          <img src={img} alt="" className="account-container__account-image-pic"/>
        </div>
        <p className="account-container__account-name">{this.props.googleUser.displayName}</p>

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
