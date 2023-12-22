import { BBox, Feature, Geometry } from 'geojson';
import { TileLayerOptions } from 'leaflet';

type Type = 'Feature';
type OSMTypes = 'node' | 'relation' | 'way';
type PropType = 'administrative' | 'village' | 'station';
type GeometryPoint = 'Point';

type Coordinates = [number, number];
type OSMPropCategory =
  | 'boundary'
  | 'place'
  | 'emergency'
  | 'historic'
  | 'military'
  | 'natural'
  | 'landuse'
  | 'railway'
  | 'man_made'
  | 'aerialway'
  | 'amenity'
  | 'aeroway'
  | 'club'
  | 'craft'
  | 'leisure'
  | 'office'
  | 'mountain_pass'
  | 'shop'
  | 'tourism'
  | 'bridge'
  | 'tunnel'
  | 'waterway';

interface ITileLayerOptionsExtended extends TileLayerOptions {
  ext?: string;
  id: 'string';
}

enum OSMAdministrativePlaces {
  Country = 'Country',
  County = 'County',
  District = 'District',
  Municipality = 'Municipality',
  Province = 'Province',
  Region = 'Region',
  State = 'State',
}

enum OSMSustenanceAmenities {
  Bar = 'bar',
  Biergarten = 'biergarten',
  Cafe = 'cafe',
  FastFood = 'fast_food',
  FoodCourt = 'food_court',
  IceCream = 'ice_cream',
  Pub = 'pub',
  Restaurant = 'restaurant',
}

enum OSMEducationAmenities {
  College = 'college',
  DancingSchool = 'dancing_school',
  DrivingSchool = 'driving_school',
  FirstAidSchool = 'first_aid_school',
  Kindergarten = 'kindergarten',
  LanguageSchool = 'language_school',
  Library = 'library',
  MusicSchool = 'music_school',
  ResearchInstitute = 'research_institute',
  School = 'school',
  SurfSchool = 'surf_school',
  ToyLibrary = 'toy_library',
  TrafficPark = 'traffic_park',
  Training = 'training',
  University = 'university',
}

enum OSMTransportationAmenities {
  BicycleParking = 'bicycle_parking',
  BicycleRental = 'bicycle_rental',
  BicycleRepairStation = 'bicycle_repair_station',
  BoatRental = 'boat_rental',
  BoatSharing = 'boat_sharing',
  BusStation = 'bus_station',
  CarRental = 'car_rental',
  CarSharing = 'car_sharing',
  CarWash = 'car_wash',
  ChargingStation = 'charging_station',
  CompressedAir = 'compressed_air',
  DriverTraining = 'driver_training',
  FerryTerminal = 'ferry_terminal',
  Fuel = 'fuel',
  GritBin = 'grit_bin',
  MotorcycleParking = 'motorcycle_parking',
  Parking = 'parking',
  ParkingEntrance = 'parking_entrance',
  ParkingSpace = 'parking_space',
  Taxi = 'taxi',
  VehicleInspection = 'vehicle_inspection',
}

enum OSMFinancialAmenities {
  Atm = 'atm',
  Bank = 'bank',
  BureauDeChange = 'bureau_de_change',
}

enum OSMHealthcareAmenities {
  BabyHatch = 'baby_hatch',
  Clinic = 'clinic',
  Dentist = 'dentist',
  Doctors = 'doctors',
  Hospital = 'hospital',
  NursingHome = 'nursing_home',
  Pharmacy = 'pharmacy',
  SocialFacility = 'social_facility',
  Veterinary = 'veterinary',
}

