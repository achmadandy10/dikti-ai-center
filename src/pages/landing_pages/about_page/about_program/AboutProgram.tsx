import { AboutProgramCard, AboutProgramCardDetail, AboutProgramCardTitle, AboutProgramContainer, AboutProgramContent, AboutProgramTitle } from "./AboutProgram.elements"

const AboutProgram = () => {
    return (
        <AboutProgramContainer>
            <AboutProgramTitle>Program</AboutProgramTitle>
            <AboutProgramContent>
                <AboutProgramCard>
                    <AboutProgramCardTitle>Microcredential Training</AboutProgramCardTitle>
                    <AboutProgramCardDetail>
                        <ul>
                            <li>
                                Konsortium aktif mendorong penyusunan Okupasi bidang Artificial Inteligence dan Standard Kompetensi Kerja Nasional Indonesia (SKKNI)
                            </li>
                            <li>
                                Telah melaksanakan pelatihan untuk dosen baik sebagai kegiatan Dirjen Dikti ataupun sebgai kegiatan kerjasama dengan Kementerian Komunikasi dan Informatika
                            </li>
                            <li>
                                Melaksanakan pelatihan untuk mahasiswa sebagai bentuk Microcredential Associate Data Scientist
                            </li>
                        </ul>
                    </AboutProgramCardDetail>
                </AboutProgramCard>

                <AboutProgramCard>
                    <AboutProgramCardTitle>Rencana pemanfaatan awal DIKTI AI CENTER</AboutProgramCardTitle>
                    <AboutProgramCardDetail>
                        <ul>
                            <li>
                                <strong>Pelatihan: </strong>
                                untuk mahasiswa, dan dosen baik tentang materi AI ataupun cara penggunaan  DGX A100
                            </li>
                            <li>
                                <strong>Staging: </strong>
                                tempat untuk mengembangkan code program yang nantinya akan dideploy di environment deployment.
                            </li>
                            <li>
                                <strong>Deployment Code: </strong>
                                untuk menjalankan code yang ada untuk proses training ataupun inference
                            </li>
                            <li>
                                <strong>Repository data: </strong>
                                untuk menyimpan dataset dan model yang dishare agar dapat digunakan untuk kampus-kampus
                            </li>
                        </ul>
                    </AboutProgramCardDetail>
                </AboutProgramCard>
            </AboutProgramContent>
        </AboutProgramContainer>
    )
}

export default AboutProgram