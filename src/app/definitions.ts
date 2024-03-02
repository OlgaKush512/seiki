type Origin = {
  fr_commune: string;
  percentage: number;
};

type Section = {
  avg_speed_kph: number;
  geography: {
    fr_commune: string;
    fr_departement: string;
    fr_iris: string;
    fr_region: string;
  };
  geometry: string;
  length_m: number;
  max_speed_kph: number;
  name: string;
  number_directions: number;
};

type AgeBreakdown = {
  "15-24": number;
  "25-34": number;
  "35-49": number;
  "50-64": number;
  "65-PLUS": number;
};

type DayTypeRatio = {
  [dayType: string]: number;
};

type GenderBreakdown = {
  [gender: string]: number;
};

type HourBreakdown = {
  [hour: string]: number;
};

type ModeBreakdown = {
  [mode: string]: number;
};

type SocialGroupBreakdown = {
  [group: string]: number;
};

type TripPurposeBreakdown = {
  [purpose: string]: number;
};

type WeekRatio = {
  [week: string]: number;
};

type CrossingOrPeopleInDay = {
  age_breakdown: AgeBreakdown;
  day_type_ratio: DayTypeRatio;
  gender_breakdown: GenderBreakdown;
  hour_breakdown: HourBreakdown;
  mode_breakdown: ModeBreakdown;
  social_group_breakdown: SocialGroupBreakdown;
  total: number;
  trip_purpose_breakdown: TripPurposeBreakdown;
  week_ratio: WeekRatio;
};

type Traffic = {
  crossings_in_a_day: CrossingOrPeopleInDay;
  people_in_a_day: CrossingOrPeopleInDay;
};

type Data = {
  origins: Origin[];
  section: Section;
  traffic: Traffic;
};

export type Item = {
  address: string | null;
  data: Data;
  error: null;
  id: string;
  is_from_cache: boolean;
  label: null;
  lat: number;
  lng: number;
  state: string;
  tags: any[];
  ts_created: string;
  ts_updated: string;
};

export type seikiData = {
  items: Item[];
};