enum OSMEntertainmentAmenities {
  ArtsCentre = 'arts_centre',
  Brothel = 'brothel',
  Casino = 'casino',
  Cinema = 'cinema',
  CommunityCentre = 'community_centre',
  ConferenceCentre = 'conference_centre',
  EventsVenue = 'events_venue',
  ExhibitionCentre = 'exhibition_centre',
  Fountain = 'fountain',
  Gambling = 'gambling',
  LoveHotel = 'love_hotel',
  MusicVenue = 'music_venue',
  Nightclub = 'nightclub',
  Planetarium = 'planetarium',
  PublicBookcase = 'public_bookcase',
  SocialCentre = 'social_centre',
  Stripclub = 'stripclub',
  Studio = 'studio',
  Swingerclub = 'swingerclub',
  Theatre = 'theatre',
}

enum OSMPublicServicesAmenities {
  Courthouse = 'courthouse',
  FireStation = 'fire_station',
  Police = 'police',
  PostBox = 'post_box',
  PostDepot = 'post_depot',
  PostOffice = 'post_office',
  Prison = 'prison',
  RangerStation = 'ranger_station',
  Townhall = 'townhall',
}

enum OSMFacilitiesAmenities {
  Bbq = 'bbq',
  Bench = 'bench',
  DogToilet = 'dog_toilet',
  DressingRoom = 'dressing_room',
  DrinkingWater = 'drinking_water',
  GiveBox = 'give_box',
  Mailroom = 'mailroom',
  ParcelLocker = 'parcel_locker',
  Shelter = 'shelter',
  Shower = 'shower',
  Telephone = 'telephone',
  Toilets = 'toilets',
  WaterPoint = 'water_point',
  WateringPlace = 'watering_place',
}

enum OSMWasteManagementAmenities {
  Recycling = 'recycling',
  SanitaryDumpStation = 'sanitary_dump_station',
  WasteBasket = 'waste_basket',
  WasteDisposal = 'waste_disposal',
  WasteTransferStation = 'waste_transfer_station',
}

enum OSMOthersAmenities {
  AnimalBoarding = 'animal_boarding',
  AnimalBreeding = 'animal_breeding',
  AnimalShelter = 'animal_shelter',
  AnimalTraining = 'animal_training',
  BakingOven = 'baking_oven',
  Clock = 'clock',
  Crematorium = 'crematorium',
  DiveCentre = 'dive_centre',
  FuneralHall = 'funeral_hall',
  GraveYard = 'grave_yard',
  HuntingStand = 'hunting_stand',
  InternetCafe = 'internet_cafe',
  Kitchen = 'kitchen',
  KneippWaterCure = 'kneipp_water_cure',
  Lounger = 'lounger',
  Marketplace = 'marketplace',
  Monastery = 'monastery',
  PhotoBooth = 'photo_booth',
  PlaceOfMourning = 'place_of_mourning',
  PlaceOfWorship = 'place_of_worship',
  PublicBath = 'public_bath',
  RefugeeSite = 'refugee_site',
  VendingMachine = 'vending_machine',
}

type OSMAmenities =
  | OSMSustenanceAmenities
  | OSMEducationAmenities
  | OSMTransportationAmenities
  | OSMFinancialAmenities
  | OSMHealthcareAmenities
  | OSMEntertainmentAmenities
  | OSMPublicServicesAmenities
  | OSMFacilitiesAmenities
  | OSMWasteManagementAmenities
  | OSMOthersAmenities;

type PermittedAmenities = {
  [key in OSMAmenities]: boolean;
};

type PermittedPlaces = {
  [key in OSMPlaces]: boolean;
};

type PermittedCountries = {
  [key in OSMCountryCodes]: boolean;
};

// type CountryCodeType = keyof typeof OSMCountryCodes;

// type AmenityNameType = (typeof OSMAmenities)[keyof typeof OSMCountryCodes];
type CountryCodeType = (typeof OSMCountryCodes)[keyof typeof OSMCountryCodes];
type PlaceNameType = (typeof OSMPlaces)[keyof typeof OSMPlaces];

type CountryCodeType2 = keyof typeof OSMCountryCodes;

