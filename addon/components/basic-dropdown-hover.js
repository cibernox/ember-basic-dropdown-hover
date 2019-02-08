import Component from '@ember/component';
import { cancel, later } from '@ember/runloop';
import { oneWay } from '@ember/object/computed';
import layout from '../templates/components/basic-dropdown-hover';

export default Component.extend({
  layout,
  tagName: '',
  delay: 300,
  openDelay: oneWay('delay'),
  closeDelay: oneWay('delay'),

  actions: {
    open(dropdown) {
      if (this.closeTimer) {
        cancel(this.closeTimer);
        this.closeTimer = null;
      } else {
        let openFn = () => {
          this.openTimer = null;
          dropdown.actions.open();
        };
        let openDelay = this.get('openDelay');
        if (openDelay) {
          this.openTimer = later(openFn, openDelay);
        } else {
          openFn();
        }
      }
    },

    close(dropdown) {
      if (this.openTimer) {
        cancel(this.openTimer);
        this.openTimer = null;
      } else {
        let closeFn = () => {
          this.closeTimer = null;
          dropdown.actions.close();
        };
        let closeDelay = this.get('closeDelay');
        if (closeDelay) {
          this.closeTimer = later(closeFn, closeDelay);
        } else {
          closeFn();
        }
      }
    },

    prevent() {
      return false;
    }
  }
});
