/* eslint-disable prettier/prettier */
import GigasImg from "../img/planet/Gigas.png";
import LeviathanImg from "../img/planet/Leviathan.png";
import InfernoImg from "../img/planet/Inferno.png";
import TempestImg from "../img/planet/Tempest.png";
import ArchipelagoImg from "../img/planet/Archipelago.png";
import VolcanicImg from "../img/planet/Volcanic.png";
import KarstImg from "../img/planet/Karst.png";
import TundraImg from "../img/planet/Tundra.png";
import DeltaImg from "../img/planet/Delta.png";
import DunesImg from "../img/planet/Dunes.png";
import MountainousImg from "../img/planet/Mountainous.png";
import ForestyImg from "../img/planet/Foresty.png";
import WasterlandImg from "../img/planet/Wasterland.png";
import OasisImg from "../img/planet/Oasis.png";
import NormalImg from "../img/planet/Normal.png";
import StarT2_Binary1 from "../img/star/StarT2_Binary1.png";
import StarT2_Binary2 from "../img/star/StarT2_Binary2.png";
import StarT3_Zeno1 from "../img/star/StarT3_Zeno1.png";
import StarT3_Zeno2 from "../img/star/StarT3_Zeno2.png";
import StarT4_Omegix1 from "../img/star/StarT4_Omegix1.png";
import StarT4_Omegix2 from "../img/star/StarT4_Omegix2.png";
import StarT5_Preon1 from "../img/star/StarT5_Preon1.png";
import StarT5_Preon2 from "../img/star/StarT5_Preon2.png";
import StarT6_Vega1 from "../img/star/StarT6_Vega1.png";
import StarT6_Vega2 from "../img/star/StarT6_Vega2.png";
import StarT7_Planck1 from "../img/star/StarT7_Planck1.png";
import StarT7_Planck2 from "../img/star/StarT7_Planck2.png";
import StarT8_Quark1 from "../img/star/StarT8_Quark1.png";
import StarT8_Quark2 from "../img/star/StarT8_Quark2.png";
import StarT9_Boson1 from "../img/star/StarT9_Boson1.png";
import StarT9_Boson2 from "../img/star/StarT9_Boson2.png";
import StarT10_Solari1 from "../img/star/StarT10_Solari1.png";
import StarT10_Solari2 from "../img/star/StarT10_Solari2.png";
import StarT11_Asta1 from "../img/star/StarT11_Asta1.png";
import StarT11_Asta2 from "../img/star/StarT11_Asta2.png";
import Sun_0_RedDwarf from "../img/star/sun/Sun_0_RedDwarf.png";
import Sun_1_Blue_Dwarf from "../img/star/sun/Sun_1_Blue_Dwarf.png";
import Sun_2_White_Dwarf from "../img/star/sun/Sun_2_White_Dwarf.png";
import Sun_3_RedGiant from "../img/star/sun/Sun_3_RedGiant.png";
import Sun_4_Blue_Giant from "../img/star/sun/Sun_4_Blue_Giant.png";
import Sun_5_Blue_Super_Giant from "../img/star/sun/Sun_5_Blue_Super_Giant.png";
import Sun_6_Neutron from "../img/star/sun/Sun_6_Neutron.png";


