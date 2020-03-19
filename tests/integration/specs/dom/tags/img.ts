describe('Tags img',  () => {
  it('basic', done => {
    const img = document.createElement('img');
    img.addEventListener('load', async () => {
      await matchScreenshot(img);
      done();
    });
    img.style.width = '60px';
    img.setAttribute('src', '//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png');

    document.body.appendChild(img);
  });
});
