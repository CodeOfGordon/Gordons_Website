import CarousselBlock from "./Caroussel/CarousselBlock";

export default function Experience() {
    const carrouselInfo = {
        images: ['/caroussel/travel_therapy.png', '/caroussel/pokemon_showdown.png', '/caroussel/wallpaper_playlist.png', '/caroussel/express-test-message-board-sc.png', '/caroussel/spotify-dasboard.png'],
        altr: ["Travel Therapy Discord Bot", "Pokemon Showdown Demo", "Wallpaper Engine Playlist Playlist", "Express Test Message Board", "PowerBI-Spotify-Dashboard"],
        titles: ["Travel Therapy Discord Bot", "Pokemon Showdown Demo", "Wallpaper Engine Playlist Playlist", "Express Test Message Board", "PowerBI-Spotify-Dashboard"],
        links: ['https://github.com/alexszokolay/Uoft-ECKS',
          'https://github.com/CodeOfGordon/Pokemon-battle-simulator',
          'https://github.com/CodeOfGordon/Wallpaper-Engine-Playlist-Playlist',
          'https://github.com/CodeOfGordon/test_express_message_board',
          'https://github.com/CodeOfGordon/PowerBI-Spotify-Dashboard'
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