export default {
  methods: {
    getDetailDeleteButton() {

      console.log('Nova Draft Button Loaded: getDetailDeleteButton');
      // console.log(document.querySelector('.content').querySelector('[dusk=open-delete-modal-button]'));

      return document.querySelector('[dusk=content]').querySelector('[dusk=edit-resource-button]');
    },

    getFormHeading() {

      console.log('Nova Draft Button Loaded: getFormHeading');


      // return document.querySelector('form > * > h1');
      return document.querySelector('[dusk=content]').querySelector('* > h1');
    },
  },
};
