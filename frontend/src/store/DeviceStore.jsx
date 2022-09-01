import { makeAutoObservable } from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Телефоны' },
            { id: 2, name: 'Ноутбуки' },
            { id: 3, name: 'Телевизоры' },
            { id: 4, name: 'Холодильники' },
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung'},
            { id: 3, name: 'Lenovo'},
            { id: 4, name: 'Bosh'},
            
        ]
        this._devices = [
            { id: 1, name: 'iphone 12', rating: 1, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c'},
            { id: 2, name: 'wind of change 13', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 3, name: 'iphone se', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 4, name: 'iphone 7', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 5, name: 'iphone 9', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 6, name: 'iphone max', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 7, name: 'iphone 10', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            { id: 8, name: 'iphone 5', rating: 5, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' },
            
        ]
        this._selectedType = {}        
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}