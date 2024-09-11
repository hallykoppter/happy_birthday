import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import "react-vertical-timeline-component"

const Timeline = () => {
  return (
    <>
      <div className="font-titan flex justify-center mb-5 text-2xl">
        Our Timeline
      </div>
      <div className="flex">
        <VerticalTimeline lineColor="#2196f3">
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Berawal dari 2019
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>
            <p className="text-white">
              Pertemuan kita berawal dari perlombaan, ngahahaha. Maaf waktu itu
              ulang tahunnya sudah terlewat. 😭😭
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo text-white"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Momen 2020
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>
            <p className="text-white">Foto kita begini banget yah, wkwkwkw</p>
            <img
              src="/storage/images/2020.jpg"
              alt="Gambar gagal dimuat"
              width={300}
            />
            <p className="text-white">
              Di tahun ini memang banyak momen, Sayang. Berawal dari ulang tahun
              aa dan hadiah spesial, dilanjut dengan perayaan ulang tahun
              perdana dede ketika bersama aa. First time kita ulang tahun
              bersama. Heheheh. momen menyenangkan itu masih terus akan aa
              ingat, semoga dede juga masih ingat. 😍😍😍😍😍😍
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Momen 2021
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>
            <p className="mb-1 text-white">Foto kita keren, Ayang. 😂</p>
            <img
              src="/storage/images/2021.jpg"
              alt="Gambar gagal dimuat"
              width={300}
            />
            <p className="text-white">
              Tahun 2021 kita juga banyaaaaakkk banget kenangannya. tapi memang
              di 2020 dan 2021 susah banget buat main berdua keluar rumah ya.
              Covid-19, Sayang. wkwkwk. tapi alhamdulillah, di momen ulang tahun
              waktu itu. kita berhasil bersama. 😍😍😍😍😍😍
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Momen 2022
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>
            <p className="mb-1 text-white">
              Kita semakin gemoy di tahun-tahun ini, wkwkwk.
            </p>
            <img
              src="/storage/images/2022.jpeg"
              alt="Gambar gagal dimuat"
              width={300}
            />
            <p className="text-white">
              Tahun ini kita bener-bener bisa bertemu bersama lagi, setelah 2
              tahun covid dan gak bisa merayakan ulang tahun ayang secara bebas,
              akhirnya di tahun 2022 ini kita bisa merayakannya secara bebas
              sayang. Horeeee. 😍😍😍😍😍
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Momen 2023
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>
            <p className="mb-1 text-white">Setahun yang lalu. 😂😂</p>
            <img
              src="/storage/images/2023.jpg"
              alt="Gambar gagal dimuat"
              width={300}
            />
            <p className="text-white">
              Tahun ini ayang lulus dari SMA, wuiihhh. menginjak masa-masa
              dewasa yakan. hehehe. Harapan kita dulu semoga masih bisa tetap
              bersama ke depannya. Alhamdulillah di tahun ini masih bisa
              bersama, Sayang. semoga ke depannya juga akan terus bersama.
              Aamiin. 😘😘😘😘😘
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work font-baloo"
            contentStyle={{ background: "#f65f", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={"😍"}
            iconClassName="icon-fix"
          >
            <h3 className="vertical-timeline-element-title font-titan text-white">
              Ulang tahun hari ini. 😍
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-1 text-white">
              ========================
            </h4>

            <p className="text-white">
              Tahun 2024 ini, Ayang sudah berhasil menginjakan kaki di usia yang
              ke-20 tahun. Hooreeeee. kepala 2 sekarang yah. wkwkwkwkwk. Momen
              spesial ini semoga harapan ayang selama ini bisa terkabul, semoga
              ayang diberikan kesehatan selalu, diberikan rizky yang berlimpah
              juga. Semoga masih terus bersama aa, yah. Aamiinin dulu kalau yang
              ini. 😘😘😘
            </p>
            <p className="text-white">
              Ke depannya Ayang harus bisa lebih dewasa lagi dari yang
              sebelumnya, sudah menginjak kepala dua nih bos. ngehehehehe.
              😂😂😂😂😂😂
            </p>
            <p className="text-white">
              Yak, aa gak bisa berkata apa-apa lagi, bukan aa gak punya doa atau
              harapan buat Ayang, tapi aa lebih suka kalau kita menjalankannya
              bersama. Gak usah banyak omong langsung sat-set jadi. Hehehehe.
              😘😘😘
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="flex justify-center items-center mt-5 font-titan text-white p-5 bg-primary">
        Sekali lagi, selamat ulang tahun, Sayangku. 😘
      </div>
    </>
  )
}

export default Timeline
