import { AboutUsCard, AboutUsCardDetail, AboutUsCardImage, AboutUsCardImageContainer, AboutUsCardTitle, AboutUsContainer, AboutUsContent, AboutUsTitle } from "./AboutUs.elements"
import Dikti from "../../../../images/dikti.png"
import About from "../../../../images/about.svg"

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <AboutUsTitle>Tentang Kami</AboutUsTitle>
            <AboutUsContent>
                <AboutUsCard>
                    <AboutUsCardImageContainer>
                        <AboutUsCardImage className="logo" src={ Dikti }/>
                    </AboutUsCardImageContainer>

                    <AboutUsCardTitle>
                        Profil Institusi Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi
                    </AboutUsCardTitle>
                    <AboutUsCardDetail>
                        <div>
                            Direktorat Jenderal Pendidikan Tinggi (Ditjen Dikti) merupakan salah satu unit utama di Kementerian Pendidikan dan Kebudayaan. Sesuai fungsinya dalam Peraturan Menteri Pendidikan dan Kebudayaan Nomor 45 Tahun 2019, Ditjen Dikti antara lain menyelenggarakan fungsi :

                            <ul>
                                <li>
                                    Perumusan kebijakan di bidang pendidikan tinggi akademik;
                                </li>
                                <li>
                                    Pelaksanaan kebijakan di bidang pembelajaran, kemahasiswaan, kelembagaan, dan sumber daya pendidikan tinggi akademik;
                                </li>
                                <li>
                                    Perumusan pemberian izin penyelenggaraan perguruan tinggi swasta yang diselenggarakan oleh masyarakat;
                                </li>
                                <li>
                                    Pelaksanaan evaluasi dan pelaporan di bidang pendidikan tinggi akademik;
                                </li>
                                <li>
                                    Pelaksanaan administrasi Direktorat Jenderal; dan
                                </li>
                                <li>
                                    Pelaksanaan fungsi lain yang diberikan Menteri.
                                </li>
                            </ul>

                            <p>
                                Pendidikan Tinggi menjadi akan selalu menjadi modal penting lahirnya generasi penerus yang memiliki keunggulan di dalam berbagai bidang. Karenanya, Ditjen Dikti akan terus memberikan pelayanan terbaik dalam ruang lingkup pendidikan tinggi, sehingga cita-cita untuk menjadikan Sumber Daya Manusia yang unggul dapat tercapai dengan baik.
                            </p>
                            <br />
                        </div>

                        <AboutUsCardImageContainer>
                            <AboutUsCardImage src={ About }/>
                        </AboutUsCardImageContainer>
                    </AboutUsCardDetail>
                    <p>
                        Kecerdasan Artifisial membutuhkan perangkat komputasi yang besar (high performance computer), terutama saat membangun model untuk AI berdasarkan pembelajaran pola pada data set.  Kebutuhan perangkat keras ini sering kali menjadi kendala bagi peneliti di Indonesia ataupun mahasiswa dan dosen yang sedang mengembangkan produk berbasiskan AI.  Memang saat ini telah ada beberapa layanan cloud komersial yang menyediakan server komputasi, tetapi  ketika penggunaan dilakukan secara masif dan kontinyu maka biaya total bagi dosen dan mahasiswa menjadi tinggi.
                        <br />
                        <br />
                        Keberadaan fasilitas Super komputer on premise di Indonesia membangun potensi untuk mempelajari AI secara end-to-end, bukan saja dari sisi algoritma atau perangkat lunak yang menerapkan teknologi AI, tetapi juga dari tingkat perangkat keras yang digunakan untuk kebutuhan solusi AI.   Mahasiswa dan dosen mendapat kemungkinan terbuka untuk membangun layanan cloudnya sendiri untuk  kebutuhan AI.  Diharapkan penguasaan teknologi untuk AI oleh talenta Indonesia menjadi lebih lengkap bahkan kemungkinan membangun layanan cloud dan mengoperasikannya nya sendiri untuk kebutuhan Artificial Intelligence.
                    </p>
                </AboutUsCard>
            </AboutUsContent>
        </AboutUsContainer>
    )
}

export default AboutUs