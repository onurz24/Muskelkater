import React from 'react';
import "../../assets/styles/components/MenuCategories/MenuCategories.scss";
import { MenuCategorie } from "./MenuCategorie";

interface MenuOption {
    ID: number;
    Text: string;
    Path: string;
}

interface MenuCategoriesProps {};

export const MenuCategories = ({}:MenuCategoriesProps) => {
    return(
        <div className="Menu_Categories">
            <MenuCategorie
                MenuHeadline={"Muskelkater"}
                MenuOptions={[
                    {
                        ID: 1,
                        Text: "anzeigen des Muskelkater (MK)",
                        Path: "/muskelkater/view"
                    },
                    {
                        ID: 2,
                        Text: "Level des MK",
                        Path: "/muskelkater/level"
                    },
                    {
                        ID: 3,
                        Text: "Erfahrungspunkte MK",
                        Path: "/muskelkater/erfahrungspunkte"
                    },
                    {
                        ID: 4,
                        Text: "Aktuelle Tendenz (MK) Up/Down",
                        Path: "/muskelkater/tendenz"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Aufgaben"}
                MenuOptions={[
                    {
                        ID: 5,
                        Text: "Trainieren mit deinem PT +200",
                        Path: "/aufgaben/trainieren"
                    },
                    {
                        ID: 6,
                        Text: "Homeworkout",
                        Path: "/aufgaben/homeworkout"
                    },
                    {
                        ID: 7,
                        Text: "Quizfragen",
                        Path: "/aufgaben/quizfragen"
                    },
                    {
                        ID: 8,
                        Text: "Challenges +25",
                        Path: "/aufgaben/challenges"
                    },
                    {
                        ID: 9,
                        Text: "Kann ich nicht lesen",
                        Path: "/aufgaben/nicht_lesen"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Challenges"}
                MenuOptions={[
                    {
                        ID: 10,
                        Text: "MK Challenge",
                        Path: "/challenges/mk_challenge"
                    },
                    {
                        ID: 11,
                        Text: "Challenge mit deinem PT",
                        Path: "/challenges/pt_challenge"
                    },
                    {
                        ID: 12,
                        Text: "Challenge Preise",
                        Path: "/challenges/challenge_preise"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Gewinnspiel"}
                MenuOptions={[
                    {
                        ID: 13,
                        Text: "Sponsor/Partner - Preis",
                        Path: "/gewinnspiel/partner_preis"
                    },
                    {
                        ID: 14,
                        Text: "Teilnahme Vorraussetzungen",
                        Path: "/gewinnspiel/teilnahme_vorraussetzungen"
                    },
                    {
                        ID: 15,
                        Text: "Aufgaben",
                        Path: "/gewinnspiel/aufgaben"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Trainer Netzwerk"}
                MenuOptions={[
                    {
                        ID: 16,
                        Text: "PTs Schwerpunkte & Website",
                        Path: "/trainer_netzwerk/pt_schwerpunkt"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Partner"}
                MenuOptions={[
                    {
                        ID: 17,
                        Text: "Partner aufzeigen",
                        Path: "/partner/aufzeigen"
                    }
                ]}
            />
            <MenuCategorie
                MenuHeadline={"Termine und Events"}
                MenuOptions={[]}
            />
            <MenuCategorie
                MenuHeadline={"QR-Code Scan"}
                MenuOptions={[]}
            />
        </div>
    );
}

