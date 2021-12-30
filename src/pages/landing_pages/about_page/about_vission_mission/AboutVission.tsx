import { AboutVissionCard, AboutVissionCardDetail, AboutVissionCardTitle, AboutVissionContainer, AboutVissionContent, AboutVissionTitle } from "./AboutVission.elements"

const AboutVission = () => {
    return (
        <AboutVissionContainer>
            <AboutVissionTitle>Visi dan Misi</AboutVissionTitle>
            <AboutVissionContent>
                <AboutVissionCard>
                    <AboutVissionCardTitle>Visi</AboutVissionCardTitle>
                    <AboutVissionCardDetail>
                        Inisiatif dari Dirjen Dikti, Prof. Ir. Nizam, MSc, PhD, dilaunching 14 Oktober 2020 beranggotakan 6 perguruan tinggi, ini 7
                        Anggota konsortium memiliki fokus pada suatu Domain Aplikasi,
                        Dalam berkegiatan tetap dikuti oleh semua anggota dan kampus lainnya di Indonesia melalui kerjasama dengan anggota konsorsium
                        Konsorsium bersifat pendorong dalam berkegiatan penelitian AI di Perguruan Tinggi di Indonesia
                    </AboutVissionCardDetail>
                </AboutVissionCard>

                <AboutVissionCard>
                    <AboutVissionCardTitle>Misi</AboutVissionCardTitle>
                    <AboutVissionCardDetail>
                        <ul>
                            <li>
                                Menyusun materi pelatihan dan pendidikan → telah berjalan seperti Microcredential baik untuk dosen maupun mahasiswa
                            </li>
                            <li>
                                Mendukung pelaksanaan pelatihan dan pendidikan di bidang Artificial Intelligence
                            </li>
                            <li>
                                Melakukan pendampingan dalam pelaksanaan DIKTI AI Center, terutama use case untuk pemerintah ataupun industri sebagai bentuk penelitian bersama ataupun pengabdian masyarakat
                            </li>
                            <li>
                                Melakukan penelahaan  terhadap proposal penggunaan DIKTI AI Center
                            </li>
                            <li>
                                Melakukan kompetisi2 untuk mendorong pemanfaatan DIKTI AI Center
                            </li>
                        </ul>
                    </AboutVissionCardDetail>
                </AboutVissionCard>
            </AboutVissionContent>
        </AboutVissionContainer>
    )
}

export default AboutVission