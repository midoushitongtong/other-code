##### turtle build apk

- ```bash
  expo export --dev --public-url http://127.0.0.1:8000
  ```
- ```bash
  cd dist
  ```
- ```bash
  /usr/local/bin/python3 -m http.server 8000
  ```

- ```bash
  EXPO_ANDROID_KEYSTORE_PASSWORD="PUT_KEYSTORE_PASSWORD_HERE"\
  EXPO_ANDROID_KEY_PASSWORD="PUT_KEY_PASSWORD_HERE"\
  urtle build:android \
    --type apk \
    --keystore-path /path/to/your/keystore.jks \
    --keystore-alias PUT_KEYSTORE_ALIAS_HERE \
    --release-channel PUT_EXPO_OTA_RELEASE_CHANNEL_HERE \
    --allow-non-https-public-url \
    --public-url http://127.0.0.1:8000/android-index.json

  # example

  EXPO_ANDROID_KEYSTORE_PASSWORD="aaaaaaaaaa" \
  EXPO_ANDROID_KEY_PASSWORD="aaaaaaaaaa" \
    turtle build:android \
    --type apk \
    --keystore-path ./aaaaaaaaaa.jks\
    --keystore-alias "aaaaaaaaaa" \
    --release-channel aaaaaaaaaa \
    --allow-non-https-public-url \
    --public-url http://127.0.0.1:8000/android-index.json
  ```
