# Gizlilik Politikası

Son güncelleme: 24 Ekim 2026

Bu politika, "Kim Bu Futbolcu?" mobil oyununun ("Oyun") hangi verileri işlediğini açıklar. Oyunun geliştiricisi Onur Ege Yakar ("biz") veri sorumlusudur. Sorularınız için: onurege2002@gmail.com

## Hangi verileri topluyoruz?

- **Hesap kimliği:** Oyuna ilk girişte, adınızı veya e-postanızı istemeden Firebase Authentication ile anonim bir kullanıcı kimliği (UID) oluşturulur.
- **Oyun profili:** Otomatik verilen kullanıcı adı, avatar, unvan, jeton, deneyim puanı, seviye, başarımlar, günlük görev ilerlemesi, oyun içi satın alınan öğeler, Premium durumu, günlük izlenen ödüllü reklam sayısı ve maç istatistikleri.
- **Uygulama içi satın almalar:** Jeton paketi veya Premium satın aldığınızda ödeme tamamen Apple (App Store) ya da Google (Google Play) tarafından işlenir; kart bilgilerinizi görmeyiz. Satın almayı doğrulamak için mağazanın verdiği satın alma belirtecini/işlem kimliğini sunucumuza (Firebase Cloud Functions) göndeririz ve hesabınızla birlikte yalnızca ürün kimliğini, satın alma/işlem kimliğini, platformu ve tarihi saklarız.
- **Reklam verileri:** İsteğe bağlı ödüllü reklamlar Google AdMob ile gösterilir. AdMob; reklam kimliği (Android Reklam Kimliği / iOS IDFA, izin verdiyseniz), IP adresi, cihaz ve uygulama bilgileri ile reklam etkileşimlerini işleyebilir.
- **Maç verileri:** Online maçlarda sorulan sorular, verilen cevaplar, seçilen gizli futbolcular ve maç sonucu.
- **Çökme raporları:** Uygulama çöktüğünde Firebase Crashlytics; cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve hata ayrıntılarını toplar. Bu raporlar adınızla ilişkilendirilmez.
- **Kullanım istatistikleri:** Firebase Analytics; oturum sayısı, açılan ekranlar, uygulama sürümü, cihaz türü ve yaklaşık ülke gibi anonim kullanım verilerini toplar. Bu veriler çökmeleri anlamak ve oyunu iyileştirmek için kullanılır, adınızla ilişkilendirilmez ve reklam için kullanılmaz.
- **Cihazdaki ayarlar:** Ses ve titreşim tercihleri yalnızca cihazınızda saklanır.

Konum, kişiler, fotoğraf, mikrofon gibi verilere erişmeyiz. Reklam kimliği yalnızca AdMob tarafından ve aşağıda açıklanan izinlerinize göre kullanılır.

## Reklamlar ve onay

- Reklamlar yalnızca siz "Reklam izle" düğmesine bastığınızda gösterilir (ödüllü reklam); oyunda zorunlu reklam yoktur. Premium sahipleri bu ödülleri reklam izlemeden alır.
- Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de Google'ın Kullanıcı Mesajlaşma Platformu (UMP) üzerinden onayınızı isteriz. Onay verirseniz **kişiselleştirilmiş** reklamlar, vermezseniz yalnızca o anki içeriğe dayalı **kişiselleştirilmemiş** reklamlar gösterilir (bunlar da sıklık sınırı, dolandırıcılık önleme ve ölçüm için sınırlı veri kullanır).
- iOS'ta reklam kimliğinize (IDFA) erişmeden önce Apple'ın Uygulama Takibi Şeffaflığı izni istenir; izin vermezseniz IDFA kullanılmaz.
- Seçiminizi cihaz ayarlarından (Android: Ayarlar → Gizlilik → Reklamlar; iOS: Ayarlar → Gizlilik ve Güvenlik → Takip) istediğiniz zaman değiştirebilirsiniz. Google'ın verileri nasıl kullandığı: https://policies.google.com/technologies/partner-sites

## Verileri neden kullanıyoruz?

- Oyunu çalıştırmak: profilinizi, ilerlemenizi ve ödüllerinizi saklamak.
- Online maçları yürütmek ve liderlik tablosunu göstermek (kullanıcı adınız, avatarınız, seviyeniz ve galibiyet sayınız diğer oyunculara görünür).
- Hataları bulup düzeltmek.
- Satın almaları doğrulamak, satın alınan jetonları/Premium'u hesabınıza eklemek ve aynı satın almanın iki kez sayılmasını önlemek.
- İsteğiniz üzerine ödüllü reklam göstermek ve günlük reklam ödülü sınırını uygulamak.

Hukuki dayanak: sözleşmenin ifası (oyunun ve satın aldıklarınızın sunulması), meşru menfaat (hata ayıklama, hile önleme) ve kişiselleştirilmiş reklamlar için açık rızanız.

## Verileri kimlerle paylaşıyoruz?

Verileriniz, hizmet sağlayıcımız Google LLC'nin Firebase (Authentication, Cloud Firestore, Cloud Functions, Crashlytics, Analytics) altyapısında saklanır ve Türkiye dışındaki sunucularda işlenebilir. Ödüllü reklamlar için Google AdMob, yukarıda açıklanan reklam verilerini kendi gizlilik politikasına göre işler. Ödemeler Apple ve Google tarafından kendi politikalarına göre işlenir. Verilerinizi satmayız.

## Ne kadar süre saklıyoruz?

Profil verileriniz hesabınızı silene kadar saklanır. Satın alma kayıtları (ürün ve işlem kimliği) mükerrer işlemi önlemek ve yasal yükümlülükler için hesabınız silinse de saklanabilir. Çökme raporları Firebase tarafından en fazla 90 gün tutulur.

## Haklarınız ve hesabın silinmesi

Oyunda **Ayarlar → Hesabımı Sil** ile hesabınızı ve profil verilerinizi istediğiniz an kalıcı olarak silebilirsiniz. Uygulamaya erişiminiz yoksa https://zeitgeist352.github.io/kimbufutbolcu/delete-account adresindeki adımları izleyebilir veya bize e-posta gönderebilirsiniz. KVKK ve GDPR kapsamında verilerinize erişme, düzeltme, silme ve itiraz haklarınız vardır.

Daha önce oynadığınız maçların kayıtlarında rakibinize ait bilgiler ve anonim kullanıcı kimliğiniz bir süre daha kalabilir; bu kayıtlar sizi doğrudan tanımlamaz.

## Çocuklar

Oyun 13 yaşından küçük çocuklara yönelik değildir ve bu yaştaki çocuklardan bilerek veri toplamayız.

## Değişiklikler

Bu politikayı güncellediğimizde yeni sürümü bu sayfada yayımlarız.

---

# Privacy Policy

Last updated: 24 October 2026

This policy explains what data the mobile game "Kim Bu Futbolcu?" (the "Game") processes. The developer, Onur Ege Yakar ("we"), is the data controller. Contact: onurege2002@gmail.com

## What we collect

- **Account ID:** On first launch an anonymous user ID (UID) is created with Firebase Authentication, without asking for your name or email.
- **Game profile:** auto-generated username, avatar, title, tokens, XP, level, achievements, daily quest progress, in-game items, Premium status, number of rewarded ads watched today and match statistics.
- **In-app purchases:** when you buy a token pack or Premium, payment is processed entirely by Apple (App Store) or Google (Google Play); we never see your card details. To verify the purchase we send the store's purchase token/transaction ID to our server (Firebase Cloud Functions) and store only the product ID, purchase/transaction ID, platform and date with your account.
- **Advertising data:** optional rewarded ads are served by Google AdMob, which may process your advertising ID (Android Advertising ID / iOS IDFA, if you allow it), IP address, device and app information and ad interactions.
- **Match data:** questions asked, answers, chosen secret footballers and match results in online matches.
- **Crash reports:** Firebase Crashlytics collects device model, OS version, app version and error details when the app crashes. These reports are not linked to your name.
- **Usage statistics:** Firebase Analytics collects anonymous usage data such as session counts, screens opened, app version, device type and approximate country. It is used to understand crashes and improve the game, is not linked to your name and is not used for advertising.
- **On-device settings:** sound and vibration preferences are stored only on your device.

We do not access location, contacts, photos or the microphone. Your advertising ID is used only by AdMob and only as described below.

## Ads and consent

- Ads are shown only when you tap "Watch an ad" (rewarded ads); there are no forced ads. Premium owners get these rewards without watching ads.
- In the European Economic Area, the UK and Switzerland we ask for your consent through Google's User Messaging Platform (UMP). If you consent you see **personalised** ads; otherwise only **non-personalised** ads based on the current context (these still use limited data for frequency capping, fraud prevention and measurement).
- On iOS, Apple's App Tracking Transparency permission is requested before your IDFA can be used; if you decline, the IDFA is not used.
- You can change your choice at any time in your device settings (Android: Settings → Privacy → Ads; iOS: Settings → Privacy & Security → Tracking). How Google uses data: https://policies.google.com/technologies/partner-sites

## Why we use it

To run the game (store your profile, progress and rewards), to run online matches and the leaderboard (your username, avatar, level and win count are visible to other players), to find and fix bugs, to verify purchases and credit the tokens/Premium you bought (and prevent the same purchase from counting twice), and to show rewarded ads when you ask for them and enforce the daily ad-reward limit.

Legal bases: performance of a contract (providing the game and what you bought), legitimate interest (debugging, cheat prevention) and your consent for personalised ads.

## Who we share it with

Data is stored on Google LLC's Firebase infrastructure (Authentication, Cloud Firestore, Cloud Functions, Crashlytics, Analytics) and may be processed outside your country. For rewarded ads, Google AdMob processes the advertising data described above under its own privacy policy. Payments are processed by Apple and Google under their own policies. We do not sell your data.

## Retention

Profile data is kept until you delete your account. Purchase records (product and transaction ID) may be kept after account deletion to prevent duplicate crediting and for legal obligations. Crash reports are retained by Firebase for up to 90 days.

## Your rights and account deletion

Use **Settings → Delete my account** in the game to permanently delete your account and profile data at any time. Without access to the app, follow https://zeitgeist352.github.io/kimbufutbolcu/delete-account or email us. You have the right to access, correct, delete and object to the processing of your data (KVKK / GDPR).

Records of past matches may keep your anonymous ID for a while; they do not directly identify you.

## Children

The Game is not directed to children under 13 and we do not knowingly collect their data.

## Changes

We will publish any updated version of this policy on this page.
