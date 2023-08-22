export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    place_name_es: string;
    text:          string;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
    language_es?:  Language;
    language?:     Language;
    bbox?:         number[];
}

export interface Context {
    id:           string;
    mapbox_id:    string;
    text_es:      string;
    text:         string;
    wikidata?:    Wikidata;
    short_code?:  ShortCode;
    language_es?: Language;
    language?:    Language;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    Co = "co",
    CoDc = "CO-DC",
    CoHui = "CO-HUI",
}

export enum Wikidata {
    Q234920 = "Q234920",
    Q2841 = "Q2841",
    Q739 = "Q739",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
    mapbox_id?:  string;
    wikidata?:   string;
}

