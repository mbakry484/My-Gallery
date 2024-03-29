useEffect(() => {
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        imgAction('prev-img');
        break;
      case 'ArrowRight':
        imgAction('next-img');
        break;
      case 'Escape':
        imgAction('close');
        break;
      default:
        break;
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [data]);

const viewImage = (imgSrc, index) => {
  setData({ imgSrc, index });
};

const imgAction = (action) => {
  let currentIndex = data.index;

  if (action === 'next-img') {
    if (currentIndex < imagesArray.length - 1) {
      setData({ imgSrc: imagesArray[currentIndex + 1], index: currentIndex + 1 });
    } else {
      setData({ imgSrc: imagesArray[0], index: 0 });
    }
  } else if (action === 'prev-img') {
    if (currentIndex > 0) {
      setData({ imgSrc: imagesArray[currentIndex - 1], index: currentIndex - 1 });
    } else {
      setData({ imgSrc: imagesArray[imagesArray.length - 1], index: imagesArray.length });
    }
  } else if (action === 'close') {
    setData({ imgSrc: '', index: 0 });
  }
};

return (
  <>
    {data.imgSrc && (
      <div
        style={{
          width: '100vw',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 5, 0.8)',
          position: 'fixed',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
          zIndex: 9999,
        }}
      >
        <button style={{ position: 'absolute', top: '10px', right: '30px', backgroundColor: 'red' }} onClick={() => imgAction('close')}>
          X{' '}
        </button>

        <button style={{ position: 'absolute', top: '48%', left: '30px', backgroundColor: 'green' }} onClick={() => imgAction('prev-img')}>
          Prev{' '}
        </button>

        <img src={data.imgSrc} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5' }} />

        <button style={{ position: 'absolute', top: '48%', right: '30px', backgroundColor: 'green' }} onClick={() => imgAction('next-img')}>
          Next{' '}
        </button>
      </div>
    )}