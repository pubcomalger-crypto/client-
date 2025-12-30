// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "أميرات الجمال والعرائس",
    bio: "👑🧴🎁👛من عالمنا إلى أناقتك الملكية 👑👸🏻👰🏻💎🧴⌚ مواد تجميل طبيعية للبشرة 🧼🧴🧴زيوت طبيعية للشعر🥥🧄وإكسسوارات 💍💍للطلب التواصل معنا 0554997412",
    profileImage: "https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/605634866_849126847896615_1481034572770496734_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iQcuoZx8AjMQ7kNvwGSgxol&_nc_oc=Adk8RA90ZXbsCbMxC5IEHKHce5oM2OFVol_EN9ZKPdIA-eSooamjLZOiCrKwiHReAzE&_nc_zt=23&_nc_ht=scontent.falg6-2.fna&_nc_gid=1C-IpBGvE5r0t3kdLlC1lQ&oh=00_AfnxIhwlWhfsMuuARbotzYxHoUl5mnoOyVbY_j-fVg15Kw&oe=69597D41",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/1GvjipXJjd/",
        instagram: "https://www.instagram.com/queens_world_dz/?utm_source=qr&igsh=anJ0eTBtaHoxbjQ3#",
        tiktok: "https://www.tiktok.com/@doctorcosmetique?_r=1&_t=ZS-92YgdofLgWu",
        whatsapp: "+213554997412",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://maps.app.goo.gl/jDi5cgCvQj5uzQvH6",
        phone: "+213 554 99 74 12"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: false,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}

