// @flow
const colorType = {
    normal: {
        backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
    },
    flying: {
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    poison: {
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
    },
    ground: {
        backgroundImage: "linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)"
    },
    rock: {
        backgroundImage: "background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
        backgroundBlendMode: "normal, lighten, soft-light"
    },
    fighting: {
        backgroundImage: "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
    },
    bug: {
        backgroundImage: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
    },
    ghost: {
        backgroundImage: "linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)"
    },
    steel: {
        backgroundImage: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"
    },
    water: {
        backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
    },
    fire: {
        backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
    },
    grass: {
        backgroundImage: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
    },
    electric: {
        backgroundImage: "linear-gradient(120deg, #FFF59D 0%, #FFFF00 100%)"
    },
    psychic: {
        backgroundImage: "linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)"
    },
    ice: {
        backgroundColor: "rgba(150,217,214,.5)"
    },
    dragon: {
        backgroundImage: "linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)"
    },
    dark: {
        backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)"
    },
    fairy: {
        backgroundImage: "linear-gradient(to top, #F8BBD0 0%, #F48FB1 100%)"
    },
    unknown: {
        backgroundColor: "rgba(255,255,255,.5)"
    },
    shadow: {
        backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
    }
};

export default colorType;
