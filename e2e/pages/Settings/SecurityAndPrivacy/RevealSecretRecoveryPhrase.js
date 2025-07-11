import {
  RevealSeedViewSelectorsIDs,
  RevealSeedViewSelectorsText,
} from '../../../selectors/Settings/SecurityAndPrivacy/RevealSeedView.selectors';
import Matchers from '../../../utils/Matchers';
import Gestures from '../../../utils/Gestures';

class RevealSecretRecoveryPhrase {
  get container() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.REVEAL_CREDENTIAL_CONTAINER_ID,
    );
  }

  get passwordWarning() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.PASSWORD_WARNING_ID,
    );
  }

  get passwordInputToRevealCredential() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.PASSWORD_INPUT_BOX_ID,
    );
  }

  get scrollViewIdentifier() {
    return Matchers.getIdentifier(
      RevealSeedViewSelectorsIDs.REVEAL_CREDENTIAL_SCROLL_ID,
    );
  }

  get tabScrollViewIdentifier() {
    return Matchers.getIdentifier(RevealSeedViewSelectorsIDs.TAB_SCROLL_VIEW);
  }

  get revealSecretRecoveryPhraseButton() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.REVEAL_CREDENTIAL_BUTTON_ID,
    );
  }

  get revealCredentialCopyToClipboardButton() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.REVEAL_CREDENTIAL_COPY_TO_CLIPBOARD_BUTTON,
    );
  }

  get revealCredentialQRCodeTab() {
    return Matchers.getElementByText(
      RevealSeedViewSelectorsText.REVEAL_CREDENTIAL_QR_CODE_TAB_ID,
    );
  }

  get revealCredentialQRCodeImage() {
    return Matchers.getElementByID(
      RevealSeedViewSelectorsIDs.REVEAL_CREDENTIAL_QR_CODE_IMAGE_ID,
    );
  }

  get doneButton() {
    return Matchers.getElementByText(
      RevealSeedViewSelectorsText.REVEAL_CREDENTIAL_DONE,
    );
  }

  async enterPasswordToRevealSecretCredential(password) {
    await Gestures.typeTextAndHideKeyboard(
      this.passwordInputToRevealCredential,
      password,
    );
  }

  async tapToReveal() {
    await Gestures.waitAndTap(this.revealSecretRecoveryPhraseButton);
  }

  async tapToCopyCredentialToClipboard() {
    await Gestures.tap(this.revealCredentialCopyToClipboardButton);
  }

  async tapToRevealPrivateCredentialQRCode() {
    await Gestures.tap(this.revealCredentialQRCodeTab);
  }

  async scrollToDone() {
    await Gestures.scrollToElement(this.doneButton, this.scrollViewIdentifier);
  }

  async tapDoneButton() {
    return Gestures.waitAndTap(this.doneButton);
  }

  async scrollToCopyToClipboardButton() {
    await Gestures.scrollToElement(
      this.revealCredentialCopyToClipboardButton,
      this.tabScrollViewIdentifier,
    );
  }

  async scrollToQR() {
    await Gestures.scrollToElement(
      this.revealCredentialQRCodeImage,
      this.tabScrollViewIdentifier,
    );
  }
}

export default new RevealSecretRecoveryPhrase();
