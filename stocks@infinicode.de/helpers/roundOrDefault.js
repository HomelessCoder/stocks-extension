const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { RoundSettings } = Me.imports.helpers.roundSettings;

var RoundOrDefaultClass = class RoundOrDefault {
  constructor() {
    this.roundSettings = new RoundSettings();
  }

  handle(value, defaultValue = '--') {
    const val = Number(value);

    if (isNaN(val) === true) {
      return defaultValue;
    }

    console.log('this.roundSettings.precisionthis.roundSettings.precisionthis.roundSettings.precision', this.roundSettings.precision);

    if (val > 0) {
      val.toFixed(this.roundSettings.precision);
    }

    return val.toPrecision(this.roundSettings.precision);
  }
}

var RoundOrDefault = new RoundOrDefaultClass();