let lib = {
  sun: [{
    name: "Red Dwarf Sun",
    value: 1,
    link: Sun_0_RedDwarf,
    buff: 0.5,
    tierRequired: 11
  }, {
    name: "Blue Dwarf Sun",
    value: 2,
    link: Sun_1_Blue_Dwarf,
    buff: 1,
    tierRequired: 9
  }, {
    name: "White Dwarf Sun",
    value: 3,
    link: Sun_2_White_Dwarf,
    buff: 1.5,
    tierRequired: 8
  }, {
    name: "Red Giant Sun",
    value: 4,
    link: Sun_3_RedGiant,
    buff: 3,
    tierRequired: 8
  }, {
    name: "Blue Giant Sun",
    value: 5,
    link: Sun_4_Blue_Giant,
    buff: 4.5,
    tierRequired: 5
  }, {
    name: "Blue Super Giant Sun",
    value: 6,
    link: Sun_5_Blue_Super_Giant,
    buff: 8,
    tierRequired: 3
  }, {
    name: "Neutron Sun",
    value: 7,
    link: Sun_6_Neutron,
    buff: 15,
    tierRequired: 2
  }],
  star: [{
      name: "StarT2 Binary1",
      value: 1,
      tier: 2,
      quantity: 18,
      buff: 35,
      orbitalCounts: 20,
      link: StarT2_Binary1
    },
    {
      name: "StarT2 Binary2",
      value: 2,
      tier: 2,
      quantity: 18,
      buff: 35,
      orbitalCounts: 20,
      link: StarT2_Binary2
    }, {
      name: "StarT3 Zeno1",
      value: 3,
      tier: 3,
      quantity: 105,
      buff: 27,
      orbitalCounts: 19,
      link: StarT3_Zeno1
    }, {
      name: "StarT3 Zeno2",
      value: 4,
      tier: 3,
      quantity: 105,
      buff: 27,
      orbitalCounts: 19,
      link: StarT3_Zeno2
    }, {
      name: "StarT4 Omegix1",
      value: 5,
      tier: 4,
      quantity: 234,
      buff: 18,
      orbitalCounts: 17,
      link: StarT4_Omegix1
    }, {
      name: "StarT4 Omegix2",
      value: 6,
      tier: 4,
      quantity: 234,
      buff: 18,
      orbitalCounts: 17,
      link: StarT4_Omegix2
    }, {
      name: "StarT5 Preon1",
      value: 7,
      tier: 5,
      quantity: 494,
      buff: 12,
      orbitalCounts: 16,
      link: StarT5_Preon1
    }, {
      name: "StarT5 Preon2",
      value: 8,
      tier: 5,
      quantity: 494,
      buff: 12,
      orbitalCounts: 16,
      link: StarT5_Preon2
    }, {
      name: "StarT6 Vega1",
      value: 9,
      tier: 6,
      quantity: 738,
      buff: 9,
      orbitalCounts: 15,
      link: StarT6_Vega1
    }, {
      name: "StarT6 Vega2",
      value: 10,
      tier: 6,
      quantity: 738,
      buff: 9,
      orbitalCounts: 15,
      link: StarT6_Vega2
    }, {
      name: "StarT7 Planck1",
      value: 11,
      tier: 7,
      quantity: 1158,
      buff: 6,
      orbitalCounts: 14,
      link: StarT7_Planck1
    }, {
      name: "StarT7 Planck2",
      value: 12,
      tier: 7,
      quantity: 1158,
      buff: 6,
      orbitalCounts: 14,
      link: StarT7_Planck2
    }, {
      name: "StarT8 Quark1",
      value: 13,
      tier: 8,
      quantity: 1539,
      buff: 4,
      orbitalCounts: 13,
      link: StarT8_Quark1
    }, {
      name: "StarT8 Quark2",
      value: 14,
      tier: 8,
      quantity: 1539,
      buff: 4,
      orbitalCounts: 13,
      link: StarT8_Quark2
    }, {
      name: "StarT9 Boson1",
      value: 15,
      tier: 9,
      quantity: 2158,
      buff: 3,
      orbitalCounts: 12,
      link: StarT9_Boson1
    }, {
      name: "StarT9 Boson2",
      value: 16,
      tier: 9,
      quantity: 2158,
      buff: 3,
      orbitalCounts: 12,
      link: StarT9_Boson2
    }, {
      name: "StarT10 Solari1",
      value: 17,
      tier: 10,
      quantity: 2413,
      buff: 2,
      orbitalCounts: 10,
      link: StarT10_Solari1
    }, {
      name: "StarT10 Solari2",
      value: 18,
      tier: 10,
      quantity: 2413,
      buff: 2,
      orbitalCounts: 10,
      link: StarT10_Solari2
    }, {
      name: "StarT11 Asta1",
      value: 19,
      tier: 11,
      quantity: 2636,
      buff: 1.2,
      orbitalCounts: 9,
      link: StarT11_Asta1
    }, {
      name: "StarT11 Asta2",
      value: 20,
      tier: 11,
      quantity: 2636,
      buff: 1.2,
      orbitalCounts: 9,
      link: StarT11_Asta2
    },
  ],
  planets: [{
    name: "Gigas",
    value: 1,
    link: GigasImg,
  }, {
    name: "Leviathan",
    value: 2,
    link: LeviathanImg,
  }, {
    name: "Inferno",
    value: 3,
    link: InfernoImg,
  }, {
    name: "Tempest",
    value: 4,
    link: TempestImg,
  }, {
    name: "Archipelago",
    value: 5,
    link: ArchipelagoImg,
  }, {
    name: "Volcanic",
    value: 6,
    link: VolcanicImg,
  }, {
    name: "Karsts",
    value: 7,
    link: KarstImg,
  }, {
    name: "Tundra",
    value: 8,
    link: TundraImg,
  }, {
    name: "Delta",
    value: 9,
    link: DeltaImg,
  }, {
    name: "Dunes",
    value: 10,
    link: DunesImg,
  }, {
    name: "Mountainous",
    value: 11,
    link: MountainousImg,
  }, {
    name: "Foresty",
    value: 12,
    link: ForestyImg,
  }, {
    name: "Wasteland",
    value: 13,
    link: WasterlandImg,
  }, {
    name: "Oasis",
    value: 14,
    link: OasisImg,
  }, {
    name: "Normal",
    value: 15,
    link: NormalImg,
  }],
  legacy: {
    Archipelago: [{
      title: "F0 W0 A0 E75",
      value: 1,
      fire: 0,
      water: 0,
      air: 0,
      earth: 75
    }, {
      title: "F0 W0 A55 E55",
      value: 2,
      fire: 0,
      water: 0,
      air: 55,
      earth: 55
    }, {
      title: "F0 W65 A0 E0",
      value: 3,
      fire: 0,
      water: 65,
      air: 0,
      earth: 0
    }, {
      title: "F0 W75 A0 E0",
      value: 4,
      fire: 0,
      water: 75,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A0 E65",
      value: 5,
      fire: 0,
      water: 0,
      air: 0,
      earth: 65
    }, {
      title: "F0 W50 A0 E0",
      value: 6,
      fire: 0,
      water: 50,
      air: 0,
      earth: 0
    }, {
      title: "F0 W55 A0 E55",
      value: 7,
      fire: 0,
      water: 55,
      air: 0,
      earth: 55
    }, {
      title: "F55 W0 A0 E55",
      value: 8,
      fire: 55,
      water: 0,
      air: 0,
      earth: 55
    }],
    Volcanic: [{
      title: "F0 W0 A0 E75",
      value: 1,
      fire: 0,
      water: 0,
      air: 0,
      earth: 75
    }, {
      title: "F0 W0 A55 E55",
      value: 2,
      fire: 0,
      water: 0,
      air: 55,
      earth: 55
    }, {
      title: "F0 W0 A0 E65",
      value: 3,
      fire: 0,
      water: 0,
      air: 0,
      earth: 65
    }, {
      title: "F55 W55 A0 E0",
      value: 4,
      fire: 55,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A0 E60",
      value: 5,
      fire: 0,
      water: 0,
      air: 0,
      earth: 60
    }, {
      title: "F55 W0 A0 E55",
      value: 6,
      fire: 55,
      water: 0,
      air: 0,
      earth: 55
    }, {
      title: "F75 W0 A0 E0",
      value: 7,
      fire: 75,
      water: 0,
      air: 0,
      earth: 0
    }, ],
    Karsts: [{
      title: "F0 W0 A0 E75",
      value: 1,
      fire: 0,
      water: 0,
      air: 0,
      earth: 75
    }, {
      title: "F0 W0 A55 E55",
      value: 2,
      fire: 0,
      water: 0,
      air: 55,
      earth: 55
    }, {
      title: "F0 W0 A0 E65",
      value: 3,
      fire: 0,
      water: 0,
      air: 0,
      earth: 65
    }, {
      title: "F0 W0 A60 E60",
      value: 4,
      fire: 0,
      water: 0,
      air: 60,
      earth: 60
    }, {
      title: "F0 W0 A65 E0",
      value: 5,
      fire: 0,
      water: 0,
      air: 65,
      earth: 0
    }, {
      title: "F55 W0 A55 E0",
      value: 6,
      fire: 55,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W0 A0 E60",
      value: 7,
      fire: 0,
      water: 0,
      air: 0,
      earth: 60
    }, {
      title: "F0 W0 A75 E0",
      value: 8,
      fire: 0,
      water: 0,
      air: 75,
      earth: 0
    }, {
      title: "F0 W55 A55 E0",
      value: 9,
      fire: 0,
      water: 55,
      air: 55,
      earth: 0
    }],
    Tundra: [{
      title: "F0 W65 A0 E0",
      value: 1,
      fire: 0,
      water: 65,
      air: 0,
      earth: 0
    }, {
      title: "F0 W75 A0 E0",
      value: 2,
      fire: 0,
      water: 75,
      air: 0,
      earth: 0
    }, {
      title: "F55 W55 A0 E0",
      value: 3,
      fire: 55,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F55 W0 A55 E0",
      value: 4,
      fire: 55,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W55 A55 E0",
      value: 5,
      fire: 0,
      water: 55,
      air: 55,
      earth: 0
    }, {
      title: "F60 W0 A0 E0",
      value: 6,
      fire: 60,
      water: 0,
      air: 0,
      earth: 0
    }],
    Delta: [{
      title: "F0 W0 A55 E55",
      value: 1,
      fire: 0,
      water: 0,
      air: 55,
      earth: 55
    }, {
      title: "F0 W65 A0 E0",
      value: 2,
      fire: 0,
      water: 65,
      air: 0,
      earth: 0
    }, {
      title: "F0 W75 A0 E0",
      value: 3,
      fire: 0,
      water: 75,
      air: 0,
      earth: 0
    }, {
      title: "F55 W55 A0 E0",
      value: 4,
      fire: 55,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F55 W0 A55 E0",
      value: 5,
      fire: 55,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W0 A75 E0",
      value: 6,
      fire: 0,
      water: 0,
      air: 75,
      earth: 0
    }, {
      title: "F0 W50 A0 E0",
      value: 7,
      fire: 0,
      water: 50,
      air: 0,
      earth: 0
    }, {
      title: "F0 W55 A0 E55",
      value: 8,
      fire: 0,
      water: 55,
      air: 0,
      earth: 55
    }, {
      title: "F0 W55 A55 E0",
      value: 9,
      fire: 0,
      water: 55,
      air: 55,
      earth: 0
    }],
    Dunes: [{
      title: "F0 W0 A55 E55",
      value: 1,
      fire: 0,
      water: 0,
      air: 55,
      earth: 55
    }, {
      title: "F55 W55 A0 E0",
      value: 2,
      fire: 55,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A60 E60",
      value: 3,
      fire: 0,
      water: 0,
      air: 60,
      earth: 60
    }, {
      title: "F0 W0 A65 E0",
      value: 4,
      fire: 0,
      water: 0,
      air: 65,
      earth: 0
    }, {
      title: "F55 W0 A55 E0",
      value: 5,
      fire: 55,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W0 A75 E0",
      value: 6,
      fire: 0,
      water: 0,
      air: 75,
      earth: 0
    }, {
      title: "F0 W55 A55 E0",
      value: 7,
      fire: 0,
      water: 55,
      air: 55,
      earth: 0
    }, {
      title: "F55 W0 A0 E55",
      value: 8,
      fire: 55,
      water: 0,
      air: 0,
      earth: 55
    }, {
      title: "F60 W0 A0 E0",
      value: 9,
      fire: 60,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F75 W0 A0 E0",
      value: 10,
      fire: 75,
      water: 0,
      air: 0,
      earth: 0
    }],
    Mountainous: [{
      title: "F35 W35 A0 E35",
      value: 1,
      fire: 35,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A0 E40",
      value: 2,
      fire: 0,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F0 W0 A40 E40",
      value: 3,
      fire: 0,
      water: 0,
      air: 40,
      earth: 40
    }, {
      title: "F0 W35 A35 E35",
      value: 4,
      fire: 0,
      water: 35,
      air: 35,
      earth: 35
    }, {
      title: "F0 W40 A0 E0",
      value: 5,
      fire: 0,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F0 W40 A0 E40",
      value: 6,
      fire: 0,
      water: 40,
      air: 0,
      earth: 40
    }, {
      title: "F35 W0 A0 E35",
      value: 7,
      fire: 35,
      water: 0,
      air: 0,
      earth: 35
    }, {
      title: "F40 W0 A0 E40",
      value: 8,
      fire: 40,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F40 W40 A0 E0",
      value: 9,
      fire: 40,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F55 W0 A0 E0",
      value: 10,
      fire: 55,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W35 A35 E0",
      value: 11,
      fire: 0,
      water: 35,
      air: 35,
      earth: 0
    }, {
      title: "F0 W55 A0 E0",
      value: 12,
      fire: 0,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F35 W0 A35 E0",
      value: 13,
      fire: 35,
      water: 0,
      air: 35,
      earth: 0
    }, {
      title: "F35 W35 A0 E0",
      value: 14,
      fire: 35,
      water: 35,
      air: 0,
      earth: 0
    }, {
      title: "F0 W40 A40 E0",
      value: 15,
      fire: 0,
      water: 40,
      air: 40,
      earth: 0
    }, {
      title: "F35 W0 A35 E35",
      value: 16,
      fire: 35,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F0 W0 A35 E35",
      value: 17,
      fire: 0,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F0 W35 A0 E35",
      value: 18,
      fire: 0,
      water: 35,
      air: 0,
      earth: 35
    }],
    Foresty: [{
      title: "F0 W0 A40 E0",
      value: 1,
      fire: 0,
      water: 0,
      air: 40,
      earth: 0
    }, {
      title: "F35 W35 A0 E35",
      value: 2,
      fire: 35,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A0 E40",
      value: 3,
      fire: 0,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F0 W0 A40 E40",
      value: 4,
      fire: 0,
      water: 0,
      air: 40,
      earth: 40
    }, {
      title: "F0 W35 A35 E35",
      value: 5,
      fire: 0,
      water: 35,
      air: 35,
      earth: 35
    }, {
      title: "F0 W40 A0 E0",
      value: 6,
      fire: 0,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F0 W40 A0 E40",
      value: 7,
      fire: 0,
      water: 40,
      air: 0,
      earth: 40
    }, {
      title: "F35 W0 A0 E35",
      value: 8,
      fire: 35,
      water: 0,
      air: 0,
      earth: 35
    }, {
      title: "F40 W0 A0 E40",
      value: 9,
      fire: 40,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F40 W40 A0 E0",
      value: 10,
      fire: 40,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F0 W35 A35 E0",
      value: 11,
      fire: 0,
      water: 35,
      air: 35,
      earth: 0
    }, {
      title: "F0 W55 A0 E0",
      value: 12,
      fire: 0,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F35 W0 A35 E0",
      value: 13,
      fire: 35,
      water: 0,
      air: 35,
      earth: 0
    }, {
      title: "F0 W0 A55 E0",
      value: 14,
      fire: 0,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W40 A40 E0",
      value: 15,
      fire: 0,
      water: 40,
      air: 40,
      earth: 0
    }, {
      title: "F35 W0 A35 E35",
      value: 16,
      fire: 35,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F0 W35 A0 E35",
      value: 17,
      fire: 0,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A0 E55",
      value: 18,
      fire: 0,
      water: 0,
      air: 0,
      earth: 55
    }, {
      title: "F35 W35 A35 E0",
      value: 19,
      fire: 35,
      water: 35,
      air: 35,
      earth: 0
    }],
    Wasteland: [{
      title: "F40 W0 A0 E0",
      value: 1,
      fire: 40,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A40 E0",
      value: 2,
      fire: 0,
      water: 0,
      air: 40,
      earth: 0
    }, {
      title: "F35 W35 A0 E35",
      value: 3,
      fire: 35,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A0 E40",
      value: 4,
      fire: 0,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F0 W0 A40 E40",
      value: 5,
      fire: 0,
      water: 0,
      air: 40,
      earth: 40
    }, {
      title: "F0 W35 A35 E35",
      value: 6,
      fire: 0,
      water: 35,
      air: 35,
      earth: 35
    }, {
      title: "F0 W40 A0 E40",
      value: 7,
      fire: 0,
      water: 40,
      air: 0,
      earth: 40
    }, {
      title: "F35 W0 A0 E35",
      value: 8,
      fire: 35,
      water: 0,
      air: 0,
      earth: 35
    }, {
      title: "F40 W0 A0 E40",
      value: 8,
      fire: 40,
      water: 0,
      air: 0,
      earth: 40
    }, {
      title: "F40 W40 A0 E0",
      value: 9,
      fire: 40,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F55 W0 A0 E0",
      value: 10,
      fire: 55,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W35 A35 E0",
      value: 11,
      fire: 0,
      water: 35,
      air: 35,
      earth: 0
    }, {
      title: "F35 W0 A35 E0",
      value: 12,
      fire: 35,
      water: 0,
      air: 35,
      earth: 0
    }, {
      title: "F35 W35 A0 E0",
      value: 13,
      fire: 35,
      water: 35,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A55 E0",
      value: 14,
      fire: 0,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W40 A40 E0",
      value: 15,
      fire: 0,
      water: 40,
      air: 40,
      earth: 0
    }, {
      title: "F35 W0 A35 E35",
      value: 16,
      fire: 35,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F0 W0 A35 E35",
      value: 17,
      fire: 0,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F0 W35 A0 E35",
      value: 18,
      fire: 0,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A0 E55",
      value: 19,
      fire: 0,
      water: 0,
      air: 0,
      earth: 55
    }, {
      title: "F35 W35 A35 E0",
      value: 20,
      fire: 35,
      water: 35,
      air: 35,
      earth: 0
    }],
    Oasis: [{
      title: "F40 W0 A0 E0",
      value: 1,
      fire: 40,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A40 E0",
      value: 2,
      fire: 0,
      water: 0,
      air: 40,
      earth: 0
    }, {
      title: "F35 W35 A0 E35",
      value: 3,
      fire: 35,
      water: 35,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A40 E40",
      value: 4,
      fire: 0,
      water: 0,
      air: 40,
      earth: 40
    }, {
      title: "F0 W35 A35 E35",
      value: 5,
      fire: 0,
      water: 35,
      air: 35,
      earth: 35
    }, {
      title: "F0 W40 A0 E0",
      value: 6,
      fire: 0,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F0 W40 A0 E40",
      value: 7,
      fire: 0,
      water: 40,
      air: 0,
      earth: 40
    }, {
      title: "F35 W0 A0 E35",
      value: 8,
      fire: 35,
      water: 0,
      air: 0,
      earth: 35
    }, {
      title: "F40 W40 A0 E0",
      value: 9,
      fire: 40,
      water: 40,
      air: 0,
      earth: 0
    }, {
      title: "F55 W0 A0 E0",
      value: 10,
      fire: 55,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W35 A35 E0",
      value: 11,
      fire: 0,
      water: 35,
      air: 35,
      earth: 0
    }, {
      title: "F0 W55 A0 E0",
      value: 12,
      fire: 0,
      water: 55,
      air: 0,
      earth: 0
    }, {
      title: "F35 W0 A35 E0",
      value: 13,
      fire: 35,
      water: 0,
      air: 35,
      earth: 0
    }, {
      title: "F35 W35 A0 E0",
      value: 14,
      fire: 35,
      water: 35,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A55 E0",
      value: 15,
      fire: 0,
      water: 0,
      air: 55,
      earth: 0
    }, {
      title: "F0 W40 A40 E0",
      value: 16,
      fire: 0,
      water: 40,
      air: 40,
      earth: 0
    }, {
      title: "F0 W0 A35 E35",
      value: 17,
      fire: 0,
      water: 0,
      air: 35,
      earth: 35
    }, {
      title: "F40 W0 A40 E0",
      value: 18,
      fire: 40,
      water: 0,
      air: 40,
      earth: 0
    }, {
      title: "F35 W35 A35 E0",
      value: 19,
      fire: 35,
      water: 35,
      air: 35,
      earth: 0
    }],
    Normal: [{
      title: "F0 W0 A0 E65",
      value: 1,
      fire: 0,
      water: 0,
      air: 0,
      earth: 65
    }, {
      title: "F35 W0 A0 E0",
      value: 2,
      fire: 35,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F0 W0 A30 E30",
      value: 3,
      fire: 0,
      water: 0,
      air: 30,
      earth: 30
    }, {
      title: "F0 W30 A0 E0",
      value: 4,
      fire: 0,
      water: 30,
      air: 0,
      earth: 0
    }, {
      title: "F0 W30 A0 E30",
      value: 5,
      fire: 0,
      water: 30,
      air: 0,
      earth: 30
    }, {
      title: "F0 W35 A0 E0",
      value: 6,
      fire: 0,
      water: 35,
      air: 0,
      earth: 0
    }, {
      title: "F35 W35 A35 E35",
      value: 7,
      fire: 35,
      water: 35,
      air: 35,
      earth: 35
    }, {
      title: "F0 W0 A0 E35",
      value: 8,
      fire: 0,
      water: 0,
      air: 0,
      earth: 35
    }, {
      title: "F0 W0 A35 E0",
      value: 9,
      fire: 0,
      water: 0,
      air: 35,
      earth: 0
    }, {
      title: "F30 W0 A30 E0",
      value: 10,
      fire: 30,
      water: 0,
      air: 30,
      earth: 0
    }, {
      title: "F0 W0 A30 E0",
      value: 11,
      fire: 0,
      water: 0,
      air: 30,
      earth: 0
    }, {
      title: "F30 W0 A0 E30",
      value: 12,
      fire: 30,
      water: 0,
      air: 0,
      earth: 30
    }, {
      title: "F30 W30 A30 E30",
      value: 13,
      fire: 30,
      water: 30,
      air: 30,
      earth: 30
    }, {
      title: "F0 W30 A30 E0",
      value: 14,
      fire: 0,
      water: 30,
      air: 30,
      earth: 0
    }, {
      title: "F30 W0 A0 E0",
      value: 15,
      fire: 30,
      water: 0,
      air: 0,
      earth: 0
    }, {
      title: "F30 W30 A0 E0",
      value: 16,
      fire: 30,
      water: 30,
      air: 0,
      earth: 0
    }],
  }
};

export default lib;