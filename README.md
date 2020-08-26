ionic serve

or

ionic build
ionic capacitor add android
npx cap open android

<!-- 実機デバッグ -->
ionic capacitor run android -l --external

android prj を作り直した時は
・android/app に google-services.json を追加
・android/app/src/main/java/MainActivity.java に
```
　import com.baumblatt.capacitor.firebase.auth.CapacitorFirebaseAuth;
　add(CapacitorFirebaseAuth.class);
```
　を追加
