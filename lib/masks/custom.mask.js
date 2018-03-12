import BaseMask from './_base.mask';

export default class CustomMask extends BaseMask {
    static getType() {
        return 'custom';
    }

    getKeyboardType() {
        return "default";
    }

    getValue(value, settings) {
        return this.getVMasker().toPattern(value, settings.mask);
    }

    getRawValue(maskedValue, settings) {
        if(!!settings && settings.getRawValue) {
            return settings.getRawValue(maskedValue, settings);
        }

        return maskedValue;
    }

    validate(value, settings) {
        if(!!settings && settings.validator) {
            return settings.validator(value, settings);
        }

        return true;
    }
}