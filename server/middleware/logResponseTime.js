module.exports = async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} response to ${ctx.url} served in ${rt}`);
};
