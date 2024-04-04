import Image from 'next/image';

export default function QR() {
  return (
    <div className='fixed z-50 hidden bottom-2 left-2 md:block shadow-outline shadow-2xl shadow-black'>
      <Image
        src='/images/qr.png'
        width='130'
        height='130'
        className='shadow-outline shadow-2xl border-8 border-white rounded shadow-black'
        alt='QRCode'
        title='QRCode'
        quality={30}
      />
    </div>
  );
}
