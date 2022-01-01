import { AboutProgramCard, AboutProgramCardDetail, AboutProgramContainer, AboutProgramContent, AboutProgramTitle } from "./AboutProgram.elements"

const AboutProgram = () => {
    return (
        <AboutProgramContainer>
            <AboutProgramTitle>Program</AboutProgramTitle>
            <AboutProgramContent>
                <AboutProgramCard>
                    <AboutProgramCardDetail>
                        <ul>
                            <li>
                                Penawaran pemanfaatan kepada semua universitas yang ingin menggunakan daya GPU di DIKTI AI Centre untuk Penelitian AI (Desember 2021).
                            </li>
                            <li>
                                Peluncuran acara "DIKTI National AI Center of Excellence/AI Super Computer Sharing Facility for Education" yang akan menggunakan daya GPU untuk AI Research mulai Januari 2022
                            </li>
                            <li>
                                Kompetisi Start Up AI Nasional untuk Pendidikan
                            </li>
                            <li>
                                Hackathon / Bootcamp AI untuk Akademisi
                            </li>
                            <li>
                                Memulai Workshop AI Webinar/Seminar/Conference (Nasional/Internasional), Tech Talk, dan AI Startup Incubator secara berkala.
                            </li>
                            <li>
                                Penelitian Bersama dengan Univ Florida USA/Univ Cambridge UK, NTU/NUS Singapura dan PT lain yang potensial
                            </li>
                            <li>
                                Pemilihan beberapa bidang/topik R&D AI Nasional untuk dipimpin oleh konsorsium dengan fokus yaitu:
                                <ol>
                                    <li>
                                        AI untuk Pertanian
                                    </li>
                                    <li>
                                        AI untuk Perawatan Kesehatan
                                    </li>
                                    <li>
                                        AI untuk Kota Cerdas
                                    </li>
                                    <li>
                                        AI untuk Pemerintah
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Bekerja sama dengan IARC (Indonesia AI Research Consortium) untuk mengembangkan AI Research, AI Talent, Collaboration with Industry
                            </li>
                            <li>
                                Dan sebagainya.
                            </li>
                        </ul>
                    </AboutProgramCardDetail>
                </AboutProgramCard>
            </AboutProgramContent>
        </AboutProgramContainer>
    )
}

export default AboutProgram