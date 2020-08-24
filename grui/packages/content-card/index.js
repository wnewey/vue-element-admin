import GrContentCard from './src/content-card.vue';

GrContentCard.install = function (Vue) {
  Vue.component(GrContentCard.name, GrContentCard);
};

export default GrContentCard;
