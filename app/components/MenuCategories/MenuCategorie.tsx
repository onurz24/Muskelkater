import React from 'react';
import Link from 'next/link';
import { CgHashtag } from "react-icons/cg";

interface MenuOption {
    ID: number;
    Text: string;
    Path: string;
}

interface MenuCategorieProps {
    MenuHeadline: string;
    MenuOptions: MenuOption[];
}

export const MenuCategorie = ({ MenuHeadline, MenuOptions }: MenuCategorieProps) => {
    return (
        <div className="Menu_Categorie">
            <div className="Menu_Categorie_Headline">
                <CgHashtag />
                <div className="Menu_Categorie_Text">
                    {MenuHeadline}
                </div>
            </div>
            <div className="MenuOptions">
                {MenuOptions.map((option: MenuOption) => (
                    <div className="Menu_Option" key={option.ID}>
                        <Link href={option.Path} className="Menu_Option_Headline">
                            <CgHashtag />
                            <div className="Menu_Option_Text">
                                {option.Text}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
