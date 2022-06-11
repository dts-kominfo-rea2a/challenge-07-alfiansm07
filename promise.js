const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const arrIXX = await promiseTheaterIXX();
    const arrCGV = await promiseTheaterVGC();
    const arrConcat = arrIXX.concat(arrCGV);
    const dataHasil = arrConcat.filter((e) => e.hasil === emosi).length;
    return dataHasil;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
