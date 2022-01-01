import { AboutVissionCard, AboutVissionCardDetail, AboutVissionCardImage, AboutVissionCardImageContainer, AboutVissionCardTitle, AboutVissionContainer, AboutVissionContent, AboutVissionTitle } from "./AboutVission.elements"
import Vission from "../../../../images/vission.svg"
import Mission from "../../../../images/mission.svg"

const AboutVission = () => {
    return (
        <AboutVissionContainer>
            <AboutVissionTitle>Visi dan Misi</AboutVissionTitle>
            <AboutVissionContent>
                <AboutVissionCard className="vission">
                    <AboutVissionCardTitle>Visi</AboutVissionCardTitle>
                    <AboutVissionCardDetail className="vission">
                        <div>
                            “To enhance Higher Education AI capability in the country to ensure it will give big value add for the competitiveness of the country”

                            Meningkatkan kemampuan AI pada Perguruan Tinggi yang berperan besar guna menambah daya saing negara
                        </div>

                        <AboutVissionCardImageContainer>
                            <AboutVissionCardImage src={ Vission }/>
                        </AboutVissionCardImageContainer>
                    </AboutVissionCardDetail>
                </AboutVissionCard>

                <AboutVissionCard className="mission">
                    <AboutVissionCardTitle>Misi</AboutVissionCardTitle>
                    <AboutVissionCardDetail>
                        <div>
                            <ul>
                                <li>
                                    Mewujudkan Kecerdasan Artifisial yang beretika sesuai dengan nilai-nilai Pancasila.
                                </li>
                                <li>
                                    Menyiapkan Talenta Kecerdasan Artifisial Perguruan Tinggi yang berdaya saing dan berkarakter.
                                </li>
                                <li>
                                    Mewujudkan ekosistem data dan infrastruktur yang mendukung kontribusi Kecerdasan Artifisial Perguruan Tinggi untuk kepentingan negara.
                                </li>
                                <li>
                                    Menumbuhkembangkan ekosistem kolaborasi riset dan inovasi kecerdasan artifisial Perguruan Tinggi guna mengakselerasi reformasi birokrasi serta industri.
                                </li>
                                <li>
                                    Mengakselerasi publikasi bidang AI baik di tingkat nasional dan internasional
                                </li>
                            </ul>
                        </div>

                        <AboutVissionCardImageContainer>
                            <AboutVissionCardImage src={ Mission }/>
                        </AboutVissionCardImageContainer>
                    </AboutVissionCardDetail>
                </AboutVissionCard>
            </AboutVissionContent>
        </AboutVissionContainer>
    )
}

export default AboutVission