const ExtensionUtils = imports.misc.extensionUtils
const Me = ExtensionUtils.getCurrentExtension()

var ROUND_SETTINGS_PRECISION = 'round-precision';

var RoundSettings = class RoundSettings {
  precisionCached = null;

  constructor() {
    this._settings = ExtensionUtils.getSettings();
  }

  get precision() {
    if (this.precisionCached === null) {
      this.precisionCached = this._settings.get_int(ROUND_SETTINGS_PRECISION);
    }

    return this.precisionCached;
  }

  set precision(value) {
    this.precisionCached = value;

    this._settings.set_int(ROUND_SETTINGS_PRECISION, value);
  }
}
