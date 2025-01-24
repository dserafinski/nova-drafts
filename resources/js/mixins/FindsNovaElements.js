export default {
  methods: {
    getDetailDeleteButton() {

      // console.log('Nova Draft Button Loaded: getDetailDeleteButton');
      // console.log(document.querySelector('.content').querySelector('[dusk=open-delete-modal-button]'));

      return document.querySelector('body').querySelector('[dusk=agreements-detail-component]');
    },

    getFormHeading() {

      console.log('Nova Draft Button Loaded: getFormHeading');
      console.log(document.querySelector('form > * > h1'));

      // return document.querySelector('form > * > h1');
      return document.querySelector('body').querySelector('[dusk=agreements-detail-component]');
    },
  },
};
