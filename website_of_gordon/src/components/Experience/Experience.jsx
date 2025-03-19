import CarousselBlock from "./Caroussel/CarousselBlock";

export default function Experience() {
    const carrouselInfo = {
        images: ['/caroussel/travel_therapy.png', '/caroussel/spotify-dasboard.png', 
            '/caroussel/azure_data_pipelining.png', '/caroussel/CxC_submission.png', 
            '/caroussel/Chess Project.png', '/caroussel/credit-card-fraud.png',
            '/caroussel/neural-network-implementation.png',
            '/caroussel/wallpaper_playlist.png', 
            '/caroussel/express-test-message-board-sc.png'],
        altr: ['Travel Therapy Discord Bot', 'PowerBI-Spotify-Dashboard', 
            'Azure Data Pipeline project', 'CxC Submission - Inflation Watch', 
            'Group Chess Project','Credit Card Fraud Detection',
            'Neural Network Implementation',
            "Wallpaper Engine Playlist Playlist", "Express Test Message Board"],
        titles: ['Travel Therapy Discord Bot', 'PowerBI-Spotify-Dashboard', 
            'Azure Data Pipeline project', 'CxC Submission - Inflation Watch', 
            'Group Chess Project','Credit Card Fraud Detection',
            'Neural Network Implementation',
            'Wallpaper Engine Playlist Playlist', 'Express Test Message Board', ],
        links: ['https://github.com/alexszokolay/Uoft-ECKS',
          'https://github.com/CodeOfGordon/PowerBI-Spotify-Dashboard',
          'https://github.com/CodeOfGordon/Azure_Sales_Customer_Pipelining',
          'https://github.com/CodeOfGordon/CxC-2025',
          '', 
          'https://github.com/CodeOfGordon/credit-card-fraud/',
          'https://github.com/CodeOfGordon/Implementations',
          'https://github.com/CodeOfGordon/Wallpaper-Engine-Playlist-Playlist',
          'https://github.com/CodeOfGordon/test_express_message_board',
        ]
    }
    return(
        <div id="experience-wrapper" className="info-block">
            <h1>Experience</h1>
            <CarousselBlock 
            images={carrouselInfo.images} 
            altr={carrouselInfo.altr} 
            titles={carrouselInfo.titles}
            links={carrouselInfo.links}
            />
        </div>
    );
}