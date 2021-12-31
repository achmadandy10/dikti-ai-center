import { KedairekaAboutCard, KedairekaAboutCardDetail, KedairekaAboutCardTitle, KedairekaAboutContainer, KedairekaAboutContent, KedairekaAboutTitle } from "./KedairekaAbout.elements"

const KedairekaAbout = () => {
    return (
        <KedairekaAboutContainer>
            <KedairekaAboutTitle>Tentang</KedairekaAboutTitle>
            <KedairekaAboutContent>
                <KedairekaAboutCard>
                    <KedairekaAboutCardTitle>Platform Kedaireka</KedairekaAboutCardTitle>
                    <KedairekaAboutCardDetail>
                        <ul>
                            <li>
                                Tempat Kolaborasi Perguruan Tinggi dan Industri Untuk Mewujudkan Ekosistem Reka Cipta Kampus Merdeka
                            </li>
                            <li>
                                Platform Kedaireka merupakan upaya dalam meningkatkan kreativitas dan inovasi pada perguruan tinggi dan memecahkan permasalahan-permasalahan yang ada pada dunia kerja, karena tanpa adanya sinergi antara dunia kerja dan pendidikan tinggi maka akan terjadi tautan yang hilang (broken link).
                            </li>
                            <li>
                                “Kedaireka adalah platform untuk membangun optimisme antara dunia kerja yang memiliki berbagai masalah dan kebutuhan, dan dapat bertemu dengan dunia pendidikan tinggi yang memiliki berbagai solusi untuk masalah tersebut,”
                            </li>
                        </ul>
                    </KedairekaAboutCardDetail>
                </KedairekaAboutCard>
            </KedairekaAboutContent>
        </KedairekaAboutContainer>
    )
}

export default KedairekaAbout