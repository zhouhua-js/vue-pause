import visibility from 'visibilityjs/lib/visibility.core';
import isFunction from 'lodash/isFunction';

export default {
    created() {
        const pauseFuntion = this.$options.pause;
        this.$$pauseActive = true;
        if (pauseFuntion && isFunction(pauseFuntion)) {
            this.$$pause = visibility.change(() => {
                if (visibility.hidden() && this.$$pauseActive) {
                    pauseFuntion.call(this);
                }
            });
        }
    },
    activated() {
        this.$$pauseActive = true;
    },
    deactivated() {
        this.$$pauseActive = false;
    },
    beforeDestroy() {
        this.$$pauseActive = false;
        if ('$$pause' in this) {
            visibility.unbind(this.$$pause);
        }
    }
};
