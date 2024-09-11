const Intro = () => {
  return (
    <div className="flex flex-col min-h-[100vh] justify-start items-center gap-3">
      <audio
        controls
        autoPlay={true}
        src="/storage/musics/kimi_ga_iru_kara.mp3"
      ></audio>
      <div className="bg-secondary rounded-md w-[300px] text-center text-white font-baloo p-2">
        From Me <a href="https://instagram.com/hallykoppter">(Kurnia Sandi)</a>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <img
          className="lg:w-[400px] w-[300px] hover:scale-110"
          src="/storage/images/1.jpg"
          alt="Gambar gagal dimuat"
        />
        <img
          className="lg:w-[400px] w-[300px] hover:scale-110"
          src="/storage/images/2.jpg"
          alt="Gambar gagal dimuat"
          width={300}
        />
        <img
          className="lg:w-[400px] w-[300px] hover:scale-110"
          src="/storage/images/3.jpg"
          alt="Gambar gagal dimuat"
          width={300}
        />
      </div>
      <div className="bg-primary rounded-md w-[300px] text-center text-white font-baloo p-2">
        To You <a href="https://instagram.com/dlsknaa">(Ina Kamelia Dewi)</a>
      </div>
    </div>
  )
}

export default Intro
