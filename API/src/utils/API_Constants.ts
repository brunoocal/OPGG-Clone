export const constants = {
  platform_routings: {
    BR1: "br1.api.riotgames.com",
    EUN1: "eun1.api.riotgames.com",
    EUW1: "euw1.api.riotgames.com",
    JP1: "jp1.api.riotgames.com",
    KR: "kr.api.riotgames.com",
    LA1: "la1.api.riotgames.com",
    LA2: "la2.api.riotgames.com",
    NA1: "na1.api.riotgames.com",
    OC1: "oc1.api.riotgames.com",
    TR1: "tr1.api.riotgames.com",
    RU: "ru.api.riotgames.com",
  },

  regional_routings: {
    AMERICAS: "americas.api.riotgames.com",
    ASIA: "asia.api.riotgames.com",
    EUROPE: "europe.api.riotgames.com",
  },

  apis: {
    summoner: {
      accountId: "/lol/summoner/v4/summoners/by-account/",
      summonerName: "/lol/summoner/v4/summoners/by-name/",
      puuid: "/lol/summoner/v4/summoners/by-puuid/",
      summonerId: "/lol/summoner/v4/summoners/",
      access_token: "/lol/summoner/v4/summoners/me",
    },
    league_entries: {
      bySummonerId: "/lol/league/v4/entries/by-summoner/",
      byQueueTierAndDivision:
        "/lol/league/v4/entries/%queue%/%tier%/%division%",
      challengerQueue: "/lol/league/v4/challengerleagues/by-queue/",
      grandMasterQueue: "/lol/league/v4/grandmasterleagues/by-queue/",
      masterQueue: "/lol/league/v4/masterleagues/by-queue/",
    },
    matches: {
      listByPuuid: "/lol/match/v5/matches/by-puuid/%puuid%/ids",
      getMatchWithId: "/lol/match/v5/matches/",
      getMatchTimelineWithId: "/lol/match/v5/matches/%matchId%/timeline",
    },
  },

  lang_codes: {
    codeToString: {
      cs_CZ: "Czech",
      el_GR: "Greek",
      pl_PL: "Polish",
      ro_RO: "Romanian",
      hu_HU: "Hungarian",
      en_GB: "English (UK)",
      de_DE: "German",
      es_ES: "Spanish (Spain)",
      it_IT: "Italian",
      fr_FR: "French",
      ja_JP: "Japanese",
      ko_KR: "Korean",
      es_MX: "Spanish (Mexico)",
      es_AR: "Spanish (Argentina)",
      pt_BR: "Portuguese (Brazil)",
      en_US: "English (US)",
      en_AU: "English (Australia)",
      ru_RU: "Russian",
      tr_TR: "Turkish",
      ms_MY: "Malay",
      en_PH: "English (PH)",
      en_SG: "English (Singapore)",
      th_TH: "Thai",
      vn_VN: "Vietnamese",
      id_ID: "Indonesian",
      zh_MY: "Chinese (Malaysia)",
      zh_CN: "Chinese (China)",
      zh_TW: "Chinese (Taiwan)",
    },

    stringToCode: {
      Czech: "cs_CZ",
      Greek: "el_GR",
      Polish: "pl_PL",
      Romanian: "ro_RO",
      Hungarian: "hu_HU",
      "English (UK)": "en_GB",
      German: "de_DE",
      "Spanish (Spain)": "es_ES",
      Italian: "it_IT",
      French: "fr_FR",
      Japanese: "ja_JP",
      Korean: "ko_KR",
      "Spanish (Mexico)": "es_MX",
      "Spanish (Argentina)": " es_AR",
      "Portuguese (Brazil)": "pt_BR",
      "English (US)": "en_US",
      "English (Australia)": "en_AU",
      Russian: "ru_RU",
      Turkish: "tr_TR",
      Malay: " ms_MY",
      "English (PH)": "en_PH",
      "English (Singapore)": " en_SG",
      Thai: "th_TH",
      Vietnamese: "vn_VN",
      Indonesian: "id_ID",
      "Chinese (Malaysia)": "zh_MY",
      "Chinese (China)": "zh_CN",
      "Chinese (Taiwan)": "zh_TW",
    },
  },

  datadragon: {
    base: "http://ddragon.leagueoflegends.com/cdn/11.11.1/",
    champion: {
      base: "data/%LANG%/champion/",
      splash: "img/champion/splash/",
      loading: "img/champion/loading/",
      square: "img/champion/",
      passive: "img/passive/",
      ability: "img/spell/",
    },
    items: {
      base: "data/%LANG%/",
      asset: "img/item/",
    },
    spells: {
      base: "data/%LANG%/",
      image: "img/spell/",
    },
    icons: {
      base: "data/%LANG%/",
      image: "img/profileicon/",
    },
    minimaps: {
      image: "img/map/",
    },
    sprites: {
      image: "img/sprite/",
    },
  },

  borders: {
    image: "http://localhost:3000/static/borders/",
  },
  emblems: {
    image: "http://localhost:3000/static/emblems/",
  },
};