enum OSMCountryCodes {
  AC = 'ac',
  AD = 'ad',
  AE = 'ae',
  AF = 'af',
  AG = 'ag',
  AI = 'ai',
  AL = 'al',
  AM = 'am',
  AO = 'ao',
  AQ = 'aq',
  AR = 'ar',
  AS = 'as',
  AT = 'at',
  AU = 'au',
  AW = 'aw',
  AX = 'ax',
  AZ = 'az',
  BA = 'ba',
  BB = 'bb',
  BD = 'bd',
  BE = 'be',
  BF = 'bf',
  BG = 'bg',
  BH = 'bh',
  BI = 'bi',
  BJ = 'bj',
  BL = 'bl',
  BM = 'bm',
  BN = 'bn',
  BO = 'bo',
  BQ = 'bq',
  BR = 'br',
  BS = 'bs',
  BT = 'bt',
  BV = 'bv',
  BW = 'bw',
  BY = 'by',
  BZ = 'bz',
  CA = 'ca',
  CC = 'cc',
  CD = 'cd',
  CF = 'cf',
  CG = 'cg',
  CH = 'ch',
  CI = 'ci',
  CK = 'ck',
  CL = 'cl',
  CM = 'cm',
  CN = 'cn',
  CO = 'co',
  CP = 'cp',
  CR = 'cr',
  CU = 'cu',
  CV = 'cv',
  CW = 'cw',
  CX = 'cx',
  CY = 'cy',
  CZ = 'cz',
  DE = 'de',
  DG = 'dg',
  DJ = 'dj',
  DK = 'dk',
  DM = 'dm',
  DO = 'do',
  DZ = 'dz',
  EA = 'ea',
  EC = 'ec',
  EE = 'ee',
  EG = 'eg',
  EH = 'eh',
  ENGLAND = 'england',
  ER = 'er',
  ES = 'es',
  ET = 'et',
  EU = 'eu',
  FI = 'fi',
  FJ = 'fj',
  FK = 'fk',
  FM = 'fm',
  FO = 'fo',
  FR = 'fr',
  GA = 'ga',
  GB = 'gb',
  GD = 'gd',
  GE = 'ge',
  GF = 'gf',
  GG = 'gg',
  GH = 'gh',
  GI = 'gi',
  GL = 'gl',
  GM = 'gm',
  GN = 'gn',
  GP = 'gp',
  GQ = 'gq',
  GR = 'gr',
  GS = 'gs',
  GT = 'gt',
  GU = 'gu',
  GW = 'gw',
  GY = 'gy',
  HK = 'hk',
  HM = 'hm',
  HN = 'hn',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  IC = 'ic',
  ID = 'id',
  IE = 'ie',
  IL = 'il',
  IM = 'im',
  IN = 'in',
  IO = 'io',
  IQ = 'iq',
  IR = 'ir',
  IS = 'is',
  IT = 'it',
  JE = 'je',
  JM = 'jm',
  JO = 'jo',
  JP = 'jp',
  KE = 'ke',
  KG = 'kg',
  KH = 'kh',
  KI = 'ki',
  KM = 'km',
  KN = 'kn',
  KP = 'kp',
  KR = 'kr',
  KW = 'kw',
  KY = 'ky',
  KZ = 'kz',
  LA = 'la',
  LB = 'lb',
  LC = 'lc',
  LI = 'li',
  LK = 'lk',
  LR = 'lr',
  LS = 'ls',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  LY = 'ly',
  MA = 'ma',
  MC = 'mc',
  MD = 'md',
  ME = 'me',
  MF = 'mf',
  MG = 'mg',
  MH = 'mh',
  MK = 'mk',
  ML = 'ml',
  MM = 'mm',
  MN = 'mn',
  MO = 'mo',
  MP = 'mp',
  MQ = 'mq',
  MR = 'mr',
  MS = 'ms',
  MT = 'mt',
  MU = 'mu',
  MV = 'mv',
  MW = 'mw',
  MX = 'mx',
  MY = 'my',
  MZ = 'mz',
  NA = 'na',
  NC = 'nc',
  NE = 'ne',
  NF = 'nf',
  NG = 'ng',
  NI = 'ni',
  NL = 'nl',
  NO = 'no',
  NP = 'np',
  NR = 'nr',
  NU = 'nu',
  NZ = 'nz',
  OM = 'om',
  PA = 'pa',
  PE = 'pe',
  PF = 'pf',
  PG = 'pg',
  PH = 'ph',
  PK = 'pk',
  PL = 'pl',
  PM = 'pm',
  PN = 'pn',
  PR = 'pr',
  PS = 'ps',
  PT = 'pt',
  PW = 'pw',
  PY = 'py',
  QA = 'qa',
  RE = 're',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  RW = 'rw',
  SA = 'sa',
  SB = 'sb',
  SC = 'sc',
  SCOTLAND = 'scotland',
  SD = 'sd',
  SE = 'se',
  SG = 'sg',
  SH = 'sh',
  SI = 'si',
  SJ = 'sj',
  SK = 'sk',
  SL = 'sl',
  SM = 'sm',
  SN = 'sn',
  SO = 'so',
  SR = 'sr',
  SS = 'ss',
  ST = 'st',
  SV = 'sv',
  SX = 'sx',
  SY = 'sy',
  SZ = 'sz',
  TA = 'ta',
  TC = 'tc',
  TD = 'td',
  TF = 'tf',
  TG = 'tg',
  TH = 'th',
  TJ = 'tj',
  TK = 'tk',
  TL = 'tl',
  TM = 'tm',
  TN = 'tn',
  TO = 'to',
  TR = 'tr',
  TT = 'tt',
  TV = 'tv',
  TW = 'tw',
  TZ = 'tz',
  UA = 'ua',
  UG = 'ug',
  UM = 'um',
  UN = 'un',
  US = 'us',
  UY = 'uy',
  UZ = 'uz',
  VA = 'va',
  VC = 'vc',
  VE = 've',
  VG = 'vg',
  VI = 'vi',
  VN = 'vn',
  VU = 'vu',
  WALES = 'wales',
  WF = 'wf',
  WS = 'ws',
  XK = 'xk',
  YE = 'ye',
  YT = 'yt',
  ZA = 'za',
  ZM = 'zm',
  ZW = 'zw',
}

