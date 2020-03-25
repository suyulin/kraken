describe('Box border', () => {
  it('should work with basic samples', async () => {
    const div = document.createElement('div');
    setStyle(div, {
      width: '100px',
      height: '100px',
      backgroundColor: '#666',
      border: '2px solid #f40',
    });

    document.body.appendChild(div);
    div.style.border = '4px solid blue';
    await matchScreenshot();
  });

  it('test pass if there is a hollow black square', async () => {
    let div = create('div', {
      width: '100px',
      height: '100px',
      border: '25px',
      borderStyle: 'solid',
      borderColor: 'black',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  xit('dashed border', async () => {
    const div = create('div', {
      width: '100px',
      height: '100px',
      border: '2px dashed red',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  xit('dashed with backgroundColor', async () => {
    const div = create('div', {
      width: '100px',
      height: '100px',
      border: '10px dashed red',
      backgroundColor: 'green',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  it('border-bottom-left-radius', async () => {
    let div = create('div', {
      width: '100px',
      height: '100px',
      'border-bottom-left-radius': '100px',
      backgroundColor: 'red',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  it('border-bottom-right-radius', async () => {
    let div = create('div', {
      width: '100px',
      height: '100px',
      'border-bottom-right-radius': '100px',
      backgroundColor: 'red',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  it('border-top-left-radius', async () => {
    let div = create('div', {
      width: '100px',
      height: '100px',
      'border-top-left-radius': '100px',
      backgroundColor: 'red',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  it('border-top-right-radius', async () => {
    let div = create('div', {
      width: '100px',
      height: '100px',
      'border-top-right-radius': '100px',
      backgroundColor: 'red',
    });
    append(BODY, div);
    await matchElementImageSnapshot(div);
  });

  it('border radius with absolute', async () => {
    let red = create('div', {
      position: 'absolute',
      width: '100px',
      height: '100px',
      top: '50px',
      left: '50px',
      backgroundColor: 'red',
    });
    let green = create('div', {
      position: 'absolute',
      top: '50px',
      left: '50px',
      width: '100px',
      height: '100px',
      borderRadius: '50px',
      backgroundColor: 'green',
    });
    let container = create('div', {
      width: '200px',
      height: '200px',
      position: 'absolute',
    });
    append(container, red);
    append(container, green);
    append(BODY, container);
    await matchElementImageSnapshot(container);
  });
});