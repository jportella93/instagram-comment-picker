module.exports = async (ctx) => {
  // eslint-disable-next-line require-jsdoc
  function getComments() {
    return new Promise(async (resolve, reject) => {
      setTimeout(()=> {
        resolve('comments returned!');
      }, 1000);
    });
  }

  ctx.body = await getComments();
};
