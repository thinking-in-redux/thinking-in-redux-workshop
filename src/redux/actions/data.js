export const DATA_NORMALIZED = 'DATA_NORMALIZED';

export const dataNormalized = (feature) => ({
  type: `${feature} ${DATA_NORMALIZED}`
});