enum OSMPlaces {
  Allotments = 'allotments',
  Archipelago = 'archipelago',
  Borough = 'borough',
  City = 'city',
  CityBlock = 'city_block',
  Continent = 'continent',
  Country = 'country',
  County = 'county',
  District = 'district',
  Farm = 'farm',
  Hamlet = 'hamlet',
  Island = 'island',
  Islet = 'islet',
  IsolatedDwelling = 'isolated_dwelling',
  Locality = 'locality',
  Municipality = 'municipality',
  Neighbourhood = 'neighbourhood',
  Ocean = 'ocean',
  Plot = 'plot',
  Polder = 'polder',
  Province = 'province',
  Quarter = 'quarter',
  Region = 'region',
  Sea = 'sea',
  Square = 'square',
  State = 'state',
  Suburb = 'suburb',
  Town = 'town',
  Village = 'village',
}

enum OSMUrbanSettlements {
  Borough = 'Borough',
  City = 'City',
  CityBlock = 'CityBlock',
  Neighbourhood = 'Neighbourhood',
  Plot = 'Plot',
  Quarter = 'Quarter',
  Suburb = 'Suburb',
}

enum OSMUrbanRuralSettlements {
  Allotments = 'Allotments',
  Farm = 'Farm',
  Hamlet = 'Hamlet',
  IsolatedDwelling = 'IsolatedDwelling',
  Town = 'Town',
  Village = 'Village',
}

enum OSMOtherPlaces {
  Archipelago = 'Archipelago',
  Continent = 'Continent',
  Island = 'Island',
  Islet = 'Islet',
  Locality = 'Locality',
  Ocean = 'Ocean',
  Sea = 'Sea',
  Square = 'Square',
}

type WaypointType2 =
  | 'loading'
  | 'unloading'
  | 'waypoint'
  | 'customs_registration'
  | 'customs_inspection'
  | 'customs_clearance';

enum WaypointType {
  CustomsClearance = 'customs_clearance',
  CustomsInspection = 'customs_inspection',
  CustomsRegistration = 'customs_registration',
  Loading = 'loading',
  Unloading = 'unloading',
  Waypoint = 'waypoint',
}

interface IOSMAddress {
  'ISO3166-2-lvl'?: string;
  'ISO3166-2-lvl4'?: string;
  allotments: string;
  borough: string;
  city: string;
  city_block: string;
  city_district: string;
  commercial: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  croft: string;
  district: string;
  farm: string;
  farmyard: string;
  hamlet: string;
  industrial: string;
  isolated_dwelling: string;
  municipality: string;
  neighbourhood: string;
  postcode: string;
  quarter: string;
  region: string;
  residential: string;
  retail: string;
  road: string;
  state: string;
  state_district: string;
  subdivision: string;
  suburb: string;
  town: string;
  village: string;
}

interface IInitialWaypoint {
  system_properties: {
    active: boolean;
    waypoint_id: number;
    waypoint_type: WaypointType;
  };
}

type IWaypoint = Feature & IInitialWaypoint;

interface IOSMPoint {
  bbox?: BBox;
  geometry?: {
    coordinates: Coordinates;
    type: GeometryPoint;
  };
  properties?: {
    address?: IOSMAddress;
    category: OSMPropCategory;
    display_name: string;
    icon: string;
    importance: number;
    osm_id: number;
    osm_type: OSMTypes;
    place_id: number;
    place_rank: number;
    type: PropType;
  };
  type?: Type;
}

// interface IRouteLegObj {
//   "via_waypoints": [
//     {
//       "waypoint_index": 1,
//       "distance_from_start": 127.951,
//       "geometry_index": 6
//     },
//     {
//       "waypoint_index": 2,
//       "distance_from_start": 236.822,
//       "geometry_index": 10
//     }
//   ],
//   "annotation": {
//     "distance": number[],
//     "duration": number[],
//     "speed": number[],
//     "congestion": [
//       "low",
//       "moderate",
//       "moderate",
//       "moderate",
//       "heavy",
//       "heavy",
//       "heavy",
//       "heavy"
//     ],
//     "maxspeed": <{ "speed": number, "unit": string }>[]
//   },
//   "duration": number,
//   "weight": number,
//   "distance": number,
//   "steps": [],
//   "summary": ""
// }

interface IRoute {
  distance: number; // only with waypoints_per_route=true
  duration: number;
  geometry: Geometry;
  legs: [];
  voiceLocale: string;
  waypoints: [];
  weight: number;
  weight_name: string;
}

export {
  CountryCodeType,
  CountryCodeType2,
  IOSMPoint,
  IOSMAddress,
  IRoute,
  IInitialWaypoint,
  ITileLayerOptionsExtended,
  IWaypoint,
  OSMAmenities,
  OSMPlaces,
  OSMCountryCodes,
  OSMAdministrativePlaces,
  OSMUrbanSettlements,
  OSMUrbanRuralSettlements,
  OSMOtherPlaces,
  PermittedAmenities,
  PermittedCountries,
  PermittedPlaces,
  PlaceNameType,
  WaypointType,
  WaypointType2,
  OSMSustenanceAmenities,
  OSMEducationAmenities,
  OSMTransportationAmenities,
  OSMFinancialAmenities,
  OSMHealthcareAmenities,
  OSMEntertainmentAmenities,
  OSMPublicServicesAmenities,
  OSMFacilitiesAmenities,
  OSMWasteManagementAmenities,
  OSMOthersAmenities,
};
