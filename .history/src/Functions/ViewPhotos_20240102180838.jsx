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