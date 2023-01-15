const { Adw, GObject, Gtk, Gdk } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { RoundSettings } = Me.imports.helpers.roundSettings;
const { Translations } = Me.imports.helpers.translations;

var RoundSettingsGroup = class RoundSettingsGroup extends Adw.PreferencesGroup {
  static {
    GObject.registerClass({ GTypeName: 'StockExtension-RoundSettingsGroup' }, this);
  }

  constructor() {
    super({
      title: Translations.SETTINGS.ROUND_SETTINGS.GROUP_TITLE
    });

    const roundSettings = new RoundSettings();

    const precisionSpinButton = new Gtk.SpinButton({
      adjustment: new Gtk.Adjustment({
        lower: 1, upper: 21, step_increment: 1, page_increment: 1, page_size: 0,
      }),
      climb_rate: 1,
      digits: 0,
      numeric: true,
      valign: Gtk.Align.CENTER,
    });

    precisionSpinButton.set_value(roundSettings.precision);

    precisionSpinButton.connect('value-changed', (widget) => {
      console.log('precisionSpinButton.connect(value-changed)precisionSpinButton.connect(value-changed)', widget.get_value());
      roundSettings.precision = widget.get_value();
    });

    const precisionRow = new Adw.ActionRow({
      title: Translations.SETTINGS.ROUND_SETTINGS.GROUP_TITLE,
      activatable_widget: precisionSpinButton
    });

    precisionRow.add_suffix(precisionSpinButton);
    this.add(precisionRow);
  }
}
