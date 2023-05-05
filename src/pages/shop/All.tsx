import { Link } from "react-router-dom";
import items from "../../data/items.json"
import React from "react"
import Bearings from "./bearings";
import Decks from "./decks";
import Trucks from "./trucks";
import Wheels from "./wheels";


export default function All() {

    return (
            <>
            <Bearings></Bearings>
            <Decks></Decks>
            <Trucks></Trucks>
            <Wheels></Wheels>
        </>
    )
}