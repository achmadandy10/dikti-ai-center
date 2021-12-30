import { AboutUsCard, AboutUsCardDetail, AboutUsCardTitle, AboutUsContainer, AboutUsContent, AboutUsTitle } from "./AboutUs.elements"

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <AboutUsTitle>Tentang Kami</AboutUsTitle>
            <AboutUsContent>
                <AboutUsCard>
                    <AboutUsCardTitle>
                        Profil Institusi Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi
                    </AboutUsCardTitle>
                    <AboutUsCardDetail>
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

                        Pendidikan Tinggi menjadi akan selalu menjadi modal penting lahirnya generasi penerus yang memiliki keunggulan di dalam berbagai bidang. Karenanya, Ditjen Dikti akan terus memberikan pelayanan terbaik dalam ruang lingkup pendidikan tinggi, sehingga cita-cita untuk menjadikan Sumber Daya Manusia yang unggul dapat tercapai dengan baik.
                    </AboutUsCardDetail>
                </AboutUsCard>
            </AboutUsContent>
        </AboutUsContainer>
    )
}

export default AboutUs